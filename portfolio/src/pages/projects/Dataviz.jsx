import Template from "../Template";

const Dataviz = () => {
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
                    title: 'Data Visualizations',
                    link: '/projects/dataviz'
                }
            ]
        }
        header='Data Visualizations'
        subheader=''
        subheader2={<>The city of Amsterdam is a leader in open research. I found some of the data particularly interesting, so I decided to learn data visualisation to share it with the world:</>}

        contentlist={[

        ]}
        extracontent={
            <>
            Coming soon!
            </>
        }
        />
    );
}

export default Dataviz;