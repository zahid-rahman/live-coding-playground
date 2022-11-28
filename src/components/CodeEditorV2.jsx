import {
    SandpackProvider,
    SandpackCodeEditor,
    SandpackTests,
    SandpackConsole,
    SandpackFileExplorer,
    SandpackPreview
} from '@codesandbox/sandpack-react'
import { files } from './files.js'
import { Tab, Tabs } from './TabComponent.jsx'
import { theme } from './theme.js'
export default function CodeEditor() {
    return (
        <SandpackProvider
            theme={theme}
            files={files}
            visibleFiles={['/isFruit.js']}
            options={{
                showNavigator: true,
                showLineNumbers: true, // default - true
                showInlineErrors: true, // default - false
                // wrapContent: true, // default - false
                editorHeight: 500, // default - 300
                // editorWidthPercentage: 60, // default - 50
                // autorun: false,
                visibleFiles: ["/index.html"],
            }}
            customSetup={{
                entry: '/isFruit.js',
                // main: '/isFruit.js',
                environment: 'webpack',
                mode: 'tests',
            }}
        >
            {/* <FileTabs /> */}
            <div className="flex flex-col md:flex-row w-full h-full flex-grow items-center overflow-hidden bg-black">
                <div className="flex justify-start h-full flex-col w-72 lg:w-96 xl:w-120">
                    <SandpackFileExplorer className="" />
                </div>
                <div className="block relative w-full h-full">
                    <SandpackCodeEditor showTabs={false} visibleFiles={["/isFruit.js"]} autoRun={false} autoSave />
                </div>
            </div>
            <Tabs>
                <Tab component={<div className="text-black">
                    <SandpackPreview />
                </div>}>Preview</Tab>
                <Tab component={<div>
                    <SandpackConsole showNavigator />
                </div>}>Console</Tab>
                <Tab component={<>
                    <SandpackTests autoSave={false} />
                </>}>Test</Tab>
            </Tabs>
        </SandpackProvider>
    )
}