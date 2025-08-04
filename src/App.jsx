import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Login from "./Login";
import SignUp from "./SignUp";
import Footer from "./Footer";

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const desktopVariants = {
    login: {
      opacity: 1,
      x: 0,
      zIndex: 2,
      transition: { duration: 0.8 },
    },
    loginHidden: {
      opacity: 0,
      x: 0,
      zIndex: 1,
      transition: { duration: 0.8 },
    },
    signup: {
      opacity: 1,
      x: 0,
      zIndex: 2,
      transition: { duration: 0.8 },
    },
    signupHidden: {
      opacity: 0,
      x: 0,
      zIndex: 1,
      transition: { duration: 0.8 },
    },
  };

  const mobileVariants = {
    login: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
    loginHidden: {
      x: "-100%",
      opacity: 0,
      transition: { duration: 0.6 },
    },
    signup: {
      x: "-100%",
      opacity: 1,
      transition: { duration: 0.6 },
    },
    signupHidden: {
      x: 0,
      opacity: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <>
      <div className="font-ubuntu bg-gray-200 h-screen w-full flex items-center justify-center">
        <div className="relative md:h-[80vh] h-[85vh] md:w-[60vw] w-[80vw] bg-white shadow-lg rounded-3xl overflow-hidden flex ">
          <div className="w-full h-full flex">
            <motion.div
              variants={isMobile ? mobileVariants : desktopVariants}
              animate={isLogin ? "login" : "loginHidden"}
              className="md:w-1/2 w-full h-full flex items-center justify-center"
            >
              <Login setIsLogin={setIsLogin} />
            </motion.div>

            <motion.div
              variants={isMobile ? mobileVariants : desktopVariants}
              animate={isLogin ? "signupHidden" : "signup"}
              className="md:w-1/2 w-full h-full flex items-center justify-center"
            >
              <SignUp setIsLogin={setIsLogin} />
            </motion.div>
          </div>

          <motion.div
            className="absolute top-0 h-full w-1/2 bg-gradient-to-r from-primary to-secondary text-white md:flex flex-col items-center justify-center text-center p-8 rounded-3xl z-10 hidden"
            animate={{ left: isLogin ? "50%" : "0%" }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 1.2,
            }}
          >
            <h2 className="text-3xl font-bold mb-4">
              {isLogin ? "New here?" : "Welcome back!"}
            </h2>
            <p className="mb-6 text-sm">
              {isLogin
                ? "Sign up and join our awesome journey."
                : "Login to continue exploring."}
            </p>
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="bg-white text-primary px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-all"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
