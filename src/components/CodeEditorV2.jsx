import {
    SandpackProvider,
    SandpackCodeEditor,
    SandpackTests,
    FileTabs,
    SandpackConsole,
    Navigator,
    SandpackFileExplorer
} from '@codesandbox/sandpack-react'
import { files } from './files.js'
import { theme } from './theme.js'
console.log(files['/isFruit.js'])
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
                // visibleFiles: ["/App.js", "/index.js"],
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
            <SandpackTests autoSave={false} />
            <SandpackConsole showNavigator />:
            
        </SandpackProvider>
    )
}