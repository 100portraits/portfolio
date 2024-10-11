import {FaInstagram} from 'react-icons/fa/'
import {FaGithub} from 'react-icons/fa/'
import Template from './Template';
import { Breadcrumb } from 'flowbite-react';
import { Link } from 'react-router-dom';
import BreadcrumbGenerator from '../components/BreadcrumbGenerator';


const Projects = () => {
    return (
        <Template
            breadcrumb={
                [
                    {
                        title: 'Home',
                        link: '/'
                    },
                    {
                        title: 'Projects',
                        link: '/projects'
                    }
                ]
            }
            header='Projects'
            subheader=''
            subheader2="Some of the things I made in the last year."

            contentlist={[
                {
                    title: '100portraits',
                    link: '/projects/portraits',
                    description: '/portraits'
                },
                {
                    title: 'Hierarchical Notes',
                    link: 'https://notes.sahir.nl',
                    linkExternal: true,
    
                    description: '[notes.sahir.nl]'
                },
                {
                    title: 'map-GUI',
                    link: '/projects/tec-mapper',
                    description: '/tec-mapper'
                },
                {
                    title: 'Our Favourite Places',
                    link: 'https://places.sahir.nl',
                    linkExternal: true,
    
                    description: '[places.sahir.nl]'
                },
                {
                    title: 'Bike-Kitchen Host',
                    link: '/projects/bk-host',
                    description: '/bk-host'
                },

                {
                    title: 'Linker',
                    link: 'https://linker.sahir.nl',
                    linkExternal: true,
                    description: '[linker.sahir.nl]'
                },
                {
                    title: 'Where am I Next?',
                    link: 'https://where-am-i-next.pages.dev/',
                    linkExternal: true,
                    description: '[where-am-i-next.pages.dev]'
                },

                {
                    title: 'Innovative Education Toolkit',
                    link: '/projects/toolkit',
                    description: '/toolkit'
                },
            ]}
            
        />
    );
}


export default Projects;