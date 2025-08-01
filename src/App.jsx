import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Login from './Login'
import SignUp from './SignUp'

const App = () => {
  const [isLogin, setIsLogin] = useState(true)
  

  return (
    <div className='font-ubuntu bg-gray-200 h-screen w-full flex items-center justify-center'>
      <div className='relative h-[80vh] w-[60vw] bg-white shadow-lg rounded-3xl overflow-hidden flex'>

        {/* Forms Container */}
        <div className='w-full h-full flex'>
          <motion.div animate={{opacity: isLogin ? 1 : 0}} transition={{duration: 1}} className='w-1/2 h-full flex items-center justify-center'>
            <Login />
          </motion.div>
          <motion.div animate={{opacity: isLogin ? 0 : 1}} transition={{duration: 1}} className='w-1/2 h-full flex items-center justify-center'>
            <SignUp />
          </motion.div>
        </div>

        {/* Overlay */}
        <motion.div
          className='absolute top-0 h-full w-1/2 bg-gradient-to-r from-primary to-secondary text-white flex flex-col items-center justify-center text-center p-8 rounded-3xl z-10'
  animate={{ left: isLogin ? '50%' : '0%' }}
  transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 1.2 }}
        >
          <h2 className='text-3xl font-bold mb-4'>
            {isLogin ? 'New here?' : 'Welcome back!'}
          </h2>
          <p className='mb-6 text-sm'>
            {isLogin
              ? 'Sign up and join our awesome journey.'
              : 'Login to continue exploring.'}
          </p>
          <button
            onClick={() => setIsLogin(!isLogin)}
            className='bg-white text-primary px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-all'
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </motion.div>

      </div>
    </div>
  )
}

export default App
