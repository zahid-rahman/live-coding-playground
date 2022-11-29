import Editor from "@monaco-editor/react";
import {
  useActiveCode,
  SandpackStack,
  FileTabs,
  useSandpack,
} from "@codesandbox/sandpack-react";

export default function MonacoEditor({ language }) {
  const { code, updateCode } = useActiveCode();
  const { sandpack } = useSandpack();
  function handleEditorValidation(markers) {
    // model markers
    markers.forEach(marker => console.log("onValidate:", marker.message));
  }
  return (
    <SandpackStack style={{ height: "40vh", margin: 0 }}>
      <FileTabs autoSave />
      <div style={{ flex: 1, paddingTop: 8, background: "#1e1e1e" }}>
        <Editor
          width="100%"
          height="100%"
          language={language}
          theme="vs-dark"
          key={sandpack.activeFile}
          defaultValue={code}
          onChange={(value) => updateCode(value || "")}
          onValidate={handleEditorValidation}
        />
      </div>
    </SandpackStack>
  );
}