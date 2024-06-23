import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// import FeatureSvg from '../../assets/feature.svg';
import FeatureSvg from '../../assets/Group 226.svg'

const Feature = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;

    // Animate the image with infinite rotation using GSAP
    gsap.to(image, {
      rotation: 360,
      duration: 10,
      ease: 'linear',
      repeat: -1,
      yoyo: true, // Allows the animation to reverse smoothly
      repeatDelay: 0, // No delay between repeats
    });
  }, []);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 px-8 md:px-20 lg:px-52 mt-10 md:mt-20 2xl:max-w-[100rem] mx-auto'>
      <div className='col-span-1 sm:col-span-1'>
        <img src={FeatureSvg} className='mx-auto md:ml-0 w-8/12 md:w-10/12' alt="Feature" />
      </div>
      <div className='col-span-1 sm:col-span-1 text-center sm:text-left'>
        <h1 className="mt-6 md:mt-32 text-xl md:text-3xl text-white font-semibold leading-tight">We're here to guide and help you at all times</h1>
        <p className="mt-3 md:mt-5 text-lg md:text-lg text-brand-gray">Building applications that are not just effective, but transformative. Our solutions go beyond functionality, harnessing innovation to redefine what’s possible. By merging cutting-edge technology with a deep understanding of your unique challenges, we create software that drives meaningful change and propels your business forward.</p>
      </div>
    </div>
  );
}

export default Feature;
