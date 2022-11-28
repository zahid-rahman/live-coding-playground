import {
    SandpackProvider,
    SandpackCodeEditor,
    SandpackTests,
    SandpackConsole,
    // SandpackFileExplorer,
} from '@codesandbox/sandpack-react'
import { files } from './../files/v2files'
import { Tab, Tabs } from './TabComponent.jsx'
export default function CodeEditor() {
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
            {/* <FileTabs /> */}
            <div className="flex flex-col md:flex-row w-full h-full flex-grow items-center overflow-hidden bg-black">
                {/* <div className="flex justify-start h-full flex-col w-72 lg:w-96 xl:w-120">
                    <SandpackFileExplorer className="" />
                </div> */}
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
                </div>
            </div>
            <Tabs>
                {/* <Tab component={<div className="text-black">
                    <SandpackPreview />
                </div>}>Preview</Tab> */}
                <Tab component={<div>
                    <SandpackConsole showNavigator />
                </div>}>Console</Tab>
                <Tab component={<>
                    <SandpackTests autoSave={false} watchMode={false} verbose autoRun  />
                </>}>Test</Tab>
            </Tabs>
        </SandpackProvider>
    )
}