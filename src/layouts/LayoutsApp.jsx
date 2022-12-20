import {motion} from 'framer-motion'

export const LayoutsApp = ({children}) => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      className='bg bg-dark text-white'
    >
      {/* <Header /> */}
      <h1>header</h1>
      <div className='container'>{children}</div>
      <h2>footer</h2>
      {/* <Footer /> */}
    </motion.div>
  )
}
