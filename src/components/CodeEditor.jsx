import {
    SandpackProvider,
    SandpackCodeEditor,
    SandpackTests,
    FileTabs,
    SandpackConsole
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
                showTabs: true,
                closableTabs: true,
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
            <SandpackCodeEditor showTabs={false} />
            <SandpackTests />
            <SandpackConsole />:
        </SandpackProvider>
    )
}