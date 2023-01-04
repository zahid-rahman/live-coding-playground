const htmlBoilerplateFiles = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Link</title>
    <link rel="stylesheet" src="./styles.css"/>
    <style>
      .link-color {
        color: red
      }
    </style>
  </head>
  <body  onload="document.querySelector('a').style">
    <h1 class="link-color" >Link</h1>
    <!-- Write the code below this line -->
    <a href="www.google.com" class="link-color">Google!</a>
    <script src="src/index.js"></script>
  </body>
</html>

`

const htmlTestCode = `import { fireEvent, getByText } from '@testing-library/dom'
// import { JSDOM as Jsdom } from 'jsdom'
import fs from 'fs'
import path from 'path'
// import quixote from 'quixote;;

let html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

let dom
let container
let frame

beforeEach(() => {
    var parser = new DOMParser();
	dom = parser.parseFromString(html, 'text/html');
    container = dom.querySelector('body')
  })

console.log('triggered')

describe('', () => {
  test('Test 1: link exists ', () => {    
    expect(container.querySelector('a')).not.toBeNull()
  })


  test('Test 2: Points to www.google.com ', () => {
    expect(container.querySelector('a').getAttribute("href")).toBe("www.google.com")
  })


  test('Test 3: Anchor is Google! ', () => {
    expect(container.querySelector('a').innerText).toBe("Google!")
  })


  test('test 4: Text color should be red', () => {
    var computedStyle = getComputedStyle(container.querySelector('a'))

    console.log("COMPUTED STYLE:",computedStyle)

    console.log(container.querySelector('a'))

    expect(container.querySelector('a').style.color).toBe("red")
  })
})
`
export function setCode(code) {
  return code
}

export const files = {
    '/styles.css': {
      code: `.link-color: {
        color: red
    }`
    },
    'index.html': {
        code: htmlBoilerplateFiles
    },
    'index.test.js': {
        code: htmlTestCode
    },
    'src/index.js': {
      code: ''
    }
}

export default files
