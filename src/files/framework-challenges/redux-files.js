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

const App = `import ChangeColor from './components/ChangeColor';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Profile />
      <Login />
      <br />
      <ChangeColor />
    </div>
  );
}

export default App;

`

const ChangeThemeColor = `import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeColor } from '../features/theme';

const ChangeColor = () => { 
    const [color, setColor] = useState("");
    const dispatch = useDispatch()
    return (
        <div>
            <input type="text" onChange={(event) => setColor(event.target.value)}/>
            <button onClick={() => {
                dispatch(changeColor(color))
            }}>Change color</button>
        </div>
    )
}

export default ChangeColor`
const Login = `import React from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../features/user';

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div>
        <button onClick={() => { dispatch(login({
          name: 'zahid',
          age: 27,
          email: "zahid@gmail.com"
        }))}}>Login</button>

        <button onClick={() => {
          dispatch(logout())
        }}>Logout</button>
    </div>
  )
}

export default Login`
const Profile = `import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const { name, age ,email} = useSelector((state) => state.user.value);

  const themeColor = useSelector((state) => state.theme.value)

  return (
    <div style={{color: themeColor}}>
        <p><b>Name:</b>{name}</p>
        <p><b>Age:</b>{age}</p>
        <p><b>Email:</b>{email}</p>
    </div>
  )
}

export default Profile`
const reduxTheme = `import { createSlice } from '@reduxjs/toolkit';
const initialStateValue = ""
export const themeSlice = createSlice({
    name: "theme",
    initialState: { value: initialStateValue },
    reducers: {
        changeColor: (state, action) => {
            state.value = action.payload
        },
    }
});


export const { changeColor } = themeSlice.actions;
export default themeSlice.reducer; // export the reducer`
const reduxUser = `import { createSlice } from '@reduxjs/toolkit';
const initialStateValue = {name: "", age: 0, email: ""}
export const userSlice = createSlice({
    name: "user",
    initialState: { value: initialStateValue },
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
        logout: (state) => {
            state.value = initialStateValue
        }
    }
});


export const { login, logout } = userSlice.actions;


export default userSlice.reducer; // export the reducer`

export const frameworkChallengeReduxFiles = {
    "App.js": {
        code: App
    },
    "components/ChangeColor.js": {
        code: ChangeThemeColor
    },
    "components/Login.js": {
        code: Login
    },
    "components/Profile.js": {
        code: Profile
    },
    "features/theme.js": {
        code: reduxTheme
    },
    "features/user.js": {
        code: reduxUser
    },
    'index.test.js': {
        code: reactTestCode
    },
    'index.js': {
        code: `import React, { StrictMode } from "react";
        import { createRoot } from "react-dom/client";
        import "./styles.css";

        import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import userReducer from './features/user';
import themeReducer from './features/theme';
        
        import App from "./App";


        const store = configureStore({
            reducer: {
              user: userReducer,
              theme: themeReducer
            }
          });

        
        const root = createRoot(document.getElementById("root"));
        root.render(
          <StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
          </StrictMode>
        );`
    }
}

export default frameworkChallengeReduxFiles
