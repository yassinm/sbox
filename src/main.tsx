import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { createClient, Provider } from 'urql';

const client = createClient({
  url: '/ui',
  // url: 'http://localhost:8080/ui',
});

ReactDOM.render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>
  ,


  document.getElementById('root')
)
