import { FaExternalLinkAlt } from "react-icons/fa";
import Template from "../Template"
import { Link } from "react-router-dom";

const Partnerships = () => {
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
                        title: 'Partnerships',
                        link: '/work/partnerships'
                    }
                ]
            }
            header='Partnerships'
            subheader=''
            subheader2={<>Since May 2024, I work with the partnerships team of my study program, Computational Social Science. We organize events, find stakeholder challenges and design projects for student groups.</>}
            contentlist={[
                
            ]}
            extracontent={<>
                <h1 className="text-2xl font-semibold">Skills involved:</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">

                    <div className="bg-gray-100 dark:bg-slate-900 p-5 rounded-md">
                        <h1 className="text-xl font-semibold">Communication and Networking</h1>
                        <p className="text-sm">Making calls to find potential partners, putting together social impact focused projects, and managing a leadslist.</p>
                    </div>
                    <div className="bg-gray-100 dark:bg-slate-900 p-5 rounded-md">
                        <h1 className="text-xl font-semibold">Design</h1>
                        <p className="text-sm">Made some posters and materials for Computational Social Science events.</p>
                    </div>
                    <div className="bg-gray-100 dark:bg-slate-900 p-5 rounded-md">
                        <h1 className="text-xl font-semibold">Event organization</h1>
                        <p className="text-sm"></p>
                    </div>

                </div>
            </>}
        />
    );
}

export default Partnerships;