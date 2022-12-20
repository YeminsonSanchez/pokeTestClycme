import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import PokemonProvider from './context/PokemonContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './index.css'
import PokemonApp from './PokemonApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokemonProvider>
      <BrowserRouter>
        <PokemonApp />
      </BrowserRouter>
    </PokemonProvider>
  </React.StrictMode>,
)
