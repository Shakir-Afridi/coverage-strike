# Coverage Strike ⚡

Coverage Strike is an AI-powered mutation testing library for JavaScript and TypeScript that strikes at the weak points in your test coverage. It intelligently mutates your code and uses AI to prioritize impactful mutations, helping you uncover silent failures, missing assertions, and untested logic paths.

## Features

- 🤖 **AI-Powered Analysis**: Uses OpenAI or local LLMs to intelligently prioritize mutations
- ⚡ **Fast & Modern**: Built with Vite, TypeScript, and modern tooling
- 🎯 **Precise Targeting**: Focus on mutations that matter most
- 📊 **Comprehensive Reports**: Detailed analysis with actionable insights
- 🔧 **TypeScript First**: Full TypeScript support with advanced AST manipulation
- 🚀 **Easy Integration**: Simple CLI interface with powerful configuration options

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Language** | TypeScript |
| **Frontend** | React 19 + Vite |
| **AST Tooling** | ts-morph, SWC, Babel |
| **Test Runner** | Vitest |
| **AI Backend** | OpenAI API, Ollama |
| **CLI** | Commander.js with tsx |
| **Documentation** | VitePress |
| **CI/CD** | GitHub Actions + release-please |

## Installation

```bash
npm install --save-dev coverage-strike
```

## Quick Start

### Analyze Code

```bash
npx coverage-strike analyze ./src
```

### Run Mutation Tests

```bash
npx coverage-strike mutate ./src/utils/calculator.ts --test-command "npm test"
```

### Preview Mutations (Dry Run)

```bash
npx coverage-strike mutate ./src/utils/calculator.ts --dry-run
```

## Configuration

Create a `coverage-strike.config.js` file:

```javascript
export default {
  aiProvider: 'openai',
  testCommand: 'npm test',
  include: ['src/**/*.ts', 'src/**/*.tsx'],
  exclude: ['**/*.test.ts', '**/*.spec.ts'],
  mutations: {
    arithmetic: true,
    boolean: true,
    conditional: true,
  }
}
```

## Environment Setup

```bash
# Copy example environment file
cp .env.example .env

# Add your OpenAI API key
export OPENAI_API_KEY=your-api-key-here
```

Or use Ollama for local AI:

```bash
ollama serve
coverage-strike analyze ./src --ai-provider ollama
```

## Development

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Run Tests

```bash
npm test
```

### Build Project

```bash
npm run build
```

### Build Documentation

```bash
npm run docs:dev     # Development
npm run docs:build   # Production
```

### Run CLI

```bash
npm run cli -- analyze ./src
```

## Documentation

Full documentation is available at [docs](./docs):

- [Getting Started](./docs/guide/getting-started.md)
- [CLI Commands](./docs/cli/index.md)
- [Configuration](./docs/guide/configuration.md)
- [API Reference](./docs/api/analyzer.md)

Or view the built documentation:

```bash
npm run docs:dev
```

## CI/CD

This project uses GitHub Actions for continuous integration and release-please for automated releases.

### Workflows

- **CI**: Runs on every push and pull request
  - Linting with ESLint
  - Type checking with TypeScript
  - Unit tests with Vitest
  - Build verification
  - Documentation build

- **Release Please**: Automated releases on main branch
  - Generates changelog
  - Creates GitHub releases
  - Publishes to npm

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite development server |
| `npm run build` | Build production bundle |
| `npm run lint` | Run ESLint |
| `npm test` | Run Vitest tests |
| `npm run test:ui` | Run Vitest with UI |
| `npm run test:coverage` | Generate coverage report |
| `npm run docs:dev` | Start VitePress dev server |
| `npm run docs:build` | Build documentation |
| `npm run cli` | Run CLI tool |

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

## License

This project is licensed under the terms specified in the LICENSE file.

## Support

For issues and questions:
- Open an [issue](https://github.com/Shakir-Afridi/coverage-strike/issues)
- Check the [documentation](./docs)

---

Built with ❤️ using TypeScript, React, and AI
