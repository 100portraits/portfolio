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
                subheader=''
                subheader2='My name is Sahir Dhanani Enarth. I am passionate about photography, data, and design. Here is why you should hire me:'
                
                contentlist={[
                    
                ]}
                extracontent={
                    <>   
                        <h1 className="text-2xl mt-4">Coming soon</h1>
                    </>

                }
            />
        </div>
    );
}

export default About;