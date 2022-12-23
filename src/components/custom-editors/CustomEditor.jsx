import { SandpackCodeEditor, SandpackFileExplorer } from '@codesandbox/sandpack-react'
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import React from 'react'

const CustomEditor = () => {
    return (
        <>
        <SandpackFileExplorer ></SandpackFileExplorer>
            <SandpackCodeEditor
                showTabs
                // visibleFiles={["index.html"]}
                autoSave
                showLineNumbers={true}
                showInlineErrors={true}
                wrapContent
                additionalLanguages={[
                    {
                        name: "html",
                        extensions: [],
                        language: html({ matchClosingTags: true, autoCloseTags: true, }),
                    },
                    {
                        name: "css",
                        extensions: [],
                        language: css(),
                    },
                ]}

            />
        </>
    )
}

export default CustomEditor