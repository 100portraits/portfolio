import Template from "../Template"

const WhyCSSci = () => {
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
                        title: 'Why Computational Social Science? Why Amsterdam?',
                        link: '/blog/why-computational-social-science'
                    }
                ]
            }
            header='Why Computational Social Science? Why Amsterdam?'
            subheader=''
            subheader2="The biggest decision I've made and why it was the right one."
            contentlist={[
                
            ]}
            extracontent={<>
                <h1 className="mt-6 text-xl">Coming soon</h1>
            </>}

        />
    );
}

export default WhyCSSci;