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
            subheader2="How I did some things, some general thoughts. Enjoy reading!"
            
            contentlist={[
                {
                    title: 'Unpacking clusters from BERTopic models',
                    link: '/blog/unpacking-clusters',
                    description: '/unpacking-clusters'
                },
                {
                    title: 'API hijacking for efficient web scraping',
                    link: '/blog/api-hijacking',
                    description: '/api-hijacking'
                },
                {
                    title: 'Making the portfolio',
                    link: '/blog/making-of-portfolio',
                    description: '/making-of-portfolio'
                },
                {
                    title: 'Making 100portraits',
                    link: '/blog/making-of-100portraits',
                    description: '/making-of-100portraits'
                },
                {
                    title: 'Why Computational Social Science? Why Amsterdam?',
                    link: '/blog/why-computational-social-science',
                    description: '/why-computational-social-science'
                },
                


            
                
            ]}
            
        />
    );
}

export default Blog;