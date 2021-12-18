import { useState } from 'react'
import logo from './logo.svg'

import './App.css'

import { useQuery } from 'urql';
import { Article, QueryArticleArgs } from './gql/graphql';


const getArticlesQuery = `
  query {
    allArticles {
      id
    }
  }
`;

const getArticleQuery = `
  query ($id: String!) {
    Article (id: $id) {
      id
    }
  }
`;

function App() {
  const [count, setCount] = useState(0)

  const [result, reexecuteQuery] = useQuery<Article, QueryArticleArgs>({
    query: getArticleQuery,
    variables: { id: 'another' },
  });

  const { data, fetching, error } = result;
  if (fetching) return <p>Loading...</p>;
  if (error) {
    console.log(error);
    return <p>Oh no... {error.message}</p>;
  }

  console.log(data);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
