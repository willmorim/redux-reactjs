import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import './config/ReactotronConfig'

import GlobalStyle from './styles/globals'
import Header from './components/Header'
import Routes from './routes'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header/>
        <GlobalStyle/>
        <Routes />
        <ToastContainer autoClose={3000}/>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
