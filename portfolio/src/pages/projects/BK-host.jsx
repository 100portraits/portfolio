import { FaExternalLinkAlt } from "react-icons/fa";
import Template from "../Template"
import { Link } from "react-router-dom";
import home from '../../images/cybertalk/home.png'
import page1 from '../../images/cybertalk/page1.png'
import page2 from '../../images/cybertalk/page2.png'

const BKhost = () => {
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
                        title: 'Bike-Kitchen Host',
                        link: '/projects/BK-host'
                    }
                ]
            }
            header='Bike-Kitchen Host tool'
            subheader=''
            subheader2={<>A digital intervention aimed at teachers who find themselves overwhelmed with the amount innovative teaching tools on the internet. This was created by my project group and I for a research project in Spring 2023.
            </>}
            contentlist={[
                
                
            ]}
            extracontent={<>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-3">
                    <img src={home} className=""/>
                    <img src={page1} className="w-full"/>
                    <img src={page2} className="w-full"/>
                                    
                </div>
                <Link target="_blank" to={'https://sahirde.eu.pythonanywhere.com'}><h1 className="mt-6 text-xl hover:underline underline-offset-[6px]">Browse the toolkit here <FaExternalLinkAlt className="inline-block"/></h1></Link>
            </>}
        
        />
    );
}

export default BKhost;