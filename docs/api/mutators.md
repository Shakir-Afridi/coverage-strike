# Mutators API

Mutators are responsible for generating code mutations for testing.

## Overview

Coverage Strike includes various mutator types that modify different aspects of your code.

## Built-in Mutators

### Arithmetic Mutator

Modifies arithmetic operators:

```typescript
// Original
const result = a + b;

// Mutations
const result = a - b;  // + to -
const result = a * b;  // + to *
const result = a / b;  // + to /
```

### Boolean Mutator

Modifies boolean operators:

```typescript
// Original
if (condition1 && condition2) { }

// Mutations
if (condition1 || condition2) { }  // && to ||
if (!(condition1 && condition2)) { }  // negate
```

### Conditional Mutator

Modifies comparison operators:

```typescript
// Original
if (x > 5) { }

// Mutations
if (x >= 5) { }   // > to >=
if (x < 5) { }    // > to <
if (x <= 5) { }   // > to <=
if (x === 5) { }  // > to ===
```

### Assignment Mutator

Modifies assignment operators:

```typescript
// Original
x += 5;

// Mutations
x -= 5;  // += to -=
x *= 5;  // += to *=
x = 5;   // += to =
```

## Custom Mutators

You can create custom mutators by extending the base `Mutator` class:

```typescript
import { Mutator, Mutation } from 'coverage-strike';

export class CustomMutator extends Mutator {
  name = 'custom-mutator';
  
  canMutate(node: ts.Node): boolean {
    // Return true if this node can be mutated
    return ts.isStringLiteral(node);
  }
  
  mutate(node: ts.Node): Mutation[] {
    // Generate mutations for this node
    return [
      {
        original: node.getText(),
        mutated: '"mutated-string"',
        description: 'String literal mutation',
        location: {
          start: node.getStart(),
          end: node.getEnd(),
        }
      }
    ];
  }
}
```

### Registering Custom Mutators

```javascript
// coverage-strike.config.js
import { CustomMutator } from './mutators/custom';

export default {
  mutators: [
    new CustomMutator(),
  ]
}
```

## Mutation Types

### First-Order Mutations

Simple, single-point mutations:
- Operator changes
- Constant modifications
- Statement deletions

### Higher-Order Mutations

Multiple mutations combined:
- Useful for finding complex test weaknesses
- More expensive to compute
- Requires AI to prioritize effectively

## AI-Enhanced Mutation Selection

Coverage Strike uses AI to select the most valuable mutations:

```typescript
import { selectMutations } from 'coverage-strike';

const mutations = await selectMutations({
  sourceFile: './src/utils.ts',
  strategy: 'ai-prioritized',
  maxMutations: 50,
  aiProvider: 'openai'
});

// Mutations are ranked by likelihood to reveal bugs
mutations.forEach((mutation, index) => {
  console.log(`${index + 1}. ${mutation.description} (confidence: ${mutation.confidence})`);
});
```

## Mutation Strategies

### Coverage-Based

Target code with existing coverage but weak assertions.

### Complexity-Based

Focus on complex code paths (high cyclomatic complexity).

### AI-Based

Use AI to predict which mutations will be most revealing.

### Hybrid

Combine multiple strategies for best results.

## API Reference

### Mutation Interface

```typescript
interface Mutation {
  original: string;
  mutated: string;
  description: string;
  location: {
    start: number;
    end: number;
    line?: number;
    column?: number;
  };
  mutator: string;
  confidence?: number; // 0-1, from AI
}
```

### MutationResult Interface

```typescript
interface MutationResult {
  mutation: Mutation;
  killed: boolean;        // Did tests catch it?
  testsPassed: number;
  testsFailed: number;
  executionTime: number;
  error?: string;
}
```
