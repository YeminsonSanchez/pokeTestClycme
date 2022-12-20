import './App.css'
import {LayoutsApp} from './layouts/LayoutsApp'
import {AppRouter} from './router/AppRouter'

function PokemonApp() {
  return (
    <LayoutsApp>
      <AppRouter />
    </LayoutsApp>
  )
}

export default PokemonApp
