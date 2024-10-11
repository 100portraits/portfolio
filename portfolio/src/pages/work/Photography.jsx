import Template from "../Template"
import { FaExternalLinkAlt } from "react-icons/fa";
import school1 from '../../images/school/min/img-1.jpg'
import school2 from '../../images/school/min/img-2.jpg'
import school3 from '../../images/school/min/img-3.jpg'
import school4 from '../../images/school/min/img-4.jpg'
import { Link } from "react-router-dom";


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
            subheader2={<>I take portrait photos at the University of Amsterdam (on a freelance basis) using natural lighting. Here is some of my work, created for programme testimonials or student brochures.</>}
            
            contentlist={[
                
            ]}
            extracontent={<>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                    <img src={school1} className=""/>
                    <img src={school2} className="w-full"/>
                    <img src={school3 } className="w-full"/>
                    <img src={school4 } className="w-full"/>
                    
                </div>
                <Link  to={'../projects/portraits'}><h1 className="my-4 text-xl hover:underline underline-offset-[6px]">Check out 100portraits, my passion project from the last couple of years!    <FaExternalLinkAlt className="inline-block"/></h1></Link>
            </>}
        />
    );
}

export default Photography;