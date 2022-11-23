import { Sandpack } from '@codesandbox/sandpack-react'
import React, { useState } from 'react'

export default function CodeEditorLegacy() {
  const [env, setEnv] = useState("vanilla")

    return (
        <>
            <select id="role" onClick={(event) => {
                setEnv(event.target.value)
            }} defaultValue={env}>
                <option value="angular">Angular</option>
                <option value="vue">Vue</option>
                <option value="vue3">Vue 3</option>
                <option value="react">React</option>
                <option value="vanilla">Vanilla(javascript)</option>
                <option value="vanilla-ts">Vanilla(typescript)</option>
            </select>
            <Sandpack
                // You can change these examples!
                // Try uncommenting any of these lines
                // theme="dark"
                template={env}
                options={{
                    showNavigator: true,
                    showLineNumbers: false, // default - true
                    showInlineErrors: true, // default - false
                    // wrapContent: true, // default - false
                    editorHeight: 500, // default - 300
                    // editorWidthPercentage: 60, // default - 50
                    showTabs: true,
                    closableTabs: true,
                    autorun: false,
                    visibleFiles: ["/App.js", "/index.js"],
                }}
            />
        </>
    )
}