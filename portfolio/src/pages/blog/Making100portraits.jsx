import Template from "../Template"

const Making100portraits = () => {
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
                        title: 'Making 100portraits',
                        link: '/blog/making-of-100portraits'
                    }
                ]
            }
            header='Making 100portraits'
            subheader=''
            subheader2='The conceptual and technical story of my passion project.'
            contentlist={[
                
            ]}
            extracontent={<>
                <h1 className="mt-6 text-xl">Coming soon</h1>
            </>}

        />
    );
}

export default Making100portraits;