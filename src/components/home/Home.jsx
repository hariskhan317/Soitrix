import skills from '../../assets/skills.svg'
import ellipseLeft from '../../assets/Ellipse 3.svg'
import arrow from "../../assets/arrow.svg";

import ellipseRight from '../../assets/Ellipse 14.svg'
const Home = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};
  return (
    <div id="home" className="relative 2xl:max-w-[100rem] mx-auto z-40">
        {/*  Ellipse */}
        <div>
            <img src={ellipseLeft} className='absolute right-0 mt-16' alt="" />  
            <img src={ellipseRight} className='absolute lg:left-10 mt-40' alt="" />  
        </div>
        <div className="relative text-center pt-40 md:pb-56 px-8 md:px-20 lg:px-52 z-50">
          <img src={skills} className='block md:hidden mx-auto ' alt="" />  
          <h1 className="mt-10 text-2xl sm:text-3xl md:text-5xl text-white font-semibold leading-tight ">Transforming  <span className="text-brand-orange">Ideas</span> into Seamless <br className='hidden md:block' /> Digital Experiences</h1>
          <p className="mt-10 text-base sm:text-lg md:text-2xl text-brand-gray">Founded in 2023, Soitrix has established itself as a premier full-service web development agency dedicated to crafting exceptional digital experiences. Our multidisciplinary team of talented developers, designers, and strategists collaborates seamlessly to bring visionary ideas to life. With a steadfast commitment to excellence, we meticulously tailor each project to exceed the highest standards of quality and creativity.</p>
          <div className='flex justify-center mt-16'>
            <button onClick={() => handleScroll('contact')} className='bg-brand-gray-100 py-1.5 px-2.5 w-auto flex justify-center gap-10 border-[2px] border-gray-50 rounded-xl'>
              <span className='text-white text-2xl mt-3'>Get a Quote</span>
              <div className='bg-gray-100 rounded-lg h-14 w-16 flex justify-center'>
                <img src={arrow} className='mt-3 h-8 w-7' alt="" />
              </div>
            </button>  
          </div>        
        </div>
        <img src={skills} className='absolute right-5 -mt-48 hidden md:block' alt="" />  
    </div>
  )
}

export default Home
