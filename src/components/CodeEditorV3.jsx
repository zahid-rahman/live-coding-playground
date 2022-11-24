import { SandpackCodeEditor, SandpackConsole, SandpackLayout, SandpackPreview, SandpackProvider, SandpackTests } from '@codesandbox/sandpack-react'
import React, { useState } from 'react'

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
            <SandpackProvider template={env} options={{
                showNavigator: true,
                editorHeight: 500, // default - 300
                autorun: false,
                visibleFiles: ["/App.js", "/index.js"],
            }}>
                {/* editor and preview blocks */}
                <SandpackLayout>
                    <SandpackCodeEditor showTabs closableTabs />
                    <SandpackPreview />
                </SandpackLayout>
                {/* logs and test blocks */}
                <SandpackLayout>
                    <SandpackConsole />
                    <SandpackTests />
                </SandpackLayout>
            </SandpackProvider>
        </>
    )
}