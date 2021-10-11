import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
    return ( 
        <>

        {/* navbar and footer section */}
        <Navbar />
        {children}
        <Footer/>
        </>
    );
}

export default Layout