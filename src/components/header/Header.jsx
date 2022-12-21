import {Link} from 'react-router-dom'

export const Header = ({handleSearch}) => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg bg-transparent navbar-dark'>
        <div className='container'>
          <Link className='navbar-brand w-50' to='/'>
            <img
              className='img-fluid w-50'
              src='https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'
              alt=''
            />
          </Link>
          <button
            className='navbar-toggler text-white hamburguer'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon text-white hamburguer'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'></ul>
            <div className='d-flex' role='search'>
              <input
                className='form-control me-2 p-3 text-center'
                type='search'
                placeholder='Buscar por nombre'
                aria-label='Search'
                onChange={handleSearch}
              />
              <button className='btn btn-outline-warning' type='submit'>
                Buscar
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
