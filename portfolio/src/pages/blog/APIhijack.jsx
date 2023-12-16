import Template from "../Template"

const APIhijack = () => {
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
                        title: 'API hijacking for efficient web scraping',
                        link: '/blog/api-hijacking'
                    }
                ]
            }
            header='API hijacking for efficient web scraping'
            subheader=''
            subheader2="Selenium is slow. Let's make data collection faster."
            contentlist={[
                
            ]}
            extracontent={<>
                <h1 className="mt-6 text-xl">Coming soon</h1>
            </>}

        />
    );
}

export default APIhijack;