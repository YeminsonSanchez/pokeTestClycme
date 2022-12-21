import {TypeAnimation} from 'react-type-animation'
import './titleAnimated.css'
export const TitleAnimated = () => {
  return (
    <div className='container title'>
      <h2 className='title__text '> Capturalos todos</h2>
      <TypeAnimation
        sequence={[
          'Picachu',
          2000,
          'Charmander',
          2000,
          'Bulbasaur',
          2000,
          'Squirtle',
          2000,
        ]}
        wrapper='span'
        cursor={true}
        repeat={Infinity}
        className='title__text'
      />
    </div>
  )
}
