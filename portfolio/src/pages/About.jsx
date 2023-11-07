import { FaGithub, FaInstagram } from "react-icons/fa";
import Template from "./Template";
import BreadcrumbGenerator from "../components/BreadcrumbGenerator";
const About = () => {
    return (
        <div>
            <Template
                breadcrumb={
                        [
                            {
                                title: 'Home',
                                link: '/'
                            },
                            {
                                title: 'About me',
                                link: '/about'
                            }
                        ]
                }
                header='About me'

                
                contentlist={[
                    
                ]}
                extracontent={
                    <>   
                        <h1 className="text-2xl mt-4">My interests</h1>
                        <p className="">These are some of my interests</p>
                    </>

                }
            />
        </div>
    );
}

export default About;