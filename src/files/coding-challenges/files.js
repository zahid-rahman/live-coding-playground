// files for coding challenges
const globalBoilerPlate = `export function textToNumberBinary(str) {
	/* put your code here */
}`

/*
Solution:
const textToNumberBinary = str => {
  const cleanStr = str
  	.replace(/zero/gi, '0')
  	.replace(/one/gi, '1')
    .replace(/[^01]/g, '');
  
  const strLength = Math.floor(cleanStr.length / 8) * 8;
  
  return cleanStr.slice(0, strLength);
}

const textToNumberBinary = str => {
  const cleanStr = str
  	.replace(/zero/gi, '0')
  	.replace(/one/gi, '1')
    .replace(/[^01]/g, '');
  
    return cleanStr
}


*/

// return fruitList.includes(possibleFruit)  
const questionTests = `import { textToNumberBinary } from '/index.js'
describe('', () => {
    test('Test 1: returned answer should be string', () => {
        expect(typeof textToNumberBinary("zero one zero one zero one zero one")).toBe("string")
      })	


    test('Test 2: input: "zero one zero one zero one zero one" -> output: "01010101"', () => {
        expect(textToNumberBinary("zero one zero one zero one zero one")).toBe("01010101")
    })


    test('Test 3: input: "Zero one zero ONE zero one zero one" -> output: "01010101" (check the case insensitive)', () => {
        expect(textToNumberBinary("Zero one zero ONE zero one zero one")).toBe("01010101")
    })



    test('Test 4: input: "one one" -> output: ""', () => {
        expect(textToNumberBinary("one one")).toBe("")
    })


    test('Test 5: input: "zero one zero one zero one zero one one two" -> output: "01010101" (only except 8 string)', () => {
        expect(textToNumberBinary("zero one zero one zero one zero one one two")).toBe("01010101")
    })


    test('Test 6: input: "zero one zero one zero one zero three" -> output: ""', () => {
        expect(textToNumberBinary("zero one zero one zero one zero three")).toBe("")
    })
})
`

export const CodeChallengeFiles = {
    '/index.js': {
        code: globalBoilerPlate
    },

    '/index.test.js': {
        code: questionTests
    }

}

export default CodeChallengeFiles
