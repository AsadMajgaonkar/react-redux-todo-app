import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import todoStore from './store/todo/configureStore.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Provider store={todoStore}>
    <App />
  </Provider>
)
