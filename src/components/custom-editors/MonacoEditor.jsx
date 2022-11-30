import Editor from "@monaco-editor/react";
import {
    useActiveCode,
    SandpackStack,
    FileTabs,
    useSandpack,
} from "@codesandbox/sandpack-react";
// import { emmetHTML, emmetCSS, emmetJSX } from "emmet-monaco-es";

export default function MonacoEditor({ language }) {
    const { code, updateCode } = useActiveCode();
    const { sandpack } = useSandpack();
    // const handleEditorDidMount = () => {
    //     emmetHTML(window.monaco);
    //     emmetCSS(window.monaco);
    //     emmetJSX(window.monaco);
    // };

    const filePanelGapColor = language === "html" ? "#ffffff": "#1e1e1e"

    return (
        <SandpackStack style={{ height: "40vh", margin: 0 }}>
            <FileTabs autoSave />
            <div style={{ flex: 1, paddingTop: 8, background: filePanelGapColor }}>
                <Editor
                    width="100%"
                    height="100%"
                    language={language}
                    theme={language === 'html' ? "": "vs-dark"}
                    key={sandpack.activeFile}
                    defaultValue={code}
                    onChange={(value) => updateCode(value || "")}
                    // editorDidMount={handleEditorDidMount}
                />
            </div>
        </SandpackStack>
    );
}