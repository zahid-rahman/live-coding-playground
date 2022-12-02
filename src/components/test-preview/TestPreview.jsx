import { ConsoleIcon, SandpackTests, useSandpackClient } from '@codesandbox/sandpack-react'
import React, { useEffect, useState } from 'react'
import TestData from './TestData'
import './index.css'
const TestPreview = ({ testFileName }) => {
    const [testResults, setTestResults] = useState([])
   const dom= document.querySelector(".sp-c-pnsM")
   console.log(dom)

   console.log(dom)
   
   useEffect(() => {
       if(dom) {
        dom.style.display = "none"
       }
    }, [dom])
    return (
        <>
       
            {/* <div className="hidden">
                <SandpackTests autoSave={false} watchMode={false} verbose autoRun={false} onComplete={(data) => {
                    console.log(data)
                    if (data[testFileName]["describes"] && data[testFileName]["describes"][""]) {
                        const tests = Object.values(data[testFileName]["describes"][""].tests);
                        setTestResults(tests)
                    }
                }} />
            </div> */}
            <div >
                <p className="text-xl text-black underline mb-2">Test Result</p>
                <SandpackTests autoSave={false} watchMode={false} verbose autoRun={false} onComplete={(data) => {
                    console.log(data)
                    if (data[testFileName]["describes"] && data[testFileName]["describes"][""]) {
                        const tests = Object.values(data[testFileName]["describes"][""].tests);
                        setTestResults(tests)
                    }
                }} />
                {testResults.map((testResult, index) => {
                    return (
                        <TestData key={index} testResult={testResult} />
                    )
                })}
            </div>
        </>
    )
}

export default TestPreview