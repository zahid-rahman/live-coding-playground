
/* 

ANSWER 

import React, { useState } from "react";
export default function App() {
    const [people, setPeople] = useState([])
  const loadData = async () => {
    const response = await fetch("https://randomuser.me/api/?results=5");
    const data = await response.json();
        setPeople(data.results)
  };
	
return (
      <div>
        <button onClick={() => loadData()}>load data</button>
        <ul role="users">
        {people.map(x => <li key={x.name.first}>{x.name.first}</li>)}
        </ul>
      </div>
    );
}


*/



const reactTestCode = `import { render, screen, waitFor, fireEvent, within } from '@testing-library/react'
import App from './App'

describe('',() => {
  test('Test 1: render button element with text "load data"', () => {
    const {getByText} = render(<App />)
    expect(getByText('load data')).toBeDefined()
  })

  test('Test 2: click the button and fetch radom 5 username in a list',async () => {
    const { getByText, getByRole } = render(<App />)

    fireEvent.click(getByText('load data'))
    await waitFor(() => {
        const list = getByRole("users")
        console.log("user list:",list)
        const { getAllByRole } = within(list)
        const items = getAllByRole("listitem")
        expect(items.length).toBe(5)
    })

  })
})
`

const App = `export default function App() {
  return (
    <>
      {/* put your code here */}
      const getAboutUsLink = require('./index');\n\n test('Return about-us for english language', () => {\n \n
        expect(getAboutUsLink('en-UK')).toBe('/about-us');\n \n }
    </>
  )
 }
`

export const frameworkChallengeOneFile = {
    "App.js": {
        code: App
    },
    'index.test.js': {
        code: reactTestCode
    },
}

export default frameworkChallengeOneFile
