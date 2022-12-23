import { ConsoleIcon, SandpackTests, useSandpackClient } from '@codesandbox/sandpack-react'
import React, { useEffect, useState } from 'react'
import TestData from './TestData'

const TestPreview = ({ testFileName }) => {
    const [testResults, setTestResults] = useState([])
    return (
        <>
            <div className="hidden">
                <SandpackTests autoSave={false} watchMode={true} verbose autoRun onComplete={(data) => {
                    if (data[testFileName]["describes"] && data[testFileName]["describes"][""]) {
                        const tests = Object.values(data[testFileName]["describes"][""].tests);
                        setTestResults(tests)
                    }
                }} />
            </div>
            <div >
                <p className="text-xl text-black underline mb-2">Test Result</p>
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