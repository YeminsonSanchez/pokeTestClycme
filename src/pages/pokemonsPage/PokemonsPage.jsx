import {useContext} from 'react'
import {Link, useParams} from 'react-router-dom'
import {Header} from '../../components/header/Header'
import {PokemonContext} from '../../context/PokemonContext'

import './pokemonPage.css'
import {Bar} from 'react-chartjs-2'
import {useState} from 'react'
import {types} from '../homePage/type/types'

export const PokemonsPage = () => {
  const Modal = () => {
    // Propiedad de estado que controla si el modal está abierto o cerrado
    const [isOpen, setIsOpen] = useState(false)

    // Método para abrir el modal
    const openModal = () => {
      setIsOpen(true)
    }

    // Método para cerrar el modal
    const closeModal = () => {
      setIsOpen(false)
    }

    return (
      <>
        <button onClick={openModal}>Open Modal</button>
        {isOpen && (
          <div>
            <div>
              <Bar data={data} />
            </div>
            <button onClick={closeModal}>Close Modal</button>
          </div>
        )}
      </>
    )
  }

  const {characters} = useContext(PokemonContext)
  const {name} = useParams()

  const pokemon = !characters.find((character) => character.name === name)
    ? JSON.parse(localStorage.getItem('pokemonPage'))
    : characters.find((character) => character.name === name)
  localStorage.setItem('pokemonPage', JSON.stringify(pokemon))

  const data = {
    labels: ['Weight', 'Height'],
    datasets: [
      {
        label: pokemon.name,
        data: [pokemon.weight, pokemon.height],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  }
  return (
    <div>
      <Header isHome={true} />
      <div className='container text-center text-white'>
        <Link to='/'>
          <button className='btn btn-warning mb-5'>Volver</button>
        </Link>

        <h2 className='fs-1'>{pokemon.name}</h2>
      </div>
      <div className='container text-center'>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          className='card-img-top w-50 mx-auto'
          alt={pokemon.name}
        />
      </div>
      <div className='container p-5 text-center text-white container_table'>
        <table className='table caption-top text-white container_table'>
          <thead>
            <tr>
              <th scope='col'>#</th>

              <th scope='col'>Tipo</th>
              <th scope='col'>Altura</th>
              <th scope='col'>Peso</th>
              <th scope='col'>Habilidates</th>
              <th scope='col'>Experiencia</th>
              <th scope='col'>Gif</th>
              <th scope='col'>Grafico</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'>{pokemon.id}</th>
              <td>
                {pokemon.types.map((type) => (
                  <span key={type.type.name}>
                    {types(type.type.name, 'info')}
                  </span>
                ))}
              </td>
              <td>{pokemon.height} Pies </td>
              <td>{pokemon.weight} Kg. </td>
              <td>
                {pokemon.abilities.map((ability) => (
                  <span key={ability.ability.name}>
                    {types(ability.ability.name, 'danger')}
                  </span>
                ))}
              </td>
              <td>{pokemon.base_experience} Experiencia Base</td>
              <td>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`}
                  className='card-img-top w-50 mx-auto'
                  alt={pokemon.name}
                />
              </td>
              <td>
                <button className='btn btn-warning' onClick={Modal} disabled>
                  Proximamente
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
