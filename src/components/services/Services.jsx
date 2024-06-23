import { services } from '../services/servicesData.js';
import Card from './Card.jsx';

const Services = () => {
    return (
        <div id="services" className="md:pb-50 px-8 md:px-20 lg:px-52 2xl:max-w-[100rem] mx-auto">
            <div className="text-center md:text-left">
                <h1 className="pt-28 text-3xl md:text-5xl text-white font-semibold leading-tight">Services</h1>
                <p className="mt-3 text-base md:text-xl text-brand-gray">At Soitrix, we offer a comprehensive range of services to meet <br className='hidden md:block' /> all your web development needs</p>
            </div>
            {/* card */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 mt-16'>
              {services.map((service, index) => (
                <div key={index}>
                    <Card service={service} />
                </div>
              ))}
            </div>
        </div>
    );
};

export default Services;
