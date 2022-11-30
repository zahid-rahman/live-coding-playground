import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CodeEditorLegacy from './components/CodeEditorLegacy';
import CodeEditorV2 from './components/CodeEditorV2';
import CodeEditorV3 from './components/CodeEditorV3';
import CodeEditorV4 from './components/CodeEditorV4';
import CodeEditorV5 from './components/CodeEditorV5';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<CodeEditorLegacy />} />
          <Route path="/v2" exact element={<CodeEditorV2 />} />
          <Route path="/v3" exact element={<CodeEditorV3 />} />
          <Route path="/v4" exact element={<CodeEditorV4 />} />
          <Route path="/v5" exact element={<CodeEditorV5 />} />
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
