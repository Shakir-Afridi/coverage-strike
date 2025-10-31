import { useState } from 'react'
import './App.css'

function App() {
  const [mutations, setMutations] = useState<number>(0)

  return (
    <>
      <div>
        <h1>⚡ Coverage Strike</h1>
        <p className="subtitle">
          AI-Powered Mutation Testing for JavaScript & TypeScript
        </p>
      </div>
      
      <div className="card">
        <h2>Key Features</h2>
        <ul className="features">
          <li>🤖 AI-powered mutation prioritization</li>
          <li>📊 Intelligent test coverage analysis</li>
          <li>🎯 Target weak points in your tests</li>
          <li>⚡ Built with TypeScript & React</li>
        </ul>
      </div>

      <div className="card">
        <h2>Tech Stack</h2>
        <ul className="tech-stack">
          <li><strong>Language:</strong> TypeScript</li>
          <li><strong>AST Tooling:</strong> ts-morph, SWC</li>
          <li><strong>Test Runner:</strong> Vitest</li>
          <li><strong>AI Backend:</strong> OpenAI API</li>
          <li><strong>CLI:</strong> Commander.js</li>
          <li><strong>Docs:</strong> VitePress</li>
        </ul>
      </div>

      <div className="card">
        <button onClick={() => setMutations((prev) => prev + 1)}>
          Mutations Generated: {mutations}
        </button>
        <p className="help-text">
          Click to simulate mutation generation
        </p>
      </div>

      <div className="getting-started">
        <h3>Getting Started</h3>
        <code className="command">npm run cli analyze ./src</code>
      </div>
    </>
  )
}

export default App
