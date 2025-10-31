# Configuration

Coverage Strike can be configured using a configuration file or command-line options.

## Configuration File

Create a `coverage-strike.config.js` file in your project root:

```javascript
export default {
  // AI Provider Configuration
  aiProvider: 'openai', // 'openai' or 'ollama'
  
  // OpenAI Settings
  openai: {
    apiKey: process.env.OPENAI_API_KEY,
    model: 'gpt-4',
    maxTokens: 500,
    temperature: 0.7,
  },
  
  // Ollama Settings
  ollama: {
    host: 'http://localhost:11434',
    model: 'llama2',
  },
  
  // Test Configuration
  testCommand: 'npm test',
  testTimeout: 60000, // 60 seconds
  
  // File Patterns
  include: [
    'src/**/*.ts',
    'src/**/*.tsx',
    'src/**/*.js',
    'src/**/*.jsx',
  ],
  exclude: [
    '**/*.test.ts',
    '**/*.test.tsx',
    '**/*.spec.ts',
    '**/*.spec.tsx',
    '**/node_modules/**',
    '**/dist/**',
  ],
  
  // Mutation Configuration
  mutations: {
    arithmetic: true,      // +, -, *, /
    boolean: true,         // &&, ||, !
    conditional: true,     // <, >, <=, >=, ==, !=
    assignment: true,      // =, +=, -=
    increment: true,       // ++, --
    stringLiteral: false,  // string mutations
    numberLiteral: false,  // number mutations
  },
  
  // Reporting
  report: {
    format: 'html',        // 'html', 'json', 'text'
    outputDir: './coverage-strike-report',
    includeSourceCode: true,
  },
  
  // Performance
  parallel: true,
  maxWorkers: 4,
  
  // Advanced
  cache: true,
  cacheDir: './.coverage-strike-cache',
}
```

## TypeScript Configuration

For TypeScript projects, you can use a `.ts` config file:

```typescript
// coverage-strike.config.ts
import { defineConfig } from 'coverage-strike';

export default defineConfig({
  aiProvider: 'openai',
  testCommand: 'npm test',
  mutations: {
    arithmetic: true,
    boolean: true,
    conditional: true,
  }
});
```

## Environment Variables

Coverage Strike respects these environment variables:

- `OPENAI_API_KEY`: Your OpenAI API key
- `OLLAMA_HOST`: Ollama server URL
- `COVERAGE_STRIKE_CACHE`: Enable/disable caching (true/false)
- `COVERAGE_STRIKE_DEBUG`: Enable debug logging

Example:

```bash
export OPENAI_API_KEY=sk-...
export COVERAGE_STRIKE_DEBUG=true
coverage-strike analyze ./src
```

## CLI Options

Command-line options override configuration file settings:

```bash
coverage-strike analyze ./src \
  --ai-provider ollama \
  --output results.json
```

## Project-Specific Settings

You can have different configurations for different environments:

```javascript
// coverage-strike.config.js
const isDev = process.env.NODE_ENV === 'development';

export default {
  aiProvider: isDev ? 'ollama' : 'openai',
  testCommand: isDev ? 'npm test -- --watch=false' : 'npm test',
  parallel: !isDev,
}
```

## Ignoring Files

Create a `.coveragestrikeignore` file:

```
# Ignore build artifacts
dist/
build/

# Ignore test files
**/*.test.ts
**/*.spec.ts

# Ignore vendor code
node_modules/
vendor/
```
