import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.css'
import Layout from '../comps/Layout'
import {ThemeProvider} from 'styled-components'
import {useState} from 'react'
import { darkTheme, lightTheme, GlobalStyles } from '../ThemeConfig'
import { AnimatePresence, motion } from 'framer-motion'
import { ParallaxProvider } from 'react-scroll-parallax';


function MyApp({ Component, pageProps, router }) {

  const [isActive, setActive] = useState("false");

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    theme == 'dark' ? setTheme('light') : setTheme('dark')
    setActive(!isActive);
}

  const spring = {
    type: "spring",
    damping: 29,
    stiffness: 90,
    when: "afterChildren",
    delay: 0.5
  };
  return (
  <>
  <AnimatePresence exitBeforeEnter>
      <ThemeProvider theme={theme =='light' ? darkTheme : lightTheme}>
        <GlobalStyles/>
        <motion.div
        key={router.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        >
          <Layout>
            <button className={isActive ? "mode-btn dark" : "mode-btn light"} onClick={toggleTheme}><span className="mode-icon"></span></button>
          <ParallaxProvider>
            <Component {...pageProps} key={router.pathname} />
          </ParallaxProvider>
        </Layout>
        </motion.div>
      </ThemeProvider>
  </AnimatePresence>
    </>
  )
}


export default MyApp;
