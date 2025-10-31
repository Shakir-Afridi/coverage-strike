# AI Integration

Coverage Strike supports multiple AI backends for intelligent mutation analysis.

## OpenAI Integration

The default and recommended option for production use.

### Setup

1. Get an API key from [OpenAI](https://platform.openai.com/)
2. Set the environment variable:

```bash
export OPENAI_API_KEY=your-api-key-here
```

3. Run Coverage Strike:

```bash
coverage-strike analyze ./src --ai-provider openai
```

### Configuration

By default, Coverage Strike uses GPT-4 for analysis. You can customize this in your configuration file:

```javascript
// coverage-strike.config.js
export default {
  aiProvider: 'openai',
  openai: {
    model: 'gpt-4',
    maxTokens: 500,
    temperature: 0.7,
  }
}
```

## Ollama Integration

For local, offline AI processing.

### Setup

1. Install [Ollama](https://ollama.ai/)
2. Start the Ollama server:

```bash
ollama serve
```

3. Pull a model:

```bash
ollama pull llama2
```

4. Run Coverage Strike with Ollama:

```bash
coverage-strike analyze ./src --ai-provider ollama
```

### Configuration

```javascript
// coverage-strike.config.js
export default {
  aiProvider: 'ollama',
  ollama: {
    host: 'http://localhost:11434',
    model: 'llama2',
  }
}
```

## Benefits of AI-Powered Analysis

- **Smart Prioritization**: Focus on mutations most likely to reveal bugs
- **Context-Aware**: Understands code patterns and suggests relevant mutations
- **Learning**: Improves suggestions based on your codebase
- **Time Saving**: Reduces unnecessary test runs

## Privacy & Security

- **OpenAI**: Data is sent to OpenAI's servers (check their privacy policy)
- **Ollama**: All processing happens locally on your machine
- **No Code Storage**: Coverage Strike doesn't store your code anywhere

Choose the option that best fits your security and privacy requirements.
