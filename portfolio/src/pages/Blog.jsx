import Template from "./Template"
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import BreadcrumbGenerator from "../components/BreadcrumbGenerator";
const Blog = () => {
    return (
        <Template
        breadcrumb={
            [
                {
                    title: 'Home',
                    link: '/'
                },
                {
                    title: 'Blog',
                    link: '/blog'
                }
            ]
    }
            header='Blog'
            subheader=''
            subheader2="How I made some things."
            
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