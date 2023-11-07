import {FaInstagram} from 'react-icons/fa/'
import {FaGithub} from 'react-icons/fa/'
import {FaExternalLinkAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Flowbite, DarkThemeToggle } from 'flowbite-react'
import Template from './Template'

const Home = () => {
    return (
        <Template
            backarrow={false}
            header='Sahir Dhanani Enarth'
            subheader='Photography / data science / design'
            subheader2='Computational Social Science @ University of Amsterdam'
            icons={
                <>
                    <FaGithub/>
                    <FaInstagram/>
                </>
            }
            contentlist={[
                {
                    title: 'My work',
                    link: '/work'
                },
                {
                    title: 'Projects',
                    link: '/projects'
                },
                {
                    title: 'Blog',
                    link: '/blog'
                },
                {
                    title: 'About me',
                    link: '/about'
                }
            ]}
            
        />
    );
}


export default Home;