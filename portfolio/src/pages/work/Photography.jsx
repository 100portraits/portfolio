import Template from "../Template"

const Photography = () => {
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
                        title: 'Photography',
                        link: '/work/photography'
                    }
                ]
            }
            header='Photography'
            subheader=''
            subheader2={<>I take portrait photos at the University of Amsterdam (on a freelance basis) using natural lighting and a small mirrorless camera with a 35mm fixed-length lens. Here is some of my work.</>}
            
            contentlist={[
                
            ]}
            extracontent={<>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <img src="https://placehold.co/400x500/AAA/31343C" className="w-full"/>
                    <img src="https://placehold.co/400x500/AAA/31343C" className="w-full"/>
                    <img src="https://placehold.co/400x500/AAA/31343C" className="w-full"/>
                    <img src="https://placehold.co/400x500/AAA/31343C" className="w-full"/>
                    <img src="https://placehold.co/400x500/AAA/31343C" className="w-full"/>
                    <img src="https://placehold.co/400x500/AAA/31343C" className="w-full"/>
                </div>
            </>}
        />
    );
}

export default Photography;