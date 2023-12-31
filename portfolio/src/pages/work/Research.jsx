import { FaExternalLinkAlt } from "react-icons/fa";
import Template from "../Template"
import { Link } from "react-router-dom";

const Research = () => {
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
            header='Research Assistantship'
            subheader=''
            subheader2={<>This year from July to November, I worked on the research project <i>"How style impacts organization: modeling stylistic variations in the film art world"</i> with Dr. Rens Wilderom at the University of Amsterdam.</>}
            contentlist={[
                
            ]}
            extracontent={<>
                <h1 className="text-2xl font-semibold">Skills involved:</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">

                    <div className="bg-gray-100 dark:bg-slate-900 p-5 rounded-md">
                        <h1 className="text-xl font-semibold">Python Webscraping</h1>
                        <p className="text-sm">I used Python and the BeautifulSoup4 library to scrape data from the Internet Movie Database (IMDb), and learned some of the key steps in setting up data-retrieval.</p>
                    </div>
                    <div className="bg-gray-100 dark:bg-slate-900 p-5 rounded-md">
                        <h1 className="text-xl font-semibold">Topic Modelling</h1>
                        <p className="text-sm">Familiarised myself with the concepts behind topic modelling with BERT, and ran analysis on keywords scraped from IMDb.</p>
                    </div>
                    <div className="bg-gray-100 dark:bg-slate-900 p-5 rounded-md">
                        <h1 className="text-xl font-semibold">Data Analysis</h1>
                        <p className="text-sm">Manipulating the scraped data as well as the cluster data, I learned how to work with time series data in detail, and create specific matrices for statistical/machine learning analysis.</p>
                    </div>

                </div>
                <Link to={'../blog/unpacking-clusters'}><h1 className="my-4 text-xl hover:underline underline-offset-[6px]">Read an article from my blog about unpacking clusters from BERTopic models.  <FaExternalLinkAlt className="inline-block"/></h1></Link>
            </>}
        />
    );
}

export default Research;