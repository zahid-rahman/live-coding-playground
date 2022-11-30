import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CodeEditorLegacy from './components/editor/CodeEditorV1';
import CodeEditorV2 from './components/editor/CodeEditorV2';
import CodeEditorV3 from './components/editor/CodeEditorV3';
import CodeEditorV4 from './components/editor/CodeEditorV4';
import CodeEditorV5 from './components/editor/CodeEditorV5';
import LandingPage from './components/LandingPage';
import CodeChallenges from './components/CodeChallenges';
import UiChallenges from './components/UiChallenges';
import FrameworkChallenges from './components/FrameworkChallenges';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/v1" exact element={<CodeEditorLegacy />} />
          <Route path="/code-challenges" exact element={<CodeChallenges />} />
          <Route path="/ui-challenges" exact element={<UiChallenges />} />
          <Route path="/framework-challenges" exact element={<FrameworkChallenges />} />
          <Route path="/poc/stackblitz-sdk" exact element={<CodeEditorV5 />} />
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
