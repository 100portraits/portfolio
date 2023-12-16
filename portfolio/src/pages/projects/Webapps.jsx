import Template from "../Template"

const Webapps = () => {
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
                    title: 'Web Apps',
                    link: '/projects/webapps'
                }
            ]
        }
        header='Web Apps'
        subheader=''
        subheader2={<>I like to make things that people can use. I've been learning web development with ReactJS, Svelte, Python Flask and various other technologies in Fall 2023.</>}

        contentlist={[
            {
                title: 'Linker',
                link: 'https://linker.sahir.nl',
                linkExternal: true,
                description: '[linker.sahir.nl]'
            },
            {
                title: 'Hierarchical Notes',
                link: 'https://notes.sahir.nl',
                linkExternal: true,

                description: '[notes.sahir.nl]'
            }
        ]}

        />
    );
}

export default Webapps;