const Component = `/* design a button that will be shown a paragraph tag with inner text "Rendered" after clicking it.
Note: This button will behave like a toggle. Don't forget to import this component in App component */
import React from 'react'
export default function Component() {
    return (
        <>
            {/* write your code here */}
        </>
    )
}
`
/* ANSWER */
// import React, {useState} from 'react'
// export default function Component() {
//     const [willShow, setWillShow] = useState(false)
//     return (
//         <>
//             <button onClick={() => setWillShow(!willShow)}>click here</button>
//             {willShow ? <p>Rendered</p> : null}
//         </>
//     )
// }


const reactTestCode = `import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import App from './App'
import Component from './Component'


describe('',() => {
  test('Test 1: Tag should be H1 in <App />',async () => {
    const { container } = render(<App />)
    const h1Element = container.querySelector("h1")
    await waitFor(() => {
      expect(h1Element.tagName).toBe("H1")
    })
  })

  test('Test 2: Text should be Hello World in <App />',async () => {
    const {getByText} = render(<App />)
    expect(getByText('Hello World')).toBeDefined()
  })

  test('Test 3: button element appearance in <Component />',async () => {
    const {getByText} = render(<Component />)
    expect(getByText('click here')).toBeDefined()
  })

  test('Test 4: Click the button and check the render paragraph element with inner text "Rendered" in <Component />',async () => {
    const {getByText} = render(<Component />)
    fireEvent.click(getByText('click here'))
    expect(getByText('Rendered')).toBeDefined()
  })
})
`

const App = `import Component from './Component'
 export default function App() {
  return (
    <>
      {/* add h1 tag code here */}
      {/* add component here */}
    </>
  )
 }
`

export const files = {
  "Component.jsx": {
    code: Component
  },
  "App.js": {
    code: App
  },
  'index.test.js': {
    code: reactTestCode
  },
}

export default files
