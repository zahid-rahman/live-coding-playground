const htmlFiles = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Link</title>
    <link rel="stylesheet" src="./style.css"/>
  </head>
  <body  onload="document.querySelector('a').style">
    <h1>Link</h1>
    <!-- Write the code below this line -->
  </body>
</html>

`

const htmlTestCode = `import { fireEvent, getByText } from '@testing-library/dom'
// import { JSDOM as Jsdom } from 'jsdom'
import fs from 'fs'
import path from 'path'
let html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

let dom
let container

beforeEach(() => {
    var parser = new DOMParser();
	dom = parser.parseFromString(html, 'text/html');
    container = dom.querySelector('body')
  })


describe('', () => {
  test('Test 1: link exists ', () => {
    expect(container.querySelector('a')).not.toBeNull()
  })


  test('Test 2: Points to www.google.com ', () => {
    expect(container.querySelector('a').getAttribute("href")).toBe("www.google.com")
  })


  test('Test 3: Anchor is Google! ', () => {
    // expect(container.querySelector('a')).not.toBeNull()
    expect(container.querySelector('a').innerText).toBe("Google!")
  })


  // test('test 4: Remove underline', () => {
  //   expect(container.querySelector('a')).not.toBeNull()
  //   console.log(document.querySelector('a').style)
  //   expect(container.querySelector('a').innerText).toBe("Google!")
  // })
})
`

// const css = ``

export function setCode(code) {
  return code
}

export const files = {
    'index.html': {
        code: htmlFiles
    },
    'index.test.js': {
        code: htmlTestCode
    },
    // 'style.css': {
    //     code: css
    // }
}

export default files
