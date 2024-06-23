import Header from './components/Header';
import Home from './components/home/Home';
import Feature from './components/services/Feature';
// import About from './components/About';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/Footer'; 
import Stats from './components/stats/Stats';
const App = () => {
  return (
    <>
      <Header /> 
      <div className='mx-auto px-0 overflow-x-hidden'>
        <Home />
        <Services />
        {/* <About /> */}
        <Testimonials />
        <Feature />
        <Stats/>
        <Contact />
        <Footer/>
      </div>
    </>
  )
}

export default App

