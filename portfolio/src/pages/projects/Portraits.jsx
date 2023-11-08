import Template from "../Template"
import { FaExternalLinkAlt } from "react-icons/fa";

import img1 from '../../images/fun/min/img-1.jpg'
import img2 from '../../images/fun/min/img-2.jpg'
import img3 from '../../images/fun/min/img-3.jpg'
import img4 from '../../images/fun/min/img-4.jpg'
import img5 from '../../images/fun/min/img-5.jpg'
import img6 from '../../images/fun/min/img-6.jpg'
import img7 from '../../images/fun/min/img-7.jpg'
import img8 from '../../images/fun/min/img-8.jpg'
import img9 from '../../images/fun/min/img-9.jpg'
import img10 from '../../images/fun/min/img-10.jpg'
import img11 from '../../images/fun/min/img-11.jpg'
import img12 from '../../images/fun/min/img-12.jpg'
import img13 from '../../images/fun/min/img-13.jpg'
import img14 from '../../images/fun/min/img-14.jpg'


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
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-1 auto-rows-min overflow-hidden">
                   
                    <div className="col-span-2  h-full" style={{backgroundImage: `url(${img1})`, backgroundSize: 'auto 100%', backgroundPosition: 'center'}}>
                    </div>
                    <img src={img2} className="w-full"/>
                    <img src={img3} className="w-full"/>
                    <img src={img4} className="w-full"/>
                    <img src={img5} className="w-full"/>
                    <img src={img6} className="w-full"/>
                    <img src={img7} className="w-full"/>
                    <img src={img8} className="w-full"/>
                    <img src={img9} className="w-full"/>
                    <img src={img10} className="w-full"/>
                    <img src={img11} className="w-full"/>
                    <img src={img12} className="w-full"/>
                    <img src={img13} className="w-full"/>
                    <div className="col-span-2  h-full" style={{backgroundImage: `url(${img14})`, backgroundSize: 'auto 100%', backgroundPosition: 'center'}}>
                    </div>
                </div>
                
                <h1 className="mt-6 text-2xl font-semibold">Check out the project's website   <FaExternalLinkAlt className="inline-block"/></h1>
                <h1 className="mt-2 text-lg">And here is a blog article about the development of the website   <FaExternalLinkAlt className="inline-block"/></h1>
                
            </>}


        />
    );
}

export default Portraits;