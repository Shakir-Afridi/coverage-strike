# What is Coverage Strike?

Coverage Strike is an AI-powered mutation testing library for JavaScript and TypeScript that helps you identify weaknesses in your test coverage.

## The Problem

Traditional code coverage metrics can be misleading. Just because a line of code is executed during tests doesn't mean it's properly tested. You might have:

- Tests that execute code but don't make meaningful assertions
- Missing edge cases that aren't covered
- Logic errors that slip through because tests are too permissive

## The Solution

Coverage Strike uses **mutation testing** to verify the quality of your tests:

1. **Mutate**: Automatically introduce small changes to your code (mutations)
2. **Test**: Run your test suite against each mutation
3. **Analyze**: If tests still pass, you've found a weakness
4. **Improve**: Add or enhance tests to catch the mutations

## AI-Powered Intelligence

What sets Coverage Strike apart is its use of AI to:

- **Prioritize mutations** that are most likely to reveal real issues
- **Suggest test improvements** based on mutation analysis
- **Identify patterns** in weak test coverage
- **Generate meaningful mutations** that reflect real-world bugs

## Key Features

- 🎯 Intelligent mutation prioritization using AI
- ⚡ Fast execution with modern tooling (Vite, SWC)
- 📊 Detailed reports and insights
- 🔧 TypeScript-first with excellent type support
- 🚀 Easy CLI interface
- 🤖 Supports OpenAI, Ollama, and local LLMs
