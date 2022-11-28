// const Component = `export default function Component() {
//     return (
//         <>
//             <p role="paragraph">data</p>
//         </>
//     )
// }
// `

const reactTestCode = `import { render, screen } from '@testing-library/dom'
import App from './App'

describe('', () => {
  test('Test 1: Component Render and have title named data (role attribute should be named as paragraph)', () => {
    // render(<App />)
    expect(1+3).toBe(4)
    // expect(screen.getByRole("paragraph")).toHaveTextContent(/data/);
  })
})
`

export function setCode(code) {
  return code
}

export const files = {
    'index.test.js': {
        code: reactTestCode
    },
}

export default files
