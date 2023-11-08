import Template from "../Template"

const UnpackingClusters = () => {
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
                <h1 className="mt-6 text-xl">Coming soon</h1>
            </>}
        />
    );
}

export default UnpackingClusters;