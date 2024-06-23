  
const Card = ({ service }) => {
    return (
        <div className="bg-brand-black-100 h-full w-full pt-24 pb-12 px-5 text-center mx-auto rounded-lg">
            <div className="bg-brand-black-200 mx-auto w-[5.5rem] rounded-3xl text-center">
                <img src={service.icon} className="mx-auto py-6"  alt="" />
            </div>
            <div className="mt-7">
                <h1 className="text-white text-xl font-semibold">{service.title}</h1>   
                <p className="mt-3 text-brand-gray text-base">{service.description}</p>
            </div>
        </div>
    );
};

export default Card;
