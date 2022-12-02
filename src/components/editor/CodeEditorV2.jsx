import {
    SandpackProvider,
    SandpackCodeEditor,
    SandpackTests,
    SandpackConsole,
    // SandpackFileExplorer,
} from '@codesandbox/sandpack-react'
import { useEffect } from 'react';
import { files } from '../../files/v2files'
import MonacoEditor from '../custom-editors/MonacoEditor'
import { Tab, Tabs } from '../TabComponent.jsx'
import TestPreview from '../test-preview/TestPreview';
export default function CodeEditorV2() {
    useEffect(() => {
        window.onbeforeunload = function () {
            return true;
        };
        return () => {
            window.onbeforeunload = null;
        };
    }, []);
    return (
        <SandpackProvider
            files={files}
            // visibleFiles={['/index.js']}
            options={{
                showNavigator: true,
                showLineNumbers: true, // default - true
                showInlineErrors: true, // default - false
                // wrapContent: true, // default - false
                editorHeight: 500, // default - 300
                // editorWidthPercentage: 60, // default - 50
                // autorun: false,
                visibleFiles: ["/main.js"],
                // autorun: false
            }}
            customSetup={{
                entry: '/main.js',
                main: '/main.js',
                environment: 'webpack',
                mode: 'tests',
            }}
        >
            <div className="flex flex-col md:flex-row w-full h-full flex-grow items-center overflow-hidden bg-black">
                <div className="block relative w-full h-full">
                    <SandpackCodeEditor
                        showTabs
                        visibleFiles={["main.js"]}
                        autoSave
                        showLineNumbers={true}
                        showInlineErrors={true}
                        wrapContent
                        closableTabs
                    />

                    {/* <MonacoEditor language={"javascript"}/> */}
                </div>
            </div>
            <Tabs>
                <Tab component={<div>
                    <SandpackConsole showNavigator />
                </div>}>Console</Tab>
                <Tab component={<>
                    {/* <SandpackTests autoSave={false} watchMode={false} verbose autoRun /> */}
                    <TestPreview testFileName={"/isFruit.test.js"}/>
                </>}>Test</Tab>
            </Tabs>
        </SandpackProvider>
    )
}