import {createContext, useEffect, useState} from 'react'
import axios from 'axios'

export const PokemonContext = createContext()

const PokemonProvider = ({children}) => {
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    try {
      const response = await axios.get(
        'https://pokeapi.co/api/v2/pokemon/?limit=100',
      )


      setCharacters(response.data.results)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <PokemonContext.Provider value={{characters, setCharacters}}>
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonProvider
