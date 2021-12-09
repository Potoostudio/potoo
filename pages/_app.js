import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../comps/Layout'
import {ThemeProvider} from 'styled-components'
import {useState} from 'react'
import { darkTheme, lightTheme, GlobalStyles } from '../ThemeConfig'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as ga from './api/ga'
import Script from 'next/script'
import { AnimatePresence, motion } from 'framer-motion'


function MyApp({ Component, pageProps, router }) {
  
  const [isActive, setActive] = useState("false");
  
  const [theme, setTheme] = useState("dark");
  
  
  const toggleTheme = () => {
    theme == 'dark' ? setTheme('light') : setTheme('dark')
    setActive(!isActive);
}

  const spring = {
    type: "spring",
    damping: 60,
    stiffness: 274,
    when: "afterChildren",
    delay: 0.1
  };
  
  return (
  <>
  <AnimatePresence exitBeforeEnter>
    <ThemeProvider theme={theme =='dark' ? darkTheme : lightTheme}>
      <GlobalStyles/>
      <motion.div 
      transition={spring}
      key={router.pathname}
      initial={{opacity: 0, y: 180}}
      animate={{opacity: 1, y: 0}}
      >
        <Layout>
          <button className={isActive ? "mode-btn dark" : "mode-btn light"} onClick={toggleTheme}><span className="mode-icon"></span></button>
        <Component {...pageProps} key={router.pathname} />
      </Layout>
      </motion.div>
    </ThemeProvider>
  </AnimatePresence>
  
    </>
  )
}


export default MyApp;
