import { FaExternalLinkAlt } from "react-icons/fa";
import Template from "../Template"
import { Link } from "react-router-dom";

//img
import edu1 from '../../images/work/educationaltrends/edu1.png'
import edu2 from '../../images/work/educationaltrends/edu2.png'

const ResearchEducationalTrends = () => {
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
                        title: 'Research',
                        link: '/work/research'
                    }
                ]
            }
            header='Research: Education Trends'
            subheader=''
            subheader2={<>Since November 2023, I have been working on research into educational trends of Dutch research universities as an assistant of Dr. Alex van Venrooij at the University of Amsterdam.</>}
            contentlist={[
                
            ]}
            extracontent={<>
                <h1 className="text-2xl font-semibold">Skills involved:</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-4">

                    <div className="bg-gray-100 dark:bg-slate-900 p-5 rounded-md">
                        <h1 className="text-xl font-semibold">Selenium webscraping</h1>
                        <p className="text-sm">Used Selenium to scrape course catalogues of 6 different Dutch universities. Used data linkage techniques to build a comprehensive dataset. <br /><br />Used some APIs and learned more advanced data collection techniques.</p>
                    </div>
                    <div className="bg-gray-100 dark:bg-slate-900 p-5 rounded-md">
                        <h1 className="text-xl font-semibold">R</h1>
                        <p className="text-sm">Instead of Python, this project was done in R. Although I haven't become proficient in it, I learned enough of the core libraries and ggplot to do data analysis.</p>
                    </div>
                    <div className="bg-gray-100 dark:bg-slate-900 p-5 rounded-md">
                        <h1 className="text-xl font-semibold">NLP (Concept Mover's Distance)</h1>
                        <p className="text-sm">Learned in-depth about word embeddings, vectorization. Created semantic directions (qual vs quant, methods vs practice etc) and measured time series data of document closeness.</p>
                    </div>

                </div>
                <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3">
                    <img src={edu1} className=""/>
                    <img src={edu2} className="w-full"/>

                    
                </div>
            </>
            </>}
        />
    );
}

export default ResearchEducationalTrends;