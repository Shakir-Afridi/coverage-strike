import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the main heading', () => {
    render(<App />)
    expect(screen.getByText('⚡ Coverage Strike')).toBeInTheDocument()
  })

  it('displays the subtitle', () => {
    render(<App />)
    expect(screen.getByText(/AI-Powered Mutation Testing/i)).toBeInTheDocument()
  })

  it('increments mutations counter when button is clicked', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /Mutations Generated: 0/i })
    
    fireEvent.click(button)
    expect(screen.getByText(/Mutations Generated: 1/i)).toBeInTheDocument()
    
    fireEvent.click(button)
    expect(screen.getByText(/Mutations Generated: 2/i)).toBeInTheDocument()
  })

  it('displays the tech stack', () => {
    render(<App />)
    expect(screen.getByText(/Language:/i)).toBeInTheDocument()
    expect(screen.getByText(/Test Runner:/i)).toBeInTheDocument()
    expect(screen.getByText(/Commander\.js/i)).toBeInTheDocument()
    expect(screen.getByText(/VitePress/i)).toBeInTheDocument()
  })

  it('shows the CLI command', () => {
    render(<App />)
    expect(screen.getByText(/npm run cli analyze/i)).toBeInTheDocument()
  })
})
