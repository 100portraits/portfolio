import { useEffect } from "react";
import Template from "../Template"
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import  { python } from 'react-syntax-highlighter/dist/esm/languages/hljs';
import { markdown } from 'react-syntax-highlighter/dist/esm/languages/hljs';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';

SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('markdown', markdown);


//images
import img1 from '../../images/blog/unpacking-clusters/hierarchy.png'
import img2 from '../../images/blog/unpacking-clusters/ward.jpg'

const UnpackingClusters = () => {

    useEffect(() => {
        document.title = "Unpacking BERTopic Clusters | Sahir.nl"
    }, []);

    const customStyles = {
        paddingLeft: '1rem',
        paddingRight: '1rem',
        paddingTop: '.5rem',
        paddingBottom: '.5rem',
        borderRadius: '0px',

    }

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
                    },
                    {
                        title: 'Unpacking Clusters',
                        link: '/blog/unpacking-clusters'
                    }
                ]
            }
            header='Unpacking Clusters'
            subheader=''
            subheader2='How to interpret and unpack hierarchical topics from a BERTopic model, and analyze it as time-series data or build an actor-attribute matrix.'
            contentlist={[
                
            ]}
            extracontent={<>
            <div className="flex flex-col gap-4 py-4 text-lg">
                
            <h1 className="text-2xl font-semibold">Introduction</h1>
            <p className="">
                One of the advantages of using BERTopic is visualising hierarchies like this:
            </p>
            <img src={img1} className="w-full"/>
            <p className="">
                By the way, this model is trained on keywords of comedy movies retrieved from IMDb. 
                </p>  
            <p>This is pretty interesting! We can see how it could be useful to analyse our data using these clusters rather than the topics, since working with upwards of 50 topics can be difficult sometimes.</p>
            <p>
                Let's break this down. There are two important questions to ask: <br/>
                <ol className="list-decimal list-inside pl-4">
                    <li>What does distance (the X axis) mean?</li>
                    <li>How are topics linked? What do the colors mean?</li>
                </ol>     
            </p>          

            <h1 className="text-2xl font-semibold">Mechanics of BERTopic</h1> 
            <h2 className="text-xl font-semibold">What does distance mean?</h2>
            <p>I found this in the BERTopic documentation <a target="_blank" className="underline" href="https://maartengr.github.io/BERTopic/api/bertopic.html#bertopic._bertopic.BERTopic.hierarchical_topics">[Link]</a>: <br/><br/>


                <SyntaxHighlighter  language="markdown" style={docco}  showLineNumbers={false} customStyle={customStyles}>
                    {`distance function:
    The distance function to use on the c-TF-IDF matrix. Default is: lambda x: 1 - cosine_similarity(x)`}
                </SyntaxHighlighter>
            
            </p>
            <p>
                Thus, a distance of 0 means that the two topics are identical, and a distance of 1 means that the two topics are completely different.
            </p>
            <p>
                Although it's still somewhat arbitrary, now I have a justification for a way to create clusters.
            </p>

            <h1 className="text-xl font-semibold">How are topics linked?</h1>


                <SyntaxHighlighter language="markdown" style={docco} showLineNumbers={false} customStyle={customStyles}>
                    {`linkage function:
    The linkage function to use. Default is: lambda x: sch.linkage(x, 'ward', optimal_ordering=True)`}
                </SyntaxHighlighter>

            <p>
                BERTopic uses scipy's <a target="_blank" className="underline" href="https://docs.scipy.org/doc/scipy/reference/generated/scipy.cluster.hierarchy.linkage.html">linkage</a> function to create the clusters.
            </p>
            <img src={img2} className="w-full"/>
            <p>
                Okay, I've got no idea what's going on here, you might though.
            </p>
            <p>
                At least we can see that the colors in the hierarchy visualisation are based on a distance threshold of 1.
            </p>

            <h1 className="text-2xl font-semibold">To the Code</h1>
            <p>
                Let's take a look at the code that creates the clusters.
            </p>

            <SyntaxHighlighter language="python" lineProps={
                (lineNumber) => {
                    let style = {};
                    if (lineNumber === 4) {
                        style = { fontWeight: 'bold' };
                    }
                    return { style };
                }
            } style={docco} wrapLines={true} showLineNumbers={true} customStyle={customStyles}>
                {`from bertopic import BERTopic
topic_model = BERTopic()
topics, _ = topic_model.fit_transform(doc_list)
hierarchical_topics = topic_model.hierarchical_topics(doc_list)`
                }
            </SyntaxHighlighter>
            </div>
            </>}
        />
    );
}

export default UnpackingClusters;