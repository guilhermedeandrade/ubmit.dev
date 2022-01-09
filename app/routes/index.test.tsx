import {render, screen} from '@testing-library/react'
import Index from './index'

test('renders heading with welcome to remix text', () => {
  render(<Index />)

  expect(screen.getByText(/welcome to remix/i)).toBeInTheDocument()
})
