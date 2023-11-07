import { IoIosArrowBack } from 'react-icons/io';
import {FaExternalLinkAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ThemeSwitcher from '../components/darkModeSwitch'


function Template({backarrow, header, subheader, subheader2, icons, contentlist, extracontent}) {
    return (
        <div className=''>
            <div className='dark:bg-slate-800'>
                <div className="min-h-screen dark:bg-slate-800 dark:text-white max-w-screen-md md:max-w-screen-lg p-10 mx-auto ">
                    <div className='absolute top-0 right-0 m-5' >
                        <ThemeSwitcher/>
                    </div>
                    <div className="text-left mt-6 md:mt-14 mb-4 md:flex justify-between">
                        <div className="">
                            {/*show backarrow if True */}
                            {backarrow && <Link to='/'><div className='mb-4 '><IoIosArrowBack className='inline-block'/><h1 className='underline inline-block'>Back</h1></div></Link>}

                            <h1 className="pb-1 text-5xl md:text-6xl font-semibold">{header}</h1>
                            <h1 className="text-lg md:text-2xl ">{subheader}</h1>
                            <h1 className="text-md md:text-xl">{subheader2}</h1>
                        </div>
                        <div className='flex my-3 md:self-center flex-row gap-2 text-2xl md:text-4xl'>
                            {icons}
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3 min-h-[40vh]'>
                        {contentlist.map((content) => (
                            <Link to={content.link}><div className='bg-slate-100 dark:bg-slate-700  h-full flex hover:bg-slate-200 group'>
                                <h1 className='text-2xl font-semibold m-10 group-hover:underline underline-offset-4'>
                                    {content.title}<FaExternalLinkAlt className='inline text-sm ml-2'/>
                                </h1>
                            </div></Link>
                        ))
                        }
                    </div>
                    {extracontent}
                </div>
            </div>
        </div>
    );
    
}


export default Template;