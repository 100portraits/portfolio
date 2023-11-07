import {FaInstagram} from 'react-icons/fa/'
import {FaGithub} from 'react-icons/fa/'
import Template from './Template';

const Projects = () => {
    return (
        <Template
            backarrow={true}
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