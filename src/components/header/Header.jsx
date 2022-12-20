import {motion} from 'framer-motion'
import {useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import {PokemonContext} from '../../context/PokemonContext'

export const Header = ({isHome}) => {
  const {characters} = useContext(PokemonContext)
  const [inputValue, setInputValue] = useState('')
  const [isActive] = useState(isHome === true ? true : false)

  const onInputChange = ({target}) => {
    setInputValue(target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const newInputValue = inputValue.trim()
    if (newInputValue.length <= 1) return
    const newCharacters = characters.filter((character) =>
      character.name.includes(newInputValue),
    )

    if (newCharacters.length === 0) {
      alert('No hay resultados')
      setInputValue('')
      return
    }

    console.log(newCharacters)
    setInputValue('')
  }
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <nav className='navbar navbar-expand-lg bg-light'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            <img
              className='img-fluid w-50'
              src='https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'
              alt=''
            />
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              {isActive ? (
                ''
              ) : (
                <li className='nav-item'>
                  <Link className='nav-link active' aria-current='page' to='/'>
                    Volver
                  </Link>
                </li>
              )}
            </ul>
            <form onSubmit={onSubmit} className='d-flex' role='search'>
              <input
                className='form-control me-2 p-3 text-center'
                type='search'
                placeholder='Buscar por nombre'
                aria-label='Search'
                value={inputValue}
                onChange={onInputChange}
              />
              <button className='btn btn-outline-warning' type='submit'>
                Buscar
              </button>
            </form>
          </div>
        </div>
      </nav>
    </motion.div>
  )
}
