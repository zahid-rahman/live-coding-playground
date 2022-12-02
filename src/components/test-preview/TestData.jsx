import React from 'react';
// import { BeakerIcon } from '@heroicons/react/24/solid'
// import { XIcon } from '@heroicons/react/outline'
import classNames from 'classnames';
const SuccessIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 stroke-green-600">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
)

const FailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" className="w-4 h-4 stroke-red-600">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
)

export default function TestData({ testResult }) {
    const { status, name, duration } = testResult;
    return (
        <>
            <div className="flex text-sm">
                <span className="mt-1.5">
                    {status === "fail" ? <FailIcon /> : <SuccessIcon />}
                </span>
                <span className={classNames("ml-2 mt-1", status === "fail" ? "text-red-600": "text-green-600")}>{name}</span>
                <span className={classNames("ml-2 mt-1", status === "fail" ? "text-red-600": "text-green-600")}>({duration}ms)</span>
            </div>
        </>
    )
}