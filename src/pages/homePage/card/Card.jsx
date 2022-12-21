import {Link} from 'react-router-dom'
import {types} from '../type/types'
import {motion} from 'framer-motion'
import './card.css'

export const Card = ({character}) => {
  return (
    <>
      <motion.div
        className='col-12 col-sm-6 col-md-6 col-lg-4 card__container '
        key={character.name}
        whileHover={{scale: 1.09}}
      >
        <div className='card mb-3 text-white card__bg  mx-auto'>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${character.id}.png`}
            className='card-img-top w-75 mx-auto '
            alt={character.name}
          />
          <div className='card-body'>
            <h3 className='card-title'>{character.name}</h3>
            <p className='card-text'>
              {character.types.map((type) => (
                <span key={type.type.name}>
                  {types(type.type.name, 'danger')}
                </span>
              ))}
            </p>
            <Link to={`/pokemons/${character.name}`}>
              <button type='button' className='btn btn-outline-warning'>
                Ver Detalles
              </button>
            </Link>

            <div />
          </div>
        </div>
      </motion.div>
    </>
  )
}
