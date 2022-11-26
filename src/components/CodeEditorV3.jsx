import {
    SandpackProvider,
    SandpackCodeEditor,
    SandpackTests,
    SandpackConsole,
    SandpackFileExplorer,
    SandpackPreview
} from '@codesandbox/sandpack-react'
import { useState } from 'react'
import files from '../files/v3files'
import { Tab, Tabs } from './TabComponent.jsx'
import { theme } from './theme.js'
export default function CodeEditorV3() {
    const [env, setEnv] = useState("vanilla")

    return (
        <>
            <select id="role" onClick={(event) => {
                setEnv(event.target.value)
            }} defaultValue={env}>
                <option value="angular">Angular</option>
                <option value="vue">Vue</option>
                <option value="svelte">Svelte</option>
                <option value="vue3">Vue 3</option>
                <option value="react">React</option>
                <option value="vanilla">Vanilla(javascript)</option>
                <option value="vanilla-ts">Vanilla(typescript)</option>
            </select>

            <SandpackProvider
                theme={theme}
                template={env}
                files={env === "vanilla" ? files : ""}
                // visibleFiles={['/isFruit.js']}
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
                    entry: '/index.html',
                    // main: '/isFruit.js',
                    environment: 'webpack',
                    mode: 'tests',
                    dependencies: {
                        "@testing-library/dom": "8.19.0",
                        "@testing-library/jest-dom": "5.16.5",
                        "jsdom": "9.11.0"
                    },
                    autoRun: false
                }}
            >
                {/* <FileTabs /> */}
                <div className="flex flex-col md:flex-row w-full h-full flex-grow items-center overflow-hidden bg-black">
                    <div className="flex justify-start h-full flex-col w-72 lg:w-96 xl:w-120">
                        <SandpackFileExplorer className="" />
                    </div>
                    <div className="block relative w-full h-full">
                        <SandpackCodeEditor showTabs={false} visibleFiles={["/isFruit.js"]} autoSave />
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
                        <SandpackTests autoSave={false} />
                    </>}>Test</Tab>
                </Tabs>
            </SandpackProvider>
        </>

    )
}