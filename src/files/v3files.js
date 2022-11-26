const htmlFiles = `

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Link</title>
  </head>
  <body>
    <div data-testid="test">
    <h1>Link</h1>
    <!-- Write the code below this line -->
        <a href="www.google.com">Google!</a>
    </div>
  </body>
</html>

`

// return fruitList.includes(possibleFruit)  
const htmlTestCode = `
import { fireEvent, getByText } from '@testing-library/dom'
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
  test('test 1: link exists ', () => {
    console.log("cont", container)
    expect(container.querySelector('a')).not.toBeNull()
  })

  test('test 2: Points to www.google.com ', () => {
    expect(container.querySelector('a')).toHaveAttribute("href","www.google.com")
  })

  test('test 2: Anchor is Google! ', () => {
    expect(container.querySelector('a')).not.toBeNull()
    expect(getByText(container, 'Google!')).toBeInTheDocument()
  })
})
`

const js = ``

export const files = {
    '/index.html': {
        code: htmlFiles
    },
    '/index.test.js': {
        code: htmlTestCode
    },
    '/index.js': {
        code: js
    }

}

export default files
