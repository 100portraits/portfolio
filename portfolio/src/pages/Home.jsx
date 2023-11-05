import {FaInstagram} from 'react-icons/fa/'
import {FaGithub} from 'react-icons/fa/'
import {FaExternalLinkAlt} from 'react-icons/fa'
const Home = () => {
    return (
        <>
            <div className="max-w-screen-md md:max-w-screen-lg p-10 mx-auto">
                <div className="text-left mt-6 md:mt-14 mb-4 md:flex justify-between">
                    <div className="">
                        <h1 className="pb-1 text-5xl md:text-6xl font-semibold">Sahir Dhanani Enarth</h1>
                        <h1 className="text-lg md:text-2xl ">Photography / data science / design</h1>
                        <h1 className="text-md md:text-xl">Computational Social Science @ University of Amsterdam</h1>
                    </div>
                    <div className='flex my-3 md:self-center flex-row gap-2 text-2xl md:text-4xl'>
                        <FaGithub />
                        <FaInstagram/>

                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3 h-[40vh] md'>
                    <div className='bg-slate-100 h-full flex hover:bg-slate-200 group'>
                        <h1 className='text-2xl font-semibold m-10 group-hover:underline underline-offset-4'>
                            My work<FaExternalLinkAlt className='inline text-lg ml-2'/>
                        </h1>
                    </div>
                    <div className='bg-slate-100 h-full flex hover:bg-slate-200 group'>
                        <h1 className='text-2xl font-semibold m-10 group-hover:underline underline-offset-4'>
                            About me<FaExternalLinkAlt className='inline text-lg ml-2'/>
                        </h1>
                    </div>
                    <div className='bg-slate-100 h-full flex hover:bg-slate-200 group'>
                        <h1 className='text-2xl font-semibold m-10 group-hover:underline underline-offset-4'>
                            Blog<FaExternalLinkAlt className='inline text-lg ml-2'/>
                        </h1>
                    </div>
                    <div className='bg-slate-100 h-full flex hover:bg-slate-200 group'>
                        <h1 className='text-2xl font-semibold m-10 group-hover:underline underline-offset-4'>
                            Projects<FaExternalLinkAlt className='inline text-lg ml-2'/>
                        </h1>
                    </div>
                </div>
            

            </div>
        </>
    );
}

export default Home;