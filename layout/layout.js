import Footer from './Footer';
import NavBar from './NavBar';
import CookieConsent from '../component/CookieConsent';

const Layout = ({ children }) => {
    return ( 
        <div className='content'>
            <NavBar/>
            <CookieConsent />
            { children }
            <Footer />
        </div>
     );
} 

export default Layout;