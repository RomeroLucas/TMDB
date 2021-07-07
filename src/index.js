import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// Aplicando react router dom em toda a aplicação
import { BrowserRouter } from 'react-router-dom'

// Aplicando redux para gerenciamento de estados entre componentes
import { Provider } from 'react-redux'
import { store } from './store/store'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

