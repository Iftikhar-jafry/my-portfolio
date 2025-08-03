const Helper=(function(){

    function AboutData()
    {
        const about = "<p>I'm a <strong>passionate tech innovator</strong> with expertise in building cutting-edge digital solutions that merge creativity with technical excellence. With over 5 years of experience in full-stack development, I specialize in creating intelligent applications that leverage the power of AI to solve complex problems.</p><p>My journey in technology began with traditional web development, but I quickly became fascinated with emerging technologies like <strong>machine learning</strong> and <strong>artificial intelligence</strong>. Today, I combine deep technical knowledge with a keen eye for design to create seamless, intuitive, and intelligent digital experiences.</p><p>I believe in continuous learning and staying ahead of technology t";
        return about
    }

    function SkillData()
    {
        const skills = [
            { name: "Machine Learning", level: "95%" },
            { name: "Deep Learning", level: "90%" },
            { name: "Data Science & Analytics", level: "80%"},
            { name: "Web Scraping", level: "90%"},
            { name: "Iftikhar hussain", level: "90%"}
        ];
        return skills;
    }

    // Projects Data
    function ProjectData()
    {
        const projects = [
        {
            title: "Dialy Expense Management (Offline)",
            imageUrl: "Asset/pdaily.jpg",
            link: "https://github.com/Iftikhar-jafry/DailyExpenseCalcOffline.git",
            technologies: [
                "HTML",
                "CSS",
                "JavaScript"
            ]
        },
        {
            title: "Mobile Data Scraping from Web",
            imageUrl: "Asset/pwebscrap.jpg",
            link: "https://github.com/Iftikhar-jafry/FirstWebScraping.git",
            technologies: [
                "Python",
                "Jupyter Notebook",
                "Beautiful Soup",
                "Requests",
                "Pandas"
            ]
        },
        {
            title: "Mobile Data Scraping through Selenium",
            imageUrl: "Asset/pwebscrapselenium.JPG",
            link: "https://github.com/Iftikhar-jafry/Mobile-Info-Website-data-Extraction.git",
            technologies: [
                "Python",
                "Jupyter Notebook",
                "Selenium",
                "Requests",
                "Pandas"
            ]
        },
        {
            title: "Random Password Generator",
            imageUrl: "Asset/prandompassword.JPG",
            link: "https://github.com/Iftikhar-jafry/generateRandomPassword.git",
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "Tailwind CSS",
            ]
        }
        ,
        {
            title: "Loan Management Web App",
            imageUrl: "Asset/ploan.JPG",
            link: "https://github.com/Iftikhar-jafry/Loan-Management.git",
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "Firebase",
                "Github Hosting"
            ]
        }
        ,
        {
            title: "My Portfolio Website",
            imageUrl: "Asset/pmyportfolio.JPG",
            link: "https://github.com/Iftikhar-jafry/my-portfolio.git",
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "Github Hosting",
            ]
        }
        ,
        {
            title: "Writing Essays Web App",
            imageUrl: "Asset\Essay_Writing.JPG",
            link: "https://github.com/Iftikhar-jafry/Essay_Writing_WebApp.git",
            technologies: [
                "HTML",
                "Bootstrap",
                "Jinja Templates",
                "Flask",
                "Python",
                "SQLAlchemy",
            ]
        }
        ,
        {
            title: "Daily_Essay_Writing_Web_App",
            imageUrl: "Asset\DailyWritingView.JPG",
            link: "https://github.com/Iftikhar-jafry/Daily_Essay_Writing_Web_App.git",
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "Local Storage",
            ]
        }
    ];
        return projects;
    }
    // Projects Data End

    // Services Data Start
    function ServiceData()
    {
        const servicesData = [
        {
            title: "Web Development",
            description: "Custom web applications built with modern technologies and best practices.",
            features: [
                "Responsive Design",
                "Modern Frameworks",
                "Performance Optimization"
            ],
            icon: "fas fa-code",
            isAI: false
        },
        {
            title: "AI Solutions",
            description: "Harnessing the power of AI to drive innovation and efficiency.",
            features: [
                "Machine Learning",
                "Deep Learning",
                "Natural Language Processing"
            ],
            icon: "fas fa-brain",
            isAI: true
        },
        // {
        //     title: "UI/UX Design",
        //     description: "Creating intuitive and engaging user experiences.",
        //     features: [
        //         "User Research",
        //         "Wireframing & Prototyping",
        //         "Visual Design"
        //     ],
        //     icon: "fas fa-palette",
        //     isAI: false
        // }
    ];

        return servicesData;

    }

    function socialLinksData()
    {
        const socialLinks = [
        { href: "#", iconClass: "fab fa-github" },
        { href: "#", iconClass: "fab fa-linkedin" },
        { href: "#", iconClass: "fab fa-twitter" },
        { href: "#", iconClass: "fab fa-instagram" }
        ];
        return socialLinks
    }

    return {
        AboutData:AboutData,
        SkillData:SkillData,
        ProjectData:ProjectData,
        ServiceData:ServiceData,
        socialLinksData:socialLinksData
    }
})();



export default Helper;