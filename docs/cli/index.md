# CLI Commands

Coverage Strike provides a powerful command-line interface for mutation testing.

## analyze

Analyze code to identify mutation testing opportunities.

```bash
coverage-strike analyze <path> [options]
```

### Arguments

- `<path>` - Path to the code file or directory to analyze

### Options

- `-o, --output <file>` - Output file for results (JSON format)
- `--ai-provider <provider>` - AI provider to use: `openai` or `ollama` (default: `openai`)

### Examples

Analyze a single file:
```bash
coverage-strike analyze src/utils/calculator.ts
```

Analyze a directory with custom output:
```bash
coverage-strike analyze ./src --output results.json
```

Use Ollama instead of OpenAI:
```bash
coverage-strike analyze ./src --ai-provider ollama
```

## mutate

Generate and apply mutations to code, then run tests.

```bash
coverage-strike mutate <path> [options]
```

### Arguments

- `<path>` - Path to the code file to mutate

### Options

- `-t, --test-command <command>` - Test command to run (default: `npm test`)
- `--dry-run` - Show mutations without applying them

### Examples

Run mutation tests:
```bash
coverage-strike mutate src/utils/calculator.ts
```

Preview mutations without applying:
```bash
coverage-strike mutate src/utils/calculator.ts --dry-run
```

Use a custom test command:
```bash
coverage-strike mutate src/utils/calculator.ts --test-command "yarn test"
```

## Environment Variables

Coverage Strike uses environment variables for configuration:

- `OPENAI_API_KEY` - Your OpenAI API key for AI-powered analysis
- `OLLAMA_HOST` - Ollama server host (default: `http://localhost:11434`)

### Setting up OpenAI

```bash
export OPENAI_API_KEY=your-api-key-here
coverage-strike analyze ./src
```

### Using Ollama locally

```bash
# Start Ollama server
ollama serve

# Run Coverage Strike with Ollama
coverage-strike analyze ./src --ai-provider ollama
```
