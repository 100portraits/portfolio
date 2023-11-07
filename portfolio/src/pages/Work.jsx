import {FaInstagram} from 'react-icons/fa/'
import {FaGithub} from 'react-icons/fa/'
import Template from './Template';

const Work = () => {
    return (
        <Template
            breadcrumb={
                [
                    {
                        title: 'Home',
                        link: '/'
                    },
                    {
                        title: 'Work',
                        link: '/work'
                    }
                ]
            }
            header='My Work'
            subheader=''
            subheader2="Here's how I've kept busy since moving to Amsterdam in 2022."
            
            contentlist={[
                {
                    title: 'Research Assistant',
                    link: '/work/research'
                },
                {
                    title: 'Photographer',
                    link: '/work/photography'
                },
            
                
            ]}
            
        />
    );
}


export default Work;