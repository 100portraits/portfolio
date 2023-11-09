import Template from "../Template"
import {CodeBlock} from 'react-code-blocks'
const UnpackingClusters = () => {
    let codeblock1 =`# temperature

import matplotlib.pyplot as plt
plt.plot(temperature)`
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
                <CodeBlock text={codeblock1} language="python"/>
            </>}
        />
    );
}

export default UnpackingClusters;