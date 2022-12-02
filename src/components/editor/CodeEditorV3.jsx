import {
    SandpackProvider,
    SandpackTests,
    SandpackConsole,
    SandpackPreview,
    SandpackThemeProvider,
} from '@codesandbox/sandpack-react'
import files from '../../files/v3files'
import { Tab, Tabs } from '../TabComponent.jsx'
import { theme } from '../../utils/theme.js'
import CustomEditor from '../custom-editors/CustomEditor';
import { useEffect } from 'react';
import MonacoEditor from '../custom-editors/MonacoEditor';
import TestPreview from './../test-preview/TestPreview';
// import MonacoEditor from './custom-editors/MonacoEditor';
export default function CodeEditorV3() {
    useEffect(() => {
        window.onbeforeunload = function () {
            return true;
        };

        return () => {
            window.onbeforeunload = null;
        };
    }, []);
    return (
        <>
            <SandpackProvider
                theme={theme}
                template="vanilla"
                files={files}
                visibleFiles={['index.html']}
                options={{
                    showNavigator: true,
                    showLineNumbers: true, // default - true
                    showInlineErrors: true, // default - false
                    editorHeight: 500, // default - 300
                    // editorWidthPercentage: 60, // default - 50
                    // autorun: false,
                    visibleFiles: ["index.html"],
                }}
                customSetup={{
                    entry: '/index.html',
                    main: '/index.html',
                    environment: 'webpack',
                    mode: 'tests',
                    dependencies: {
                        "@testing-library/dom": "8.19.0",
                        "jsdom": "9.11.0"
                    },
                    autoRun: false
                }}
            >
                <div className="flex flex-col md:flex-row w-full h-full flex-grow items-center overflow-hidden bg-black">
                    <div className="block relative w-full h-full">
                        <SandpackThemeProvider>
                            <CustomEditor />
                            {/* <MonacoEditor language={"html"}/> */}
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
                        {/* <SandpackTests autoSave={false} watchMode={false} verbose autoRun /> */}

                        <TestPreview testFileName={"/index.test.js"}/>
                    </>}>Test</Tab>
                </Tabs>
            </SandpackProvider>
        </>

    )
}