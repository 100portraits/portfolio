import { FaExternalLinkAlt } from "react-icons/fa";
import Template from "../Template"
import { Link } from "react-router-dom";
import home from '../../images/cybertalk/home.png'
import page1 from '../../images/cybertalk/page1.png'
import page2 from '../../images/cybertalk/page2.png'

const TECmapper = () => {
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
                        title: 'TEC-mapper',
                        link: '/projects/TEC-mapper'
                    }
                ]
            }
            header='Mapping GUI for The European Correspondent'
            subheader=''
            subheader2={<>A tool for journalists at the European Correspondent to create no-code data maps in a standard EEC projection.
            </>}
            contentlist={[
                
                
            ]}
            extracontent={<>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-3">
                    <img src={home} className=""/>
                    <img src={page1} className="w-full"/>
                    <img src={page2} className="w-full"/>
                                    
                </div>
                <Link target="_blank" to={'https://github.com/100portraits/tec-map-gui'}><h1 className="mt-6 text-xl hover:underline underline-offset-[6px]">See and download the project on Github <FaExternalLinkAlt className="inline-block"/></h1></Link>
            </>}
        
        />
    );
}

export default TECmapper;