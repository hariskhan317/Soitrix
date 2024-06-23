import { testimonials } from './data.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './style.css';
import { Pagination, Autoplay } from 'swiper/modules';

const Testimonials = () => {
    return (
        <section id="testimonials" className="relative isolate overflow-hidden bg-brand-black px-6 py-24 sm:py-32 lg:px-8 mt-10 md:mt-20 ">
            <div style={{ position: 'absolute', inset: 0,  zIndex: -10, background: 'radial-gradient(45rem 50rem at top, #18181C, #101010)', opacity: 1}} />
            <div style={{ position: 'absolute', top: 0, bottom: 0, right: '50%', zIndex: -10, marginRight: '4rem', width: '100%', transformOrigin: 'bottom left', transform: 'skewX(-30deg)', backgroundColor: '#18181C',  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', border: '1px solid #222228'}} />
            <Swiper
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 10000, disableOnInteraction: false }}
            >
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <figure>
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index} className='py-10'>
                                <svg viewBox="0 0 162 128" fill="none" aria-hidden="true" className="absolute top-0 left-0 right-0 mx-auto -z-10 h-32 stroke-brand-gray/10">
                                    <path id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z" />
                                    <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x={86} />
                                </svg>
                                <blockquote className="md:px-20 lg:px-32 xl:px-64 text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                                    <p>{testimonial.description}</p>
                                </blockquote>
                                <figcaption className="mt-10">
                                    <img
                                        className="mx-auto h-10 w-10 rounded-full"
                                        src={testimonial.image}
                                        alt=""
                                    />
                                    <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                                        <div className="font-semibold text-white">{testimonial.name}</div>
                                        <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-white">
                                            <circle cx={1} cy={1} r={1} />
                                        </svg>
                                        <div className="text-brand-gray">{testimonial.subtitle}</div>
                                    </div>
                                </figcaption>
                            </SwiperSlide>
                        ))}
                    </figure>
                </div>
            </Swiper>
        </section> 
    )
}

export default Testimonials
