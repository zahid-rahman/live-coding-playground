import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CodeEditorLegacy from './components/CodeEditorLegacy';
import CodeEditor from './components/CodeEditor';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<CodeEditorLegacy />} />
          <Route path="/new" exact element={<CodeEditor />} />
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
