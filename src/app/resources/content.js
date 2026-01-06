import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Feynman',
    lastName:  'Zhou',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Product Manager, Community Builder',
    avatar:    '/images/avatar.jpg',
    location:  'US/Pacific',
    languages: ['English', 'Chinese']
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
    description: <>I occasionally write about product management, open source, and share insights on building developer communities and cloud-native technologies.</>
}

const social = [
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
    headline: <>Product Manager, Community Builder</>,
    subline: <>Hey, I&apos;m Feynman, a <InlineCode>Product Manager and Community Builder</InlineCode> passionate about AI, cloud-native technologies, community growth. <br/> I specialize in bridging product strategy, design, and community growth to deliver secure and user-friendly solutions. <br/> Beyond my work at Microsoft, I co-founded HiTalker, an AI-powered public speaking software, and have organized 20+ community events.<br/> </>,
    path: '/',
    image: '/images/og/home.jpg',
    featured: {
        href: '/work',
        label: 'Featured Work',
        title: 'Check out my latest projects'
    }
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    path: '/about',
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://calendly.com/feynmanzhou/meeting'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Feynman is a Product Manager and Community Builder with 8+ years of experience driving product growth through community building and open source adoption. Currently at Microsoft, he leads security features for Azure cloud services and has successfully scaled open source projects adopted by 80+ Fortune 500 companies. <br/> <br/> As a co-founder of Hitalker, he combines product leadership with entrepreneurial experience, building cross-functional teams and developing innovative solutions. ENFJ personality type who enjoys working in public and exploring emerging technologies. Feynman is based in Seattle, U.S.</>
    },
    work: {
        display: true,
        title: 'Work Experience',
        experiences: [
            {
                company: 'Microsoft',
                timeframe: 'May 2022 - Present',
                role: 'Product Manager 2',
                achievements: [
                    <>Led security features with engineering, design, and product teams to meet organizational OKRs, ensuring measurable business impact across Azure cloud services.</>,
                    <>Drove 3 open source projects and integrated with Azure Container Registry, adopted by 80+ Fortune 500 and 2,000+ customers.</>,
                    <>Built a growth loop that doubled monthly active customers in six months through strategic product iterations.</>,
                    <>Defined open-source community strategy, expanding contributors to 110+ and partners to 10+ organizations.</>
                ],
                images: []
            },
            {
                company: 'Hitalker (Public Speaking Evaluation Software)',
                timeframe: 'Aug 2023 - Present',
                role: 'Co-founder, Product Lead',
                achievements: [
                    <>Designed GUI prototype and launched website (hitalker.com), building a community of 200+ users from scratch.</>,
                    <>Initiated a public speaking training program, recruiting 40+ participants and generating ¥45K+ RMB revenue.</>,
                    <>Built and managed an 11-person virtual cross-functional team spanning engineering, design, product, and coaching functions.</>,
                    <>Developed end-to-end product strategy from ideation to market launch in the EdTech space.</>
                ],
                images: []
            },
            {
                company: 'QingCloud Cloud Computing Co., Ltd.',
                timeframe: 'Jun 2018 - Apr 2022',
                role: 'Senior Community Manager (Team Lead)',
                achievements: [
                    <>Defined and executed the community growth strategy for KubeSphere, scaling users and contributors from early adopters to a global open-source ecosystem.</>,
                    <>Grew KubeSphere&apos;s social media presence (LinkedIn, Twitter, YouTube, WeChat) from scratch to a leading voice in the cloud-native community with 20K+ followers.</>,
                    <>Established commercial partnerships with AWS, Azure, DigitalOcean, and Civo Cloud, onboarding KubeSphere to their marketplaces for global distribution.</>,
                    <>Built data-driven community health assessments and growth metrics, directly contributing to user acquisition and retention strategies.</>,
                    <>Supported internal teams in becoming better open source citizens and engaging with upstream projects based on community best practices.</>
                ],
                images: []
            },
            {
                company: 'Hewlett Packard Enterprise (HPE)',
                timeframe: 'Feb 2016 - Jun 2018',
                role: 'Software Engineer',
                achievements: [
                    <>Developed and maintained the Business Asset Management system, supporting General Mobile customer operations for enterprise clients.</>,
                    <>Built and optimized ETL pipelines for financial reconciliation, improving accuracy and reliability of customer data processing.</>,
                    <>Delivered monthly BI reports to enterprise customers, enabling data-driven financial insights and decision-making for 10+ Fortune Global 500 clients.</>,
                    <>Designed and implemented reporting dashboards with Power BI for in-depth data analytics and business intelligence.</>
                ],
                images: []
            }
        ]
    },
    studies: {
        display: true,
        title: 'Education',
        institutions: [
            {
                name: 'Hunan University of Arts & Science',
                timeframe: '2012 - 2016',
                description: <>Electronic Information Science & Technology | Bachelor&apos;s Degree</>
            },
            {
                name: 'University of International Business & Economics',
                timeframe: '2020',
                description: <>Economics Analytics | Professional Development</>
            }
        ]
    },
    technical: {
        display: true,
        title: 'Technical Skills & Expertise',
        skills: [
            {
                title: 'Product Management',
                description: <>Strategic product planning, roadmap development, cross-functional team leadership, user research, data-driven decision making, and growth strategy execution.</>,
                images: []
            },
            {
                title: 'Open Source & Community Building',
                description: <>Open source strategy, developer community growth, contributor engagement, partnership development, and ecosystem building for cloud-native projects.</>,
                images: []
            },
            {
                title: 'Cloud Technologies',
                description: <>Azure, Kubernetes, Docker, Container Registry, OCI, Linux, DevOps, Security, and cloud-native architecture patterns.</>,
                images: [
                    {
                        src: '/images/projects/project-01/my-skills.png',
                        alt: 'Cloud Technologies Stack',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                title: 'Design & Prototyping',
                description: <>UI/UX design, prototyping in Figma, user experience optimization, and design system development for technical products.</>,
                images: [
                    {
                        src: '/images/projects/project-01/notaryproject-landing-page.jpg',
                        alt: 'Design Portfolio',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/oras-landingpage.jpg',
                        alt: 'Landing Page Design',
                        width: 16,
                        height: 9
                    }
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about product management and cloud technologies',
    description: `Read what ${person.name} has been up to recently`,
    path: '/blog'
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`,
    path: '/work'
}

const gallery = {
    label: 'Gallery',
    title: 'My video gallery',
    description: `A video collection by ${person.name}`,
    path: '/gallery',
    videos: [
        { 
            videoId: 'no3Hg6u80YE',
            title: 'Video 1',
        },
        { 
            videoId: 'u4zinRUhtw8',
            title: 'Video 2',
        },
        { 
            videoId: '8yH3Os3Dsg0',
            title: 'Video 3',
        },
        { 
            videoId: 'k45kper34rE',
            title: 'Video 4',
        },
        { 
            videoId: '4hyA3yEB8Lo',
            title: 'Video 5',
        },
        { 
            videoId: 'JwvrOiVakLM',
            title: 'Video 6',
        }
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };
