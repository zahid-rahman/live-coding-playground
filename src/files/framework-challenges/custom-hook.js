const reactTestCode = `import { render, screen, waitFor, fireEvent, within } from '@testing-library/react'
import App from './App'

describe('',() => {
  test('Test 1: render button element with text "load data"', () => {
    const {getByText} = render(<App />)
    expect(getByText('load data')).toBeDefined()
  })

  test('Test 2: click the button and fetch radom 5 username in a list',async () => {
    const { getByText, getByRole } = render(<App />)

    fireEvent.click(getByText('load data'))
    await waitFor(() => {
        const list = getByRole("users")
        console.log("user list:",list)
        const { getAllByRole } = within(list)
        const items = getAllByRole("listitem")
        expect(items.length).toBe(5)
    })

  })
})
`

const App = `import usePosts from "./hooks/usePosts";
import usePost from "./hooks/usePost";
export default function App() {
    const { data, isLoading } = usePosts(
        "https://jsonplaceholder.typicode.com/posts"
      );
    
      const { data: post, isLoading: isPostLoading } = usePost(
        "https://jsonplaceholder.typicode.com/posts",
        1
      );
    
      if (isLoading || isPostLoading) {
        return <>Loading...</>;
      }
  return (
    <>
    <p><b>title:</b>{post.title}</p>
    <ul>
      {data.map((element: any, index: number) => {
        return <li key={index}>{element.title}</li>;
      })}
    </ul>
    </>
  );
}

`

const usePosts = `import { useEffect, useState } from "react";

const usePosts = (url: string) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function getPosts() {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    }
    getPosts();
  }, [url]);
  return {
    data,
    isLoading: !data ? true : false
  };
};

export default usePosts;

`
const usePost = `import { useEffect, useState } from "react";

export default function usePost(url: string, id: number) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(
    function () {
      async function getPostData() {
        try {
          const fullUrl = url + "/" + id;
          const response = await fetch(fullUrl);
          const result = await response.json();
          setData(result);
        } catch (error) {
          setError(error);
        }
      }
      getPostData();
    },
    [url, id]
  );

  return {
    data,
    error,
    isLoading: !data ? true : false
  };
}
`


export const frameworkChallengeCustomHookFile = {
    "App.js": {
        code: App
    },
    "hooks/usePost.js": {
        code: usePost
    },
    "hooks/usePosts.js": {
        code: usePosts
    },
    'index.test.js': {
        code: reactTestCode
    },
}

export default frameworkChallengeCustomHookFile
