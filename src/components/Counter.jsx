import { useRef, useEffect, useCallback } from 'react';
import CountUp from 'react-countup';

const Counter = ({start, end}) => {
    const countUpRef = useRef(null);
    const startCounting = useRef(null);

    const handleIntersection = useCallback((entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && startCounting.current) {
            startCounting.current();
        }
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            root: null, // use the viewport as the container
            threshold: 0.1 // trigger when 10% of the component is visible
        });

        if (countUpRef.current) {
            observer.observe(countUpRef.current);
        }

        return () => {
            if (countUpRef.current) {
                observer.unobserve(countUpRef.current);
            }
        };
    }, [handleIntersection]);

    return (
        <div ref={countUpRef}>
            <CountUp
                start={start}
                end={end}
                duration={4}
                onEnd={() => console.log('Ended! 👏')}
                onStart={() => console.log('Started! 💨')}
            >
                {({ countUpRef, start }) => {
                    startCounting.current = start;
                    return (
                        <div className='text-white'>
                            <span ref={countUpRef} />
                        </div>
                    );
                }}
            </CountUp>
        </div>
    );
}

export default Counter;
