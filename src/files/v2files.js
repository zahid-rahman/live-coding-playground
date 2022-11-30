// files for coding challenges
const globalBoilerPlate = `
import { isFruit } from './main.js'
/* find banana from this fruit list array ['apple', 'banana', 'cherry']*/
export function fruit () {
  // write down your code
  const data = isFruit("banana")
  return data
}`

const mainSnippet = `
  //find banana from this fruit list array ['apple', 'banana', 'cherry']*/
  export function isFruit(possibleFruit) {
    const fruites = ['apple', 'banana', 'cherry']
    /*write the code here */
    return null
  }
`

// return fruitList.includes(possibleFruit)  
const isFruitTestJs = `import { fruit } from '/index.js'
describe('', () => {	
  test('test 1: find out banana fruit is in the list', () => {
    expect(fruit()).toBe("banana")
  })
})
`

export const files = {
    '/index.js': {
        code: globalBoilerPlate
    },
    '/main.js': {
      code: mainSnippet
  },
    '/isFruit.test.js': {
        code: isFruitTestJs
    }

}

export default files
