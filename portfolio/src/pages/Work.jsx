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
            subheader2="My work experience since moving to Amsterdam in 2022."
            
            contentlist={[
                {
                    title: 'Research Assistant: IMDb Project',
                    link: '/work/researchIMDb',
                    description: '/researchIMDb'
                },
                {
                    title: 'Research Assistant: Educational Trends',
                    link: '/work/researchEdu',
                    description: '/researchEdu'
                },
                {
                    title: 'Photographer',
                    link: '/work/photography',
                    description: '/photography'

                },
                {
                    title: 'Partnerships (Computational Social Science)',
                    link: '/work/partnerships',
                    description: '/partnerships'    

                },
            
                
            ]}
            
        />
    );
}


export default Work;