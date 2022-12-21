import {createContext, useEffect, useState} from 'react'
import axios from 'axios'

export const PokemonContext = createContext()

const PokemonProvider = ({children}) => {
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    const data = []

    try {
      for (let i = 1; i <= 51; i++) {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${i}`,
        )

        data.push(response.data)
      }

      setCharacters(data)
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
