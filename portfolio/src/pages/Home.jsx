import {FaInstagram} from 'react-icons/fa/'
import {FaGithub} from 'react-icons/fa/'
import {FaExternalLinkAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Flowbite, DarkThemeToggle } from 'flowbite-react'
import Template from './Template'

const Home = () => {
    return (
        <Template
            breadcrumb={
                [
                ]
            }
            header='Sahir Dhanani Enarth'
            subheader='Photography / data science / design'
            subheader2='Computational Social Science @ University of Amsterdam'

            contentlist={[
                {
                    title: 'My work',
                    link: '/work',
                    description: '/work'
                },
                {
                    title: 'Projects',
                    link: '/projects',
                    description: '/projects'
                },
                {
                    title: 'About me / skills',
                    link: '/about',
                    description: '/about'
                },
                
                {
                    title: 'Blog',
                    link: '/blog',
                    description: '/blog'
                },

                
            ]}
            
        />
    );
}


export default Home;