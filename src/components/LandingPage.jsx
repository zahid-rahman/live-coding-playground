



// const projects = [
//     // { name: 'Legacy design', initials: 'LD', href: '',  bgColor: 'bg-pink-600' },
//     { name: 'UI Level Challenges', initials: 'ULC', href: '/code-challenges',  bgColor: 'bg-purple-600' },
//     { name: 'Coding Level Challenges', initials: 'CLC', href: '/ui-challenges', bgColor: 'bg-yellow-500' },
//     { name: 'Framework Level Challenges', initials: 'FLC', href: '/framework-challenges', bgColor: 'bg-green-500' },
// ]

import classNames from "classnames"

const actions = [
    {
        title: 'Legacy Design',
        href: '#',
        description: 'Simple editor design with multiple js related framework and raw js & ts language',
    },
    {
        title: 'UI Level Challenges',
        href: '/ui-challenges',
        description: 'Coding ground with some sample question for UI level challenges. Currently we are doing html and inline CSS. Very soon we will add external css.All question will face various test cases',
    },
    {
        title: 'Coding Level Challenges',
        href: '/code-challenges',
        description: 'Coding playground with some sample questionf for coding level challenges. Currently we are only js and ts supported. All question will face various test cases',
    },
    {
        title: 'Framework Level Challenges',
        href: '/framework-challenges',
        description: 'Coding playground with some sample question for Framework level challenges. Currently we are only react supported. All question will face various test cases',
    },
    {
        title: 'StackBlitz SDK test',
        href: '/poc/stackblitz-sdk',
        description: 'Testing multifunctional coding ground using stackBlitz SDK',
    }
]



export default function LandingPage() {
    return (
        <>
        <h1 className="text-center text-xl font-bold p-6">Live Coding Playground</h1>
            <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
                {actions.map((action, actionIdx) => (
                    <div
                        key={action.title}
                        className={classNames(
                            actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
                            actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
                            actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
                            actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
                            'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500',
                            "m-5"
                        )}
                    >
                        <div className="">
                            <h3 className="text-lg font-medium">
                                <a href={action.href} className="focus:outline-none">
                                    {/* Extend touch target to entire panel */}
                                    <span className="absolute inset-0" aria-hidden="true" />
                                    {action.title}
                                </a>
                            </h3>
                            <p className="mt-2 text-sm text-gray-500">
                                {action.description}
                            </p>
                        </div>
                        <span
                            className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                            aria-hidden="true"
                        >
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                            </svg>
                        </span>
                    </div>
                ))}
            </div>
        </>
    )
}