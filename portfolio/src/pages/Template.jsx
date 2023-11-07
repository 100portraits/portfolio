import {FaExternalLinkAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import React from 'react';
import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import { useEffect } from 'react';
import BreadcrumbGenerator from '../components/BreadcrumbGenerator';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Template({breadcrumb, header, subheader, subheader2, contentlist, extracontent}) {
    useEffect(() => {
        const theme = localStorage.getItem('theme');
        
        if (theme === 'dark') {
          document.querySelector('html').classList.add('dark');
          // Create a click event
          const clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true, view: window });
    
          const buttonElement = document.querySelector('button[aria-label*="Toggle dark mode"]');
          buttonElement.dispatchEvent(clickEvent);
        } else {
          document.querySelector('html').classList.remove('dark');
        }
    
        // Function to be executed when you change the "dark" class in the HTML tag
        const handleDarkModeChange = (mutationsList, observer) => {
          for (const mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
              const htmlElement = document.querySelector('html');
              if (htmlElement.classList.contains('dark')) {
                // The "dark" class has been added
                localStorage.setItem('theme', 'dark');
              } else {
                // The "dark" class has been removed
                localStorage.setItem('theme', 'light');
              }
            }
          }
        };
    
        // Create a new MutationObserver
        const htmlElement = document.querySelector('html');
        const observer = new MutationObserver(handleDarkModeChange);
        
        // Notice changes in the "dark" class of the HTML tag
        observer.observe(htmlElement, { attributes: true, attributeFilter: ['class'] });
    
      }, []);
    
    return (
        <Flowbite>
        <div className=''>
            <div className='dark:bg-slate-800'>
                <div className="min-h-screen dark:bg-slate-800 dark:text-white max-w-screen-md md:max-w-screen-lg p-10 mx-auto ">
                    <div className='absolute top-0 right-0 m-5' >
                        <DarkThemeToggle className='text-2xl'/>

                    </div>
                    <div className="text-left mt-6 md:mt-14 mb-4 md:flex justify-between">
                        <div className="">
                            {/*show breadcrumb if True */}
                            <BreadcrumbGenerator links={breadcrumb}/>
                            

                            <h1 className="pb-1 text-5xl md:text-6xl font-semibold">{header}</h1>
                            <h1 className="text-lg md:text-2xl ">{subheader}</h1>
                            <h1 className="text-md md:text-xl mt-2 mb-2">{subheader2}</h1>
                        </div>
                        <div className='flex my-3 md:self-center flex-row gap-2 text-2xl md:text-4xl'>
                          <FaGithub/>
                          <FaInstagram/>
                          <FaLinkedin/>
                        </div>
                    </div>

                    {contentlist.length === 0 ? 
                        <></> 
                        : 
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 min-h-[40vh]'>
                            {contentlist.map((content) => (
                                <Link to={content.link}><div className='bg-slate-100 dark:bg-slate-900 transition-all  h-full flex dark:hover:bg-slate-950 hover:bg-slate-200 group'>
                                    <h1 className='text-2xl font-semibold m-10 group-hover:underline underline-offset-[6px]'>
                                        {content.title}<FaExternalLinkAlt className='inline text-sm ml-2'/>
                                    </h1>
                                </div></Link>
                            ))
                            }
                        </div>
                    }   
                    {extracontent}
                </div>
            </div>
        </div>
        </Flowbite>
    );
    
}


export default Template;