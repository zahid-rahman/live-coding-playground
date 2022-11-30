import React from 'react'
import CodeEditorV2 from './editor/CodeEditorV2'
import { files } from './../files/v2files'
import { CodeChallengeFiles } from './../files/coding-challenges/files'

const CodeChallenges = () => {
  return (
    <>
       <div id="question-one" className="p-5">
        <h2 className="text-xl underline mb-3">Convert "Zero" and "One" to "1" and "0"</h2>
        <p>
          Create a function that takes a string as an argument. The function must return a string containing 1s and 0s based on the string argument's words. If any word in the argument is not equal to "zero" or "one" (case insensitive), you should ignore it. The returned string's length should be a multiple of 8, if the string is not a multiple of 8 you should remove the numbers in excess.
        </p>
        <div>
          <h3>Examples</h3>
          <div>
            textToNumberBinary("zero one zero one zero one zero one") ➞ "01010101"
            textToNumberBinary("Zero one zero ONE zero one zero one") ➞ "01010101"
            textToNumberBinary("zero one zero one zero one zero one one two") ➞ "01010101"
            textToNumberBinary("zero one zero one zero one zero three") ➞ ""
            textToNumberBinary("one one") ➞ ""
          </div>
        </div>
        <div className="mb-3">
          <h3>Notes</h3>
          <p>You must return the result as a string.</p>
        </div>

        <CodeEditorV2 files={CodeChallengeFiles} />
      </div>

      <div id="question-two" className="p-5">
      <h2 className="text-xl underline mb-3">Find fruit "banana"</h2>
        <CodeEditorV2 files={files} />
      </div>

   
    </>
  )
}

export default CodeChallenges