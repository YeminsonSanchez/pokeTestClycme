import {Route, Routes} from 'react-router-dom'
import {HomePage} from '../pages/homePage/HomePage'
import {PokemonsPage} from '../pages/pokemonsPage/PokemonsPage'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='pokemons/:name' element={<PokemonsPage />} />

        <Route path='/*' element={<HomePage />} />
      </Routes>
    </>
  )
}
