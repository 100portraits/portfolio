import { FaExternalLinkAlt } from "react-icons/fa";
import Template from "../Template"

const Toolkit = () => {
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
                    },
                    {
                        title: 'The Innovative Education Toolkit',
                        link: '/projects/toolkit'
                    }
                ]
            }
            header='The Innovative Education Toolkit'
            subheader=''
            subheader2={<>A digital intervention aimed at teachers who find themselves overwhelmed with the amount innovative teaching tools on the internet. This was created by my project group and I for a research project in Spring 2023.
            </>}
            contentlist={[
                
                
            ]}
            extracontent={<>
                <img src="https://placehold.co/2000x1000/AAA/31343C" className="w-full"/>
                <h1 className="mt-6 text-xl">Browse the toolkit here <FaExternalLinkAlt className="inline-block"/></h1>
            </>}
        
        />
    );
}

export default Toolkit;