import { SandpackTests } from '@codesandbox/sandpack-react'
import React, { useState } from 'react'

const TestPreview = () => {
    const [testResults, setTestResults] = useState([])

    console.log(testResults)

    return (
        <>
            <div className="hidden">
                <SandpackTests autoSave={false} watchMode={true} verbose autoRun onComplete={(data) => {
                    // console.log("full data", data)
                    // console.log("test data extract", data["/index.test.js"]["describes"][""].tests)

                    setTestResults(data["/index.test.js"]["describes"][""].tests)
                }} />
            </div>
            <div>
                <p>Test results will be visible soon ...</p>
            </div>
        </>
    )
}

export default TestPreview