import { ConsoleIcon, SandpackTests } from '@codesandbox/sandpack-react'
import React, { useState } from 'react'
import TestData from './TestData'

const TestPreview = ({ testFileName }) => {
    const [testResults, setTestResults] = useState([])

    console.log(testResults)

    return (
        <>
            <div className="hidden">
                <SandpackTests autoSave={false} watchMode={true} verbose autoRun onComplete={(data) => {
                    console.log(data)                    
                    if (data[testFileName]["describes"][""]) {
                        const tests = Object.values(data[testFileName]["describes"][""].tests);
                        setTestResults(tests)
                    }
                }} />
            </div>
            <div className="text-xl text-black">
                <p>Custom test results will be visible soon ...</p>
                {testResults.map((testResult) => {
                    return (
                        <TestData testResult={testResult} />
                    )
                })}
            </div>
        </>
    )
}

export default TestPreview