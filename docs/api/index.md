# API Reference

Welcome to the Coverage Strike API documentation.

## Core Modules

### [Analyzer](/api/analyzer)

The analyzer module provides code analysis capabilities using AST manipulation with ts-morph.

**Key Functions:**
- `analyzeCode()` - Analyze source code for mutation opportunities
- AST traversal and manipulation
- Integration with AI providers

### [Mutators](/api/mutators)

The mutators module handles code mutation generation and application.

**Key Features:**
- Built-in mutator types (arithmetic, boolean, conditional, etc.)
- Custom mutator support
- AI-enhanced mutation selection

## Quick Start

```typescript
import { analyzeCode } from 'coverage-strike';

// Analyze code
const results = await analyzeCode('./src', {
  aiProvider: 'openai',
  output: 'results.json'
});

console.log(`Analyzed ${results.length} files`);
```

## TypeScript Support

Coverage Strike is written in TypeScript and provides full type definitions:

```typescript
import type {
  AnalyzeOptions,
  AnalysisResult,
  Mutation,
  MutationResult
} from 'coverage-strike';
```

## Module Structure

```
coverage-strike/
├── analyzer/       # Code analysis
├── mutators/       # Mutation generators
├── cli/           # Command-line interface
├── ai/            # AI integration
└── utils/         # Utility functions
```

## Package Exports

```typescript
// Main exports
export { analyzeCode } from './lib/analyzer';
export { Mutator } from './lib/mutators/base';
export type { 
  AnalyzeOptions,
  AnalysisResult,
  Mutation,
  MutationResult 
} from './types';
```
