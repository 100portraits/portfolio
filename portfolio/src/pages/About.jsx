import { FaGithub, FaInstagram } from "react-icons/fa";
import { MdOutlineContentCopy } from "react-icons/md";

import Template from "./Template";
import BreadcrumbGenerator from "../components/BreadcrumbGenerator";
import { useState } from "react";
const About = () => {
    const copyEmail = () => {
        navigator.clipboard.writeText("sahirde@gmail.com");
        setCopyState(true);
        //wait 2 seconds
        setTimeout(() => {
            setCopyState(false);
        }, 1500);

    }
    const [copyState, setCopyState] = useState(false);
    return (
        <div>
            <Template
                breadcrumb={
                        [
                            {
                                title: 'Home',
                                link: '/'
                            },
                            {
                                title: 'About me',
                                link: '/about'
                            }
                        ]
                }
                header='About me'
                subheader=''
                subheader2=
                {
                <p className="space-y-2">
                    <p className="text-2xl">
                        Hi, I'm Sahir, a student at the University of Amsterdam.
                    </p>
                    <p className="text-lg">
                        I'm a freelance photographer, and I work as a research assistant at the faculty of Social and Behavioural Sciences.
                    </p>    
                </p>
                }
                extracontentTop={<div className="mt-4 mb-10">
                <p className="text-lg font-semibold">Contact me:</p>
                <div className="flex gap-1">
                    <a href="mailto:sahirde@gmail.com" className="text-[.8em] hover:no-underline underline underline-offset-[6px] text-xl">sahirde@gmail.com</a>
                    <button className={"px-2 py-1 rounded-sm text-sm" + (copyState?" bg-green-200 hover:bg-green-300 dark:bg-green-800 dark:hover:bg-green-700":"bg-white hover:bg-gray-200 dark:hover:bg-slate-700")} onClick={copyEmail}>{copyState?"Copied":<MdOutlineContentCopy className="text-sm"/>}</button>
                </div>
                
            </div>}
                contentlist={[
                    
                ]}
                extracontent={
                    <>
                    <p className="text-2xl">I'm open to work as:</p>
                    <hr className="my-2"></hr>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                        <div className="py-2">
                            <p className="text-xl">Data Scientist</p>
                            <p className="text-md">data analysis, machine learning, and data visualization.</p>
                        </div>
                        <div className="py-2">
                            <p className="text-xl">Web Developer</p>
                            <p className="text-md">full-stack web development, responsive design, UX/UI, JavaScript frameworks.</p>
                        </div>
                        <div className="py-2">
                            <p className="text-xl">Photographer</p>
                            <p className="text-md">portrait photography in natural settings</p>
                        </div>
                        <div className="py-2">
                            <p className="text-xl">Designer</p>
                            <p className="text-md">graphic design, photo/video editing, accessibility, usable and flexible design language</p>
                        </div>
                    </div>

                    <div className="bg-slate-800 dark:bg-white text-white dark:text-black py-6 px-8 mt-6"> 
                        <p className="text-xl">You should hire me because:</p>
                        <ul className="list-disc list-inside mt-2 space-y-2">
                            <li>I have skills in a variety of fields</li>
                            <li>I have experience solving problems with design-thinking and task decomposition</li>
                            <li>I'm driven by my interest in intervention-based research</li>
                            <li>I want to use technological innovation to create social impact</li>
                        </ul>
                        <p className="mt-2 text-xl">and, I'm confident in my ability to learn anything quickly and solve complex practical problems.</p >
                    </div>




                    <p className="text-2xl mt-8">My skills:</p>
                    <hr className="my-2"></hr>

                    <div className="flex flex-col sm:flex-row gap-3 justify-start mt-4 ">
                        
                        <div className="w-full">
                            <p className="text-lg font-semibold">Familiar:</p>
                            <div class="mt-2">
                            <ol class="space-y-4 list-disc list-inside">
                                <li>
                                    Python
                                    <ul class="ps-5 mt-2 space-y-1 list-disc list-inside text-[.95em]">
                                        <li>Scikit-learn</li>
                                        <li>Pandas/Geopandas</li>
                                        <li>BeautifulSoup</li>
                                        <li>Selenium</li>
                                    </ul>
                                </li>
                                <li>
                                    Web design
                                    <ul class="ps-5 mt-2 space-y-1 list-disc list-inside text-[.95em]">
                                        <li>React.js</li>
                                        <li>TailwindCSS</li>
                                    </ul>
                                </li>
                                <li>
                                    Adobe Suite
                                    <ul class="ps-5 mt-2 space-y-1 list-disc list-inside text-[.95em]">
                                        <li>Photoshop</li>
                                        <li>Lightroom</li>
                                        <li>InDesign</li>
                                    </ul>
                                </li>
                                <li>
                                    Portrait photography
                                </li>
                                <li>Git</li>
                            </ol>
                            </div>  
                        </div> 

                        <div className="w-full">
                            <p className="text-lg font-semibold">Learning:</p>
                            <div class="mt-2 space-y-4">
                                <ol class="space-y-4 list-disc list-inside">
                                    
                                    <li>
                                    Web
                                        <ul class="ps-5 mt-2 space-y-1 list-disc list-inside text-[.95em]">
                                            <li>Svelte(kit)</li>

                                            <li>Node.js</li>
                                            <li>SQL</li>
                                            <li>Serverless computing</li>
                                            
                                        </ul>
                                    </li>

                                    <li>
                                    Python
                                        <ul class="ps-5 mt-2 space-y-1 list-disc list-inside text-[.95em]">
                                            <li>Qualitative research methods</li>
                                            <li>Machine learning techniques</li>
                                            <li>PyTorch</li>
                                            <li>Data visualisation</li>
                                            <li>Python Flask</li>
                                            
                                        </ul>
                                    </li>

                                    
                                    
                                    <li>
                                    Design
                                        <ul class="ps-5 mt-2 space-y-1 list-disc list-inside text-[.95em]">
                                            <li>Adobe Illustrator</li>
                                            <li>Responsive, accessible design</li>
                                            <li>UX/UI Design systems (Fluent UI, etc.)</li>
                                            
                                        </ul>
                                    </li>
                                </ol>
                            </div>
                            
                        </div>


                    </div>
                    
                    <div className="bg-slate-800 dark:bg-white text-white dark:text-black py-6 px-8 mt-10"> 
                        <p className="text-xl">I'm looking for:</p>
                        <ul className="list-disc list-inside mt-2 space-y-2">
                            <li>Internships/part time positions in data science, web development, or design</li>
                            <li>Freelance work in photography or design</li>
                            <li>Collaborations on projects that involve social impact</li>
                        </ul>
                    </div>

                    <div className=" py-6">
                        <p className="text-2xl">Contact me:</p>
                        <div className="flex gap-1">
                            <a href="mailto:sahirde@gmail.com" className="text-xl hover:no-underline underline underline-offset-[6px]">sahirde@gmail.com</a>
                            <button className={"px-2 py-1 rounded-sm text-sm" + (copyState?" bg-green-200 hover:bg-green-300 dark:bg-green-800 dark:hover:bg-green-700":"bg-white hover:bg-gray-200 dark:hover:bg-slate-700")} onClick={copyEmail}>{copyState?"Copied":<MdOutlineContentCopy className="text-sm"/>}</button>
                        </div>
                        
                    </div>

                    </>

                }
            />
        </div>
    );
}

export default About;