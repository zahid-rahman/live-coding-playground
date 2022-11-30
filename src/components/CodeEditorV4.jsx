import {
    SandpackProvider,
    SandpackTests,
    SandpackConsole,
    SandpackPreview,
    SandpackThemeProvider,
} from '@codesandbox/sandpack-react'
import files from '../files/v4files'
import { Tab, Tabs } from './TabComponent.jsx'
// import { theme } from './theme.js'
// import CustomEditor from './editorv3/CustomEditor';
import { nightOwl } from '@codesandbox/sandpack-themes'
import MonacoEditor from './custom-editors/MonacoEditor';
import { useEffect } from 'react';
export default function CodeEditorV4() {
    useEffect(() => {
        window.onbeforeunload = function() {
            return true;
        };
    
        return () => {
            window.onbeforeunload = null;
        };
    }, []);
    return (
        <>
            <SandpackProvider
                template="react"
                files={files}
                options={{
                    showNavigator: true,
                    showLineNumbers: true, // default - true
                    showInlineErrors: true, // default - false
                    // wrapContent: true, // default - false
                    editorHeight: 500, // default - 300
                    // editorWidthPercentage: 60, // default - 50
                    // autorun: false,
                    visibleFiles: ["index.js", "App.js", "Component.jsx"],
                }}
                customSetup={{
                    // entry: '/index.html',
                    // main: '/index.html',
                    environment: 'webpack',
                    mode: 'tests',
                    dependencies: {
                        "@testing-library/react": "13.4.0",
                        "jsdom": "9.11.0"
                    },
                    autoRun: false,
                }}
            >
                <div className="flex flex-col md:flex-row w-full h-full flex-grow items-center overflow-hidden bg-black">
                    <div className="block relative w-full h-full">
                        <SandpackThemeProvider theme={nightOwl}>
                            {/* <CustomEditor />
                             */}
                             <MonacoEditor language="javascript" />
                        </SandpackThemeProvider>
                    </div>
                </div>
                <Tabs>
                    <Tab component={<div className="text-black">
                        <SandpackPreview />
                    </div>}>Preview</Tab>
                    <Tab component={<div>
                        <SandpackConsole showNavigator showHeader />
                    </div>}>Console</Tab>
                    <Tab component={<>
                        <SandpackTests autoSave={false} watchMode={false} verbose autoRun />
                    </>}>Test</Tab>
                </Tabs>
            </SandpackProvider>
        </>

    )
}