# Analyzer API

The analyzer module provides code analysis capabilities using AST manipulation.

## analyzeCode

Analyzes source code to identify mutation testing opportunities.

### Signature

```typescript
async function analyzeCode(
  targetPath: string,
  options?: AnalyzeOptions
): Promise<AnalysisResult[]>
```

### Parameters

- `targetPath` (string): Path to file or directory to analyze
- `options` (AnalyzeOptions, optional):
  - `output` (string): Path to write JSON results
  - `aiProvider` (string): AI provider to use ('openai' or 'ollama')

### Returns

Promise resolving to an array of `AnalysisResult` objects:

```typescript
interface AnalysisResult {
  filePath: string;
  functions: string[];
  classes: string[];
  mutations: string[];
}
```

### Example

```typescript
import { analyzeCode } from 'coverage-strike';

// Analyze a single file
const results = await analyzeCode('./src/utils/calculator.ts', {
  aiProvider: 'openai'
});

// Analyze a directory
const dirResults = await analyzeCode('./src', {
  output: 'analysis-results.json',
  aiProvider: 'ollama'
});

// Process results
results.forEach(result => {
  console.log(`File: ${result.filePath}`);
  console.log(`Functions: ${result.functions.join(', ')}`);
  console.log(`Suggested mutations: ${result.mutations.length}`);
});
```

## AST Analysis

Coverage Strike uses [ts-morph](https://ts-morph.com/) for TypeScript AST manipulation, providing:

- **Function detection**: Identifies all functions and methods
- **Class analysis**: Finds classes and their members
- **Type information**: Leverages TypeScript's type system
- **Code patterns**: Detects common patterns for mutation

## Integration with Build Tools

The analyzer can be integrated into your build pipeline:

```javascript
// build-script.js
import { analyzeCode } from 'coverage-strike';

async function analyzeBuild() {
  const results = await analyzeCode('./src');
  
  // Check for files with low mutation potential
  const lowCoverage = results.filter(r => r.mutations.length < 3);
  
  if (lowCoverage.length > 0) {
    console.warn('Files with limited mutation opportunities:', 
      lowCoverage.map(r => r.filePath)
    );
  }
}

analyzeBuild();
```
