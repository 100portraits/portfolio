import {FaInstagram} from 'react-icons/fa/'

const Home = () => {
    return (
        <>
        
            <div className=" max-w-screen-lg p-10 mx-auto">
                <div className="text-left mt-14 mb-4 flex justify-between">
                    <div className="">
                        <h1 className="pb-1 text-6xl font-semibold">Sahir Dhanani Enarth</h1>
                        <h1 className=" text-2xl ">Web design / photography / data science</h1>
                        <h1 className="text-xl">Computational Social Science @ University of Amsterdam</h1>
                    </div>
                    <div className='self-end flex flex-row gap-2 text-3xl'>
                        <FaGithub />
                        <FaInstagram/>

                    </div>
                </div>
                <div>
                    <p className="text-3xl font-medium pb-4">My work</p>
                </div>
                <div className='grid grid-cols-3 gap-4 h-[80vh]'>
                    <div className='bg-slate-100 h-full col-span-2'></div>
                    <div className='bg-slate-100 h-full'></div>
                    <div className='bg-slate-100 h-full'></div>
                    <div className='bg-slate-100 h-full col-span-2'></div>

                </div>
            

            </div>
        </>
    );
}

export default Home;