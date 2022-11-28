import {
    SandpackProvider,
    SandpackTests,
    SandpackConsole,
    SandpackPreview,
    SandpackThemeProvider,
} from '@codesandbox/sandpack-react'
import files from '../files/v3files'
import { Tab, Tabs } from './TabComponent.jsx'
import { theme } from './theme.js'
import CustomEditor from './editorv3/CustomEditor';
export default function CodeEditorV3() {

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
                    // wrapContent: true, // default - false
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
                    {/* <div className="flex justify-start h-full flex-col w-72 lg:w-96 xl:w-120">
                        <SandpackFileExplorer className="" visibleFiles={["index.html"]} />
                    </div> */}
                    <div className="block relative w-full h-full">
                        <SandpackThemeProvider>
                            <CustomEditor />
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