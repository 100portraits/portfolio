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
            subheader2="Some of my passion projects from the last few years."
            icons={
                <>
                    <FaGithub/>
                    <FaInstagram/>
                </>
            }
            contentlist={[
                {
                    title: '100portraits',
                    link: '/projects/portraits'
                },
                {
                    title: 'Innovative Education Toolkit',
                    link: '/projects/toolkit'
                },
            
                
            ]}
            
        />
    );
}


export default Projects;