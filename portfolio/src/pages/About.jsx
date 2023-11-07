import { FaGithub, FaInstagram } from "react-icons/fa";
import Template from "./Template";

const About = () => {
    return (
        <div>
            <Template
                backarrow={true}
                header='Test header'
                subheader='test subheader'
                subheader2='subheader2 test'
                icons={
                    <>
                        <FaGithub/>
                        <FaInstagram/>
                    </>
                }
                contentlist={[
                    {
                        title: 'content title1',
                        link: '/work'
                    },
                    {
                        title: 'content title2',
                        link: '/projects'
                    },
                    {
                        title: 'content title3',
                        link: '/blog'
                    }
                ]}
                extracontent={
                    <>   
                        <h1 className="text-2xl mt-4">extra content header</h1>
                        <p className="">extra content paragraph</p>
                    </>

                }
            />
        </div>
    );
}

export default About;