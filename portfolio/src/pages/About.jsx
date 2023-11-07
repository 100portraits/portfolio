import { FaGithub, FaInstagram } from "react-icons/fa";
import Template from "./Template";

const About = () => {
    return (
        <div>
            <Template
                backarrow={true}
                header='About me'

                icons={
                    <>
                        <FaGithub/>
                        <FaInstagram/>
                    </>
                }
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