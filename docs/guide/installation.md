# Installation

## System Requirements

- **Node.js**: 18.x or higher
- **npm/yarn/pnpm**: Latest stable version
- **Operating System**: macOS, Linux, or Windows

## Package Installation

Install Coverage Strike as a development dependency in your project:

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

## Verify Installation

Check that Coverage Strike is installed correctly:

```bash
npx coverage-strike --version
```

## Dependencies

Coverage Strike will automatically install these dependencies:

- **ts-morph**: For TypeScript AST manipulation
- **commander**: For CLI interface
- **openai**: For OpenAI API integration (optional)

## Optional: Global Installation

You can also install Coverage Strike globally:

```bash
npm install -g coverage-strike
```

Then use it directly:

```bash
coverage-strike analyze ./src
```

## IDE Integration

### VS Code

Install the Coverage Strike extension (coming soon) for inline mutation suggestions.

### Other IDEs

Coverage Strike works with any editor through its CLI interface.

## Troubleshooting

### "Cannot find module" errors

Make sure all peer dependencies are installed:

```bash
npm install --save-dev typescript @types/node
```

### Permission errors

On Unix systems, you might need to add execute permissions:

```bash
chmod +x node_modules/.bin/coverage-strike
```

## Next Steps

- [Getting Started Guide](/guide/getting-started)
- [CLI Commands](/cli/)
- [Configuration](/guide/configuration)
