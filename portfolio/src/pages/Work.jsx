import {FaInstagram} from 'react-icons/fa/'
import {FaGithub} from 'react-icons/fa/'
import {FaExternalLinkAlt} from 'react-icons/fa'
import {IoIosArrowBack} from 'react-icons/io'
import { Link } from 'react-router-dom'

const Work = () => {
    return (
        <>
            <div className="max-w-screen-md md:max-w-screen-lg p-10 mx-auto">
                <div className="text-left mt-6 md:mt-14 mb-4 md:flex justify-between">
                    <div className="">
                            <Link to='/'><span className='mb-4'><IoIosArrowBack className='inline-block'/><h1 className='underline inline-block'>Back</h1></span></Link>
                            <h1 className="mt-3 pb-3 text-5xl md:text-6xl font-semibold">My Work</h1>
                        <h1 className="text-lg md:text-xl ">Here's how I've kept busy since moving to Amsterdam in 2022.</h1>
                    </div>
                    <div className='flex my-3 md:self-center flex-row gap-2 text-2xl md:text-4xl'>
                        <FaGithub />
                        <FaInstagram/>

                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3 h-[40vh] md'>
                    <Link to='/work/research'><div className='bg-slate-100 h-full flex hover:bg-slate-200 group'>
                        <h1 className='text-2xl font-semibold m-10 group-hover:underline underline-offset-4'>
                            Research Assistant<FaExternalLinkAlt className='inline text-sm ml-2'/>
                        </h1>
                    </div></Link>
                    <Link to='/work/photography'> <div className='bg-slate-100 h-full flex hover:bg-slate-200 group'>
                        <h1 className='text-2xl font-semibold m-10 group-hover:underline underline-offset-4'>
                            Photographer<FaExternalLinkAlt className='inline text-sm ml-2'/>
                        </h1>
                    </div></Link>

                </div>
            

            </div>
        </>
    );
}

export default Work;