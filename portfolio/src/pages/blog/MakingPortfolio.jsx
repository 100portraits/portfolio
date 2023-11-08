import Template from "../Template"

const MakingPortfolio = () => {
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
                        title: 'Making the portfolio',
                        link: '/blog/making-of-portfolio'
                    }
                ]
            }

            header='Making the portfolio'
            subheader=''
            subheader2='The philosophy and process behind the development of this website.'
            contentlist={[
                
            ]}
            extracontent={<>
                <h1 className="mt-6 text-xl">Coming soon</h1>
            </>}

        />
    );
}

export default MakingPortfolio;