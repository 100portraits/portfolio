import Template from "../Template"
import { FaExternalLinkAlt } from "react-icons/fa";
const Portraits = () => {
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
                        title: '100portraits',
                        link: '/projects/portraits'
                    }
                ]
            }
            header='100portraits'
            subheader=''
            subheader2={<>My hobby project for the last 3 years. I take portraits of strangers I meet who have a story to tell. Here's a preview:</>}

            contentlist={[

            ]}
            extracontent={<>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-1">
                    <img src="https://placehold.co/400x500/AAA/31343C" className="w-full"/>
                    <img src="https://placehold.co/400x500/AAA/31343C" className="w-full"/>
                    <img src="https://placehold.co/400x500/AAA/31343C" className="w-full"/>
                    <img src="https://placehold.co/400x500/AAA/31343C" className="w-full"/>
                    <img src="https://placehold.co/400x500/AAA/31343C" className="w-full"/>
                    <img src="https://placehold.co/400x500/AAA/31343C" className="w-full"/>
                    <img src="https://placehold.co/400x500/AAA/31343C" className="w-full"/>
                    <img src="https://placehold.co/400x500/AAA/31343C" className="w-full"/>
                    <img src="https://placehold.co/400x500/AAA/31343C" className="w-full"/>
                    <img src="https://placehold.co/400x500/AAA/31343C" className="w-full"/>
                    <img src="https://placehold.co/400x500/AAA/31343C" className="w-full"/>
                    <img src="https://placehold.co/400x500/AAA/31343C" className="w-full"/>
                    <img src="https://placehold.co/400x500/AAA/31343C" className="w-full"/>
                    <img src="https://placehold.co/400x500/AAA/31343C" className="w-full"/>
                    <img src="https://placehold.co/400x500/AAA/31343C" className="w-full"/>
                    <img src="https://placehold.co/400x500/AAA/31343C" className="w-full"/>

                </div>
                <h1 className="mt-6 text-2xl font-semibold">Check out the project's website   <FaExternalLinkAlt className="inline-block"/></h1>
                <h1 className="mt-2 text-lg">And here is a blog article about the development of the website   <FaExternalLinkAlt className="inline-block"/></h1>
                
            </>}


        />
    );
}

export default Portraits;