import {
    SandpackProvider,
    SandpackTests,
    SandpackConsole,
    SandpackPreview,
    SandpackThemeProvider,
    SandpackFileExplorer,
    Sandpack,
    SandpackCodeEditor,
} from '@codesandbox/sandpack-react'
import files from '../files/v4files'
import { Tab, Tabs } from './TabComponent.jsx'
import { theme } from './theme.js'
import CustomEditor from './editorv3/CustomEditor';
export default function CodeEditorV4() {

    return (
        <>
            {/* <Sandpack
                template="react"
                files={files}
                theme={theme}
                customSetup={{
                    dependencies: {
                        "react": "^18.2.0",
                        "react-dom": "^18.2.0",
                        "react-scripts": "5.0.1",
                        "@testing-library/react": "13.4.0",
                        "jsdom": "9.11.0",
                        "@babel/preset-react": "7.18.6"
                    },
                }}
                options={{
                    showConsole: true,
                    showConsoleButton: true,
                    showNavigator: true,
                    // showLineNumbers: false, // default - true
                    // showInlineErrors: true, // default - false
                    // // wrapContent: true, // default - false
                    // editorHeight: 500, // default - 300
                    // // editorWidthPercentage: 60, // default - 50
                    // showTabs: true,
                    // closableTabs: true,
                    // autorun: false,
                    // visibleFiles: ["/App.js", "/index.js"],
                }}
            />

            <Sandpack template="test-ts" files={files} options={{ showTabs: false, showReadOnly: true }}/> */}

        </>

    )
}