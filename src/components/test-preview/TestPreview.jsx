import { ConsoleIcon, SandpackTests, useSandpackClient } from '@codesandbox/sandpack-react'
import React, { useEffect, useState } from 'react'
import TestData from './TestData'
import './index.css'
const TestPreview = ({ testFileName }) => {
    const [testResults, setTestResults] = useState([])
    const dom = document.querySelector(".sp-c-pnsM")
    useEffect(() => {
        if (dom) {
            dom.style.display = "none"
        }
    }, [dom])
    return (
        <>
            <div >
                <p className="text-xl text-black underline mb-2">Test Result</p>
                {testResults.map((testResult, index) => {
                    return (
                        <TestData key={index} testResult={testResult} />
                    )
                })}
                <br />
                <SandpackTests autoSave={false} watchMode={false} verbose autoRun={false} onComplete={(data) => {
                    console.log(data)
                    if (data[testFileName]["describes"] && data[testFileName]["describes"][""]) {
                        const tests = Object.values(data[testFileName]["describes"][""].tests);
                        setTestResults(tests)
                    }
                }} />

            </div>
        </>
    )
}

export default TestPreview