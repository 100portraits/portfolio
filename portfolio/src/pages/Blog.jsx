import Template from "./Template"
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Blog = () => {
    return (
        <Template
            backarrow={true}
            header='Projects'
            subheader=''
            subheader2="The making of things that I made! Hopefully helpful."
            icons={
                <>
                    <FaGithub/>
                    <FaInstagram/>
                </>
            }
            contentlist={[
                {
                    title: 'Unpacking Clusters from BERTopic models',
                    link: '/'
                },
                {
                    title: 'Making this website',
                    link: '/'
                },
                {
                    title: 'Making 100portraits',
                    link: '/'
                },
            
                
            ]}
            
        />
    );
}

export default Blog;