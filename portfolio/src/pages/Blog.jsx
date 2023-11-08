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
            subheader2="How I made/did some things. Enjoy reading!"
            
            contentlist={[
                {
                    title: 'Unpacking Clusters from BERTopic models',
                    link: '/blog/unpacking-clusters'
                },

                {
                    title: 'Making the portfolio',
                    link: '/blog/making-of-portfolio'
                },
                {
                    title: 'Making 100portraits',
                    link: '/blog/making-of-100portraits'
                },
            
                
            ]}
            
        />
    );
}

export default Blog;