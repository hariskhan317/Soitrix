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
    <div className='grid grid-cols-1 md:grid-cols-5 xl:grid-cols-2 gap-4 px-8 md:px-10 xl:px-52 mt-10 md:mt-20 2xl:max-w-[100rem] mx-auto'>
      <div className='col-span-1 md:col-span-2 xl:col-span-1'>
        <img src={FeatureSvg} className='mx-auto md:ml-0 w-7/12 md:w-11/12 xl:w-10/12' alt="Feature" />
      </div>
      <div className='col-span-1 md:col-span-3 xl:col-span-1 text-center md:text-left'>
        <h1 className="mt-6 md:mt-16 lg:mt-20 2xl:mt-32 text-2xl md:text-xl lg:text-3xl text-white font-semibold leading-tight">We're here to guide and help <br className='hidden 2xl:block'/>you at all times</h1>
        <p className="mt-3 md:mt-5 text-base lg:text-lg text-brand-gray">We focus on developing apps that are not only effective but also impactful. Our approach involves using the latest technologies and tools to ensure your app is fast, efficient, and meets high standards of performance and security. With our skilled designers, we ensure your app is visually appealing, enhancing user engagement and satisfaction. Our apps bring about significant changes that help your business grow and innovate.</p>
      </div>
    </div>
  );
}

export default Feature;
