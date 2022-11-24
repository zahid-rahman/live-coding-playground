const isFruitJs = `const fruitList = ['apple', 'banana', 'cherry']
export function isFruit (possibleFruit) {
    // write down your code
}`
// return fruitList.includes(possibleFruit)  
const isFruitTestJs = `import { isFruit } from '/isFruit.js'
	
describe('test 1', () => {	
  test('banana is a fruit', () => {
    expect(isFruit('banana')).toBe(true)
  })
})
`

export const files = {
    '/isFruit.js': {
        code: isFruitJs
    },
    '/isFruit.test.js': {
        code: isFruitTestJs
    }

}

export default files
