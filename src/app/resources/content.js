import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Feynman',
    lastName:  'Zhou',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Product Builder, Content Creator',
    avatar:    '/images/avatar.jpg',
    location:  'Asia/Singapore',     // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Chinese']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/feynmanzhou/',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/feynmanzhou/',
    },
    {
        name: 'X',
        icon: 'x',
        link: 'https://www.twitter.com/feynmanzhou/',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:zpf0610@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Product Builder, Content Creator</>,
    subline: <>Hey, I'm Feynman, a <InlineCode>Product Builder</InlineCode> for technology companies and a <InlineCode>Content Creator</InlineCode> for human beings. <br/> I share knowledge and insights around my work and learning. My opinions are my own</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Feynman is a Product Builder and Content Creator with a passion for transforming complex challenges into simple, elegant product solutions. He has been working in open-source projects for over 6 years and built active communities for some popular projects. <br/> <br/> ENFJ. Feynman enjoys working in public and exploring new things. He relocated from Beijing, China to Seattle, U.S. in 2024. </>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Microsoft',
                timeframe: '2022.5 - Present',
                role: 'Product Manager',
                achievements: [
                    <>Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user engagement and 30% faster load times.</>,
                    <>Spearheaded the integration of AI tools into design workflows, enabling designers to iterate 50% faster.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/notation-cli-screenshot.png',
                        alt: 'Notation',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'QingCloud',
                timeframe: '2018 - 2022',
                role: 'Senior Community Manager (Team Lead)',
                achievements: [
                    <> Build community and awareness through public channels of influence including blogs, community events, meetings, and contributions to some open source projects.</>,
                    <> Foster a data-driven community. Focus on the health assessments, user growth, and ecosystem scale.</>,
                    <> Build the partnership with cloud providers (AWS, Azure, DigitalOcean, etc) and vendors.</>,
                    <> Engage with community users, contributors, and partners, gathering feedback to the product teams on how to improve engagement.</>,
                    <> Support internal teams to be better open source citizens and engage with the upstream open source projects, based on both internal and public community guidelines.</>,
                ],
                images: [ ]
            },
            {
                company: 'Hewlett Packard Enterprise (HPE)',
                timeframe: '2016 - 2018',
                role: 'Software Engineer (BI)',
                achievements: [
                    <>Help the financial team in data ETL (extract transform and load) for financial reconciliation, and export structured BI data to the
                    customers.</>,
                    <>Served 10+ Fortune Global 500 customers and deliver reporting dashboard with Power BI for in-depth data analytics</>
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Education',
        institutions: [
            {
                name: 'Hunan University of Arts & Science',
                timeframe: '2012 - 2016',
                description: <>Electronic Information Science & Technology | Bachelor degree</>,
            },
            {
                name: 'University of International Business & Economics',
                timeframe: '2020',
                description: <>Economics analytics | Part-time </>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'UI/UX Design',
                description: <>Able to create prototype in Figma with various UI library.</>,
                images: [
                    {
                        src: '/images/projects/project-01/notaryproject-landing-page.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/oras-landingpage.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Cloud Computing Technologies',
                description: <>Azure, Kubernetes, Docker, OCI, Linux, DevOps, Security</>,
                images: [
                    {
                        src: '/images/projects/project-01/my-skills.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about product management and cloud technologies',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };