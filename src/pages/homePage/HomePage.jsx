import {Header} from '../../components/header/Header'
import {PokemonContext} from '../../context/PokemonContext'
import {useContext, useState} from 'react'
import './homePage.css'
import {TitleAnimated} from '../../components/titleAnimated/TitleAnimated'
import {Card} from './card/Card'
import {Player} from '@lottiefiles/react-lottie-player'

export const HomePage = () => {
  const {characters} = useContext(PokemonContext)
  const [searchPokemon, setsearchPokemon] = useState()

  const handleSearch = (e) => {
    e.preventDefault()
    const search = e.target.value
    if (search === '') setsearchPokemon(characters)

    const newCharacters = characters.filter((character) =>
      character.name.toLowerCase().includes(search.toLowerCase()),
    )
    setsearchPokemon(newCharacters)
  }

  return (
    <div>
      <Header handleSearch={handleSearch} />
      <div className='container text-center'>
        <TitleAnimated />
      </div>
      <div className='container p-5 text-center '>
        <div className='row mx-auto'>
          {characters.length === 0 && (
            <div className='col-12'>
              <Player
                autoplay
                loop
                src='https://assets9.lottiefiles.com/packages/lf20_iwmd6pyr.json'
                style={{height: '300px', width: '300px'}}
              />
            </div>
          )}

          {!searchPokemon || searchPokemon.length === 0
            ? characters.map((character) => (
                <Card key={character.name} character={character} />
              ))
            : searchPokemon.map((character) => (
                <Card key={character.name} character={character} />
              ))}
        </div>
      </div>
    </div>
  )
}
