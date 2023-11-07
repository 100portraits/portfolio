import {FaInstagram} from 'react-icons/fa/'
import {FaGithub} from 'react-icons/fa/'
import Template from './Template';

const Work = () => {
    return (
        <Template
            backarrow={true}
            header='My Work'
            subheader=''
            subheader2="Here's how I've kept busy since moving to Amsterdam in 2022."
            icons={
                <>
                    <FaGithub/>
                    <FaInstagram/>
                </>
            }
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