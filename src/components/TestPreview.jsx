import { SandpackTests } from '@codesandbox/sandpack-react'
import React, { useState } from 'react'

const TestPreview = ({ testFileName }) => {
    const [testResults, setTestResults] = useState([])

    console.log(testResults)

    return (
        <>
            <div className="hidden">
                <SandpackTests autoSave={false} watchMode={true} verbose autoRun onComplete={(data) => {
                    setTestResults(data[testFileName]["describes"][""].tests)
                }} />
            </div>
            <div className="text-xl text-black">
                <p>Custom test results will be visible soon ...</p>
            </div>
        </>
    )
}

export default TestPreview