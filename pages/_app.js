import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../comps/Layout'
import {ThemeProvider} from 'styled-components'
import {useState} from 'react'
import { darkTheme, lightTheme, GlobalStyles } from '../ThemeConfig'




function MyApp({ Component, pageProps }) {

  const [isActive, setActive] = useState("false");
  
  const [theme, setTheme] = useState("dark");
  
  
  const toggleTheme = () => {
    theme == 'dark' ? setTheme('light') : setTheme('dark')
    setActive(!isActive);
}
  
  return (
    <ThemeProvider theme={theme =='dark' ? darkTheme : lightTheme}>
      <GlobalStyles/>
        <Layout>
          <button className={isActive ? "mode-btn dark" : "mode-btn light"} onClick={toggleTheme}><span className="mode-icon"></span></button>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
    
  )
}

export default MyApp
