import Counter from "../Counter"
const Stats = () => {
    return (
        <section className="relative isolate overflow-hidden bg-brand-black px-6 py-24 sm:py-32 lg:px-8 mt-10 md:mt-32 ">
            <div style={{ position: 'absolute', inset: 0,  zIndex: -10, background: 'radial-gradient(45rem 50rem at top, #18181C, #101010)', opacity: 1}} />
            <div style={{ position: 'absolute', top: 0, bottom: 0, right: '50%', zIndex: -10, marginRight: '4rem', width: '100%', transformOrigin: 'bottom left', transform: 'skewX(-30deg)', backgroundColor: '#18181C',  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', border: '1px solid #222228'}} />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 lg:gap-20 px-8 md:px-20 lg:px-32  2xl:max-w-[100rem] mx-auto'>
                <div>
                    <h1 className="text-center text-6xl">
                        <Counter start='0' end='10'/>
                    </h1>
                    <p className="mt-3 text-brand-gray text-2xl font-medium text-center">Happy Clients</p>
                </div>
                <div>
                    <h1 className="text-center text-6xl">
                        <Counter start='0' end='20'/>
                    </h1>
                    <p className="mt-3 text-brand-gray text-2xl font-medium text-center">Projects Completed</p>
                </div>
                <div>
                    <h1 className="text-center text-6xl">
                        <Counter start='0' end='2'/>
                    </h1>
                    <p className="mt-3 text-brand-gray text-2xl font-medium text-center">Years in Business</p>
                </div>
                {/* <div>
                    <h1 className="text-center text-6xl"><Counter /></h1>
                    <p className="mt-3 text-brand-gray text-2xl font-medium text-center">Team Members</p>
                </div> */}
                {/* <div>
                    <h1 className="text-center text-6xl"><Counter /></h1>
                    <p className="mt-3 text-brand-gray text-2xl font-medium text-center">Partnerships</p>
                </div> */}
                <div>
                    <h1 className="text-center text-6xl">
                        <Counter start='0' end='21'/>
                    </h1>
                    <p className="mt-3 text-brand-gray text-2xl font-medium text-center">Technologies Utilized</p>
                </div>
            </div>
        </section> 
    )
}

export default Stats
