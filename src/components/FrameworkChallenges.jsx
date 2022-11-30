import React from 'react'
import CodeEditorV4 from './editor/CodeEditorV4'
import files from './../files/v4files'
import frameworkChallengeOneFile from '../files/framework-challenges/files'
// import 

const FrameworkChallenges = () => {
  return (
    <>
      <div id="question-one" className="p-10">
        <h2 className="text-xl underline mb-3">Fetch data from api</h2>
        <p>
          Create a button and that button will load a list of 5 username after clicking it
          here is the api link: https://randomuser.me/api/?results=total_user_number
        </p>
        <div className="mb-3">
          <h3>Notes</h3>
          <ul>
            <li>Axios is installed already and also you can use fetch</li>
            <li>fetch only 5 username</li>
            <li>Don't forget to use </li>
          </ul>
        </div>
        <CodeEditorV4 files={frameworkChallengeOneFile} />
      </div>

      <div id="question-two" className="p-10">
        <h2 className="text-xl underline mb-3">Toggle an element after clicking button</h2>
        <p>Write a component that will have a button and toggle a rendered text inside a p tag named as "Rendered" </p>
        <ul>
          <li>Write a H1 tag with text "Hello World"</li>
          <li>Design a button element and text name should be "click here"</li>
          <li>After clicking the button it will render a paragraph element</li>
        </ul>
        <div className="mb-3">
        </div>
        <CodeEditorV4 files={files} />
      </div>

    </>
  )
}

export default FrameworkChallenges