import Template from "../Template"
import { FaExternalLinkAlt } from "react-icons/fa";
import school1 from '../../images/school/img-1.jpg'
import school2 from '../../images/school/img-2.jpg'
import school3 from '../../images/school/img-3.jpg'
import school4 from '../../images/school/img-4.jpg'


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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 min-h-[40vh] gap-3">
                    <img src={school1} className=""/>
                    <img src={school2} className="w-full"/>
                    <img src={school3 } className="w-full"/>
                    <img src={school4 } className="w-full"/>
                    
                </div>
                <h1 className="my-4 text-xl">Also, check out 100portraits, my passion project from the last couple of years!   <FaExternalLinkAlt className="inline-block"/></h1>
            </>}
        />
    );
}

export default Photography;