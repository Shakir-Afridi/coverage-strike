---
layout: home

hero:
  name: Coverage Strike
  text: AI-Powered Mutation Testing
  tagline: Strike at the weak points in your test coverage with intelligent mutation testing
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/Shakir-Afridi/coverage-strike

features:
  - icon: 🤖
    title: AI-Powered Analysis
    details: Uses OpenAI or local LLMs to intelligently prioritize impactful mutations and identify weak test coverage.
  
  - icon: ⚡
    title: Fast & Efficient
    details: Built on Vite and modern tools for lightning-fast mutation generation and testing cycles.
  
  - icon: 🎯
    title: Precise Targeting
    details: Focus on the mutations that matter most, saving time and uncovering real issues in your tests.
  
  - icon: 📊
    title: Comprehensive Reports
    details: Detailed analysis and reporting of mutation test results with actionable insights.
  
  - icon: 🔧
    title: TypeScript First
    details: Full TypeScript support with advanced AST manipulation using ts-morph and SWC.
  
  - icon: 🚀
    title: Easy Integration
    details: Simple CLI interface with Commander.js, integrates seamlessly with existing test suites.
---

## Quick Start

Install Coverage Strike:

```bash
npm install coverage-strike
```

Analyze your code:

```bash
npx coverage-strike analyze ./src
```

Run mutation tests:

```bash
npx coverage-strike mutate ./src --test-command "npm test"
```

## Tech Stack

- **Language:** TypeScript
- **AST Tooling:** ts-morph, SWC, Babel
- **Test Runner:** Vitest
- **AI Backend:** OpenAI API, Ollama support
- **CLI:** Commander.js with tsx
- **Documentation:** VitePress
- **CI/CD:** GitHub Actions with release-please
