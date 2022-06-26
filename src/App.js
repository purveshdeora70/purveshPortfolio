import { useContext } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import './App.css'
import Services from './Components/Services/Services';
import Experience from './Components/Experience/Experience';
import Works from './Components/Works/Works';
import Portfolio from './Components/Portfolio/Portfolio';
// import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import {themeContext} from './Context'

const App = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className='App'
        style={{
            background: darkMode? 'black': '',
            color: darkMode? 'white': ''
        }}
        >
        <Navbar />
        <div className='pages'>
        <Intro />
        <Services />
        <Experience />
        <Works />
        <Portfolio />
        {/* <Testimonials /> */}
        <Contact />
        <Footer />
        </div>
        </div>
    );
}

export default App;
