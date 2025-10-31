#!/usr/bin/env node
import { Command } from 'commander';
import { analyzeCode } from '../lib/analyzer';

const program = new Command();

program
  .name('coverage-strike')
  .description('AI-powered mutation testing library for JavaScript and TypeScript')
  .version('0.0.0');

program
  .command('analyze')
  .description('Analyze code for mutation testing opportunities')
  .argument('<path>', 'Path to the code file or directory to analyze')
  .option('-o, --output <file>', 'Output file for results')
  .option('--ai-provider <provider>', 'AI provider to use (openai, ollama)', 'openai')
  .action(async (path: string, options) => {
    console.log(`Analyzing code at: ${path}`);
    console.log(`AI Provider: ${options.aiProvider}`);
    
    try {
      await analyzeCode(path, options);
      console.log('Analysis complete!');
      
      if (options.output) {
        console.log(`Results written to: ${options.output}`);
      }
    } catch (error) {
      console.error('Error during analysis:', error);
      process.exit(1);
    }
  });

program
  .command('mutate')
  .description('Generate and apply mutations to code')
  .argument('<path>', 'Path to the code file to mutate')
  .option('-t, --test-command <command>', 'Test command to run', 'npm test')
  .option('--dry-run', 'Show mutations without applying them')
  .action(async (path: string, options) => {
    console.log(`Mutating code at: ${path}`);
    console.log(`Test command: ${options.testCommand}`);
    console.log(`Dry run: ${options.dryRun ? 'Yes' : 'No'}`);
    
    // Implementation will be added
    console.log('Mutation testing not yet implemented');
  });

program.parse();
