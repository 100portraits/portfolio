import Template from "../Template"
import { FaExternalLinkAlt } from "react-icons/fa";
const Photography = () => {
    return (
        <Template
            breadcrumb={
                [
                    {
                        title: 'Home',
                        link: '/'
                    },
                    {
                        title: 'Work',
                        link: '/work'
                    },
                    {
                        title: 'Photography',
                        link: '/work/photography'
                    }
                ]
            }
            header='Photography'
            subheader=''
            subheader2={<>I take portrait photos at the University of Amsterdam (on a freelance basis) using natural lighting and a small mirrorless camera with a 35mm fixed-length lens. Here is some of my work.</>}
            
            contentlist={[
                
            ]}
            extracontent={<>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                    <img src="https://placehold.co/400x500/AAA/31343C" className="w-full"/>
                    <img src="https://placehold.co/400x500/AAA/31343C" className="w-full"/>
                    <img src="https://placehold.co/400x500/AAA/31343C" className="w-full"/>
                    <img src="https://placehold.co/400x500/AAA/31343C" className="w-full"/>
                </div>
                <h1 className="my-4 text-xl">Also, check out 100portraits, my passion project from the last couple of years!   <FaExternalLinkAlt className="inline-block"/></h1>
            </>}
        />
    );
}

export default Photography;