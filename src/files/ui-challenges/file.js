const htmlBoilerplateFiles = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input type="text" class="generated-pin" disabled required> 
    <button class="generate-pin-btn">generate pin</button>
    <button class="copy-btn">copy pin</button>
    <br><br>

    <label for="">check pin</label>
    <br>
    <input placeholder="Enter your pin" class="pin-field"/>
    <br>
    <!-- <small>pin should be with in three number</small> -->
    <br>
    <button class="submit-button">submit</button>
    <div class="result"></div>
    <script src="src/index.js">
    </script>
</body>
</html>
`

const scriptBaseCode = `
const input = document.querySelector(".pin-field")
const generatedPinField = document.querySelector(".generated-pin")
const result = document.querySelector(".result")
const button = document.querySelector(".submit-button")
const copyButton = document.querySelector(".copy-btn")
const generateButton = document.querySelector(".generate-pin-btn")

copyButton.addEventListener('click', (event) => {
    navigator.clipboard.writeText(generatedPinField.value);
    copyButton.innerText = "copied"
})

generateButton.addEventListener('click',(event) => {
    var randomNumber = Math.floor(1000 + Math.random() * 9000);
    generatedPinField.value = randomNumber;
})

button.addEventListener('click',(event) => {
    const value = input.value;
    let html = null;
    if(value === "" || generatedPinField === "") return;
    if(value === generatedPinField.value) {
        html = "<h1 style="color:green">code matched</h1>"
        input.value = ""
    } else {
        html = "<h1 style="color:red">wrong code</h1>"
        input.value = ""
    }
    result.innerHTML = html
})`

const htmlTestCode = `import { fireEvent, getByText } from '@testing-library/dom'
import fs from 'fs'
import path from 'path'
let html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

let dom
let container

beforeEach(() => {
    var parser = new DOMParser();
	dom = parser.parseFromString(html, 'text/html');
    container = dom.querySelector('body')
    // console.log(container)
  })


describe('', () => {
  test('Test 1: generate pin and check it is available or not', () => {
    expect(container.querySelector('a')).not.toBeNull()
  })


  test('Test 2: copy the pin by clicking copy pin button', () => {
    expect(container.querySelector('a').getAttribute("href")).toBe("www.google.com")
  })


  test('Test 3: Match the generated pin with copied pin', () => {
    expect(container.querySelector('a').innerText).toBe("Google!")
  })


  test('test 4: Text color should be red', () => {
    expect(container.querySelector('a').style.color).toBe("red")
  })
})
`

export const uiChallengeOneFiles = {
    '/index.html': {
        code: htmlBoilerplateFiles
    },
    '/src/index.js': {
        code: scriptBaseCode
    },
    '/index.test.js': {
        code: htmlTestCode
    },
}

export default uiChallengeOneFiles
