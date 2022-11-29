const Component = `import React, {useState} from 'react'
export default function Component() {
    const [willShow, setWillShow] = useState(false)
    return (
        <>
            <button onClick={() => setWillShow(!willShow)}>click here</button>
            {willShow ? <p>Rendered</p> : null}
        </>
    )
}
`

const reactTestCode = `import { render, screen, waitFor, within } from '@testing-library/react'
import App from './App'
// import Component from './Component'


describe('',() => {
  test('Test 1: Tag should be H1 in App Component',async () => {
    const { container } = render(<App />)
    const h1Element = container.querySelector("h1")
    await waitFor(() => {
      expect(h1Element.tagName).toBe("H1")
    })
  })

  test('Test 2: Text should be Hello World in App Component',async () => {
    const {getByText} = render(<App />)
    expect(getByText('Hello World')).toBeDefined()
  })
})
`

export const files = {
  "Component.js": {
    code: Component
  },
  'index.test.js': {
    code: reactTestCode
  },
}

export default files
