const isFruitJs = `/* find banana from this fruit list array ['apple', 'banana', 'cherry']*/
export function isFruit (possibleFruit) {
    // write down your code
    return;
}`
// return fruitList.includes(possibleFruit)  
const isFruitTestJs = `import { isFruit } from '/isFruit.js'
describe('', () => {	
  test('test 1: find out banana fruit is in the list', () => {
    expect(isFruit('banana')).toBe("banana")
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
