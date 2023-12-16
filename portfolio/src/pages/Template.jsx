import {FaExternalLinkAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import React from 'react';
import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import { useEffect } from 'react';
import BreadcrumbGenerator from '../components/BreadcrumbGenerator';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';

function Template({breadcrumb, header, subheader, subheader2, contentlist, extracontent, extracontentTop, ...props}) {
    

    const [showLinks, setShowLinks] = React.useState(() => {
      return JSON.parse(localStorage.getItem('showLinks')) || false;
    });

    function toggleShowLinks() {
      const newShowLinks = !showLinks;
      setShowLinks(newShowLinks);
      localStorage.setItem('showLinks', JSON.stringify(newShowLinks));
  }

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
                    <div className='absolute top-0 right-0 flex items-center justify-end' >
                        <a className='hover:underline cursor-pointer ' onClick={toggleShowLinks}>{!showLinks?"Show links":"Hide links"}</a>
                        <DarkThemeToggle className='text-2xl m-5 text-gray-900 dark:text-white'/>

                    </div>
                    <div className="text-left mt-6 md:mt-14 mb-4 md:flex justify-between">
                        <div className="">
                            {/*show breadcrumb if True */}
                            <BreadcrumbGenerator links={breadcrumb}/>
                            

                            <h1 className="pb-1 text-5xl md:text-6xl font-semibold">{header}</h1>
                            <h1 className="text-lg md:text-2xl">{subheader}</h1>
                            <h1 className="text-md md:text-xl mt-2 mb-2 mr-8">{subheader2}</h1>
                        </div>
                        <div className='flex my-3 md:self-center flex-row gap-2 text-2xl md:text-4xl'>
                          <Link target='_blank' to='https://www.github.com/100portraits'><FaGithub /></Link>
                          <Link target='_blank' to='https://www.instagram.com/sahir.de'><FaInstagram/></Link>
                          <Link target='_blank' to='https://www.linkedin.com/in/sahirde/'><FaLinkedin/></Link>
                        </div>
                    </div>
                    {extracontentTop}
                    {contentlist.length === 0 ? 
                        <></> 
                        : 
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 min-h-[40vh]'>
                            {contentlist.map((content) => (
                                <Link to={content.link} target={content.linkExternal?"_blank":'_self'}><div className='bg-slate-100 dark:bg-slate-900 transition-all  h-full grow flex flex-col dark:hover:bg-slate-950 hover:bg-slate-200 group'>
                                    <h1 className={'text-2xl font-semibold m-10 group-hover:underline underline-offset-[6px]'+ (content.description && showLinks?' mb-2':'')}>
                                        {content.title}<FaExternalLinkAlt className='inline text-sm ml-2'/>
                                    </h1>
                                    {content.description && showLinks ? <h1 className='text-md mx-10 mb-12 md:mb-12'>{content.description}</h1> : <></>}
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