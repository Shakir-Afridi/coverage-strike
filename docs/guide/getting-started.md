# Getting Started

This guide will help you get started with Coverage Strike.

## Prerequisites

- Node.js 18 or higher
- npm, yarn, or pnpm
- A JavaScript or TypeScript project with existing tests

## Installation

Install Coverage Strike as a development dependency:

::: code-group

```bash [npm]
npm install --save-dev coverage-strike
```

```bash [yarn]
yarn add --dev coverage-strike
```

```bash [pnpm]
pnpm add -D coverage-strike
```

:::

## Basic Usage

### 1. Analyze Your Code

First, analyze your codebase to identify potential mutation points:

```bash
npx coverage-strike analyze ./src
```

This will scan your source code and identify functions, classes, and code patterns that are good candidates for mutation testing.

### 2. Run Mutation Tests

Run mutation tests on a specific file or directory:

```bash
npx coverage-strike mutate ./src/utils/calculator.ts --test-command "npm test"
```

### 3. Review Results

Coverage Strike will generate a report showing:
- Which mutations were killed by your tests (good!)
- Which mutations survived (needs attention!)
- Suggestions for improving test coverage

## Configuration

Create a `coverage-strike.config.js` file in your project root:

```javascript
export default {
  // AI provider configuration
  aiProvider: 'openai', // or 'ollama'
  
  // Test command to run
  testCommand: 'npm test',
  
  // Files to analyze
  include: ['src/**/*.ts', 'src/**/*.tsx'],
  exclude: ['**/*.test.ts', '**/*.spec.ts'],
  
  // Mutation options
  mutations: {
    arithmetic: true,
    boolean: true,
    conditional: true,
  }
}
```

## Next Steps

- Learn about [CLI Commands](/cli/)
- Configure [AI Integration](/guide/ai-integration)
- Explore the [API Reference](/api/analyzer)
