import { SandpackCodeEditor } from '@codesandbox/sandpack-react'
import { html } from "@codemirror/lang-html";
import React from 'react'

const CustomEditor = () => {
    return (
        <>
            <SandpackCodeEditor
                showTabs
                visibleFiles={["index.html"]}
                autoSave
                showLineNumbers={true}
                showInlineErrors={true}
                wrapContent
                closableTabs
                additionalLanguages={[
                    {
                        name: "html",
                        extensions: ["html"],
                        language: html({ matchClosingTags: true, autoCloseTags: true, }),
                    },
                ]}

            />
        </>
    )
}

export default CustomEditor