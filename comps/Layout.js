import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
    return ( 
        <>
        {/* script for google analytics */}
        <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}" >
        </script>
        <script dangerouslySetInnerHTML={
            { __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments)}
                gtag("js", new Date());
                gtag("config", ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});
            `}
        }>

        </script>

        {/* navbar and footer section */}
        <Navbar />
        {children}
        <Footer/>
        </>
    );
}

export default Layout