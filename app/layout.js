import Document, { Html, Head, Main, NextScript } from 'next/document'
import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../comps/Layout'
import {ThemeProvider} from 'styled-components'
import { darkTheme, lightTheme, GlobalStyles } from '../ThemeConfig'
import {motion } from 'framer-motion'

function MyApp() {

  return (
  <>
  <Html>
  <AnimatePresence exitBeforeEnter>
      <ThemeProvider theme={theme =='dark' ? darkTheme : lightTheme}>
        <GlobalStyles/>
        <motion.div
        key={router.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        >
          <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
          {/* <!-- Google Tag Manager --> */}
          <script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N2DXR4D');`}} />
  
          {/* <!-- Google Tag Manager (noscript) --> */}
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N2DXR4D"
          height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe></noscript>
        </Head>
        <body>
          <Layout>
          <ParallaxProvider>
            <Main />
            <NextScript />
              <Component {...pageProps} key={router.pathname} />
          </ParallaxProvider>
        </Layout>
  
        </body>
        </motion.div>
      </ThemeProvider>
  </AnimatePresence>
        
      </Html>
      
    </>
  )
}
