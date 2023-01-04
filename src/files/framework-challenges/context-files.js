
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



const reactTestCode = `import { render } from "@testing-library/react"
import { useContext } from "react"
import { MyContext } from "./App"

describe("Context test suite",() => {
    const TestComponent = () => {
        const { name, role } = useContext(MyContext)
        return (
            <div>
                <h1>test comp</h1>
                <p className="" role="name">{name}</p>
                <p role="role">{role}</p>
            </div>
        )
    }

    test("Testing MyContext suite name should be zahid and role should be engineer", () => {
        const { getByRole } = render(
            <MyContext.Provider value={{name: 'zahid', role: 'engineer'}}>
                <TestComponent />
            </MyContext.Provider>
        )
        expect(getByRole('name').textContent).toBe('zahid')
        expect(getByRole('role').textContent).toBe('engineer')
    })
})
`

const App = `import { createContext, useEffect } from "react";
import Parent from "./Parent";
export const MyContext = createContext({});

export default function App() {
  const defaultValue = {
    name: "zahid",
    role: "software engineer"
  };
  return (
    <MyContext.Provider value={defaultValue}>
      <div className="App">
        <h1>Context api testing</h1>
        <Parent />
      </div>
    </MyContext.Provider>
  );
}

`

const Child = `import react, { useContext } from "react";
import { MyContext } from "../App";

const Child = () => {
  const { name, role } = useContext(MyContext);
  return (
    <div>
      <h1>Child</h1>
      <p>it's coming from child</p>
      <p role="name"><b>name:</b> {name}</p>
      <br />
      <p role="role"><b>role:</b> {role}</p>
    </div>
  );
};

export default Child;
`
const Parent = `import react from "react";
import Child from "./Child";

const Parent = () => {
  return (
    <div>
      <h1>Parent</h1>
      <Child />
    </div>
  );
};

export default Parent;
`

export const frameworkChallengeContextFile = {
    "App.js": {
        code: App
    },
    "Child.js": {
        code: Child
    },
    "Parent.js": {
        code: Parent
    },
    'index.test.js': {
        code: reactTestCode
    },
}

export default frameworkChallengeContextFile
