import { Project } from 'ts-morph';
import { OpenAI } from 'openai';
import * as fs from 'fs';
import * as path from 'path';

export interface AnalyzeOptions {
  output?: string;
  aiProvider?: string;
}

export interface AnalysisResult {
  filePath: string;
  functions: string[];
  classes: string[];
  mutations: string[];
}

/**
 * Analyze code using ts-morph for AST manipulation
 */
export async function analyzeCode(
  targetPath: string,
  options: AnalyzeOptions = {}
): Promise<AnalysisResult[]> {
  const project = new Project({
    tsConfigFilePath: path.join(process.cwd(), 'tsconfig.json'),
  });

  // Add source files
  const stats = fs.statSync(targetPath);
  if (stats.isDirectory()) {
    project.addSourceFilesAtPaths(`${targetPath}/**/*.{ts,tsx}`);
  } else {
    project.addSourceFileAtPath(targetPath);
  }

  const results: AnalysisResult[] = [];

  for (const sourceFile of project.getSourceFiles()) {
    const functions = sourceFile
      .getFunctions()
      .map(f => f.getName() || 'anonymous');
    
    const classes = sourceFile
      .getClasses()
      .map(c => c.getName() || 'anonymous');

    // Get potential mutations using AI
    const mutations = await suggestMutations(
      sourceFile.getText(),
      options.aiProvider || 'openai'
    );

    results.push({
      filePath: sourceFile.getFilePath(),
      functions,
      classes,
      mutations,
    });
  }

  // Write results if output specified
  if (options.output) {
    fs.writeFileSync(
      options.output,
      JSON.stringify(results, null, 2)
    );
  }

  return results;
}

/**
 * Use AI to suggest code mutations for testing
 */
async function suggestMutations(
  code: string,
  provider: string
): Promise<string[]> {
  // This is a basic implementation
  // In production, you would integrate with OpenAI or Ollama
  
  if (provider === 'openai' && process.env.OPENAI_API_KEY) {
    try {
      const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
      });

      const response = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: 'You are a mutation testing expert. Suggest meaningful code mutations.',
          },
          {
            role: 'user',
            content: `Suggest 3 important mutations for this code:\n\n${code}`,
          },
        ],
        max_tokens: 500,
      });

      const suggestions = response.choices[0]?.message?.content || '';
      return suggestions.split('\n').filter(s => s.trim().length > 0);
    } catch (error) {
      console.warn('OpenAI API error:', error);
    }
  }

  // Fallback to basic mutations
  return [
    'Change arithmetic operators (+ to -, * to /)',
    'Invert boolean conditions (!== to ===)',
    'Modify boundary values (< to <=, > to >=)',
  ];
}
