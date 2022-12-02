import React from 'react'
import CodeEditorV3 from './editor/CodeEditorV3'
import files from './../files/v3files'
import uiChallengeOneFiles from '../files/ui-challenges/file'
import CodeEditorV6 from './editor/CodeEditorV6'
import { SandpackFileExplorer } from '@codesandbox/sandpack-react'

const UiChallenges = () => {
  return (
    <div className="p-6">
    <div id="question-one">
    <h2 className="text-xl underline mb-3">Pincode Matcher</h2>
        <p>
          Create a js app using html, css, js
        </p>
        <div>
          <h3>Instruction</h3>
          <ul>
            <li>Generate 4 digit pin by clicking generate pin buttonand input field should be disabled</li>
            <li>
              copy generated pin by clicking copy pin button. Change text label as "copied " after clicking the button
            </li>
            <li>
              match the copied py by pasting it to matcher input field
            </li>
            <li>
              show wrong result inside a H1 tag as wrong pin
            </li>
          </ul>
        </div>
        <div className="mb-3">
          <h3>Note</h3>
          <p>You must return the result as a string.</p>
        </div>
        <CodeEditorV6 files={uiChallengeOneFiles}/>
    </div>
    <CodeEditorV3 files={files}/>
    </div>
  )
}

export default UiChallenges