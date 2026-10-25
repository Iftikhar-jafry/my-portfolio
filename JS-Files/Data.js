const Helper=(function(){

    function AboutData()
    {
        // const about1 = "<p>I'm a <strong>passionate tech innovator</strong> with expertise in building cutting-edge digital solutions that merge creativity with technical excellence. With over 5 years of experience in full-stack development, I specialize in creating intelligent applications that leverage the power of AI to solve complex problems.</p><p>My journey in technology began with traditional web development, but I quickly became fascinated with emerging technologies like <strong>machine learning</strong> and <strong>artificial intelligence</strong>. Today, I combine deep technical knowledge with a keen eye for design to create seamless, intuitive, and intelligent digital experiences.</p><p>I believe in continuous learning and staying ahead of technology t";
        const about = "<p>I'm a <strong>passionate tech innovator</strong> with expertise in building data-driven digital solutions that combine creativity with technical excellence. I specialize in <strong>Data Science, Data Engineering, Data Scraping, Machine Learning, and Artificial Intelligence</strong> to solve complex problems and transform data into meaningful insights.</p><p>My journey in technology began with web development and Python programming, but I quickly became fascinated with data and emerging technologies like <strong>machine learning</strong> and <strong>artificial intelligence</strong>. Today, I focus on collecting, processing, analyzing, and transforming data while developing intelligent applications and data-driven solutions.</p><p>I believe in continuous learning and staying ahead of technology by exploring new tools, techniques, and technologies in <strong>Data Science, Data Engineering, AI, Machine Learning, and Data Scraping</strong>.</p>";
        return about
    }

    function SkillData()
    {
        const skills = [
            { name: "Machine Learning", level: "70%" },
            { name: "Deep Learning", level: "60%" },
            { name: "Data Science & Analytics", level: "80%"},
            { name: "Web Scraping", level: "85%"},
            {name: "Application Development", level: "75%"},
        ];
        return skills;
    }

    // Projects Data
    function ProjectData()
    {
        const projects = [
        {
            title: "Daily Expense Calculator",
            Url: "Asset\\Daily_Expense_tracker.webm",
            type:"VIDEO",
            link: "https://github.com/Iftikhar-jafry/DailyExpenseCalcOffline.git",
            technologies: [
                "HTML",
                "CSS",
                "JavaScript"
            ]
        },
        {
            title: "Mobile Data Scraping from Web",
            Url: "Asset/pwebscrap.JPG",
            type:"IMAGE",
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
            Url: "Asset/pwebscrapselenium.JPG",
            type:"IMAGE",
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
            Url: "Asset/prandompassword.JPG",
            type:"IMAGE",
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
            Url: "Asset/ploan.JPG",
            type:"IMAGE",
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
            Url: "Asset/pmyportfolio.JPG",
            type:"IMAGE",
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
            Url: "Asset/Essay_Writing.JPG",
            type:"IMAGE",
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
            Url: "Asset/DailyWritingView.JPG",
            type:"IMAGE",
            link: "https://github.com/Iftikhar-jafry/Daily_Essay_Writing_Web_App.git",
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "Local Storage",
            ]
        },
        {
            title: "Tech Vault Web App",
            Url: "Asset/tech_vault.JPG",
            type:"IMAGE",
            link: "https://github.com/Iftikhar-jafry/Tech_Vault.git",
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "SQLite",
                "Flask",
                "SQLAlchemy",
                "Python",
            ]
        },
        {
            title: "SMS Spam Classifier, Streamlit Dashboard",
            Url: "Asset/sms_spam.JPG",
            type:"IMAGE",
            link: "https://github.com/Iftikhar-jafry/Sms_Email_Spam_Classifier.git",
            technologies: [
                "Streamlit",
                "Pandas",
                "Scikit-learn",
                "Python",
                "matplotlib",
                "seaborn",
                "wordcloud",
            ]
        }
        , 
        {
            title: "UnitedState SuperStore Data Analysis, Streamlit Dashboard",
            Url: "Asset\\super_store.webm",
            type:"VIDEO",
            link: "https://unitedstate-superstore-dataanalysis-duduma6cckcxyv9vnsmtzd.streamlit.app/",
            technologies: [
                "Streamlit",
                "Pandas",
                "Python",
                "matplotlib",
                "seaborn",
            ]
        }
    ];
        return projects;
    }
    // Projects Data End

    // Services Data Start
    // function ServiceData()
    // {
    //     const servicesData = [
    //     {
    //         title: "Web Development",
    //         description: "Custom web applications built with modern technologies and best practices.",
    //         features: [
    //             "Responsive Design",
    //             "Modern Frameworks",
    //             "Performance Optimization"
    //         ],
    //         icon: "fas fa-code",
    //         isAI: false
    //     },
    //     {
    //         title: "AI Solutions",
    //         description: "Harnessing the power of AI to drive innovation and efficiency.",
    //         features: [
    //             "Machine Learning",
    //             "Deep Learning",
    //             "Natural Language Processing"
    //         ],
    //         icon: "fas fa-brain",
    //         isAI: true
    //     },
    //      {
    //         title: "Application Development in Flutter",
    //         description: "Developing the application in flutter.",
    //         features: [
    //             "VS Code",
    //             "Android Studio",
    //             "Dart  Language",
    //             "API Integration",
    //             "State Management",
    //             "UI/UX Design",
    //             "Cross-Platform Development",
    //             "Performance Optimization",
    //             "Testing & Debugging",
    //             "Deployment",
    //         ],
    //         icon: "fas fa-brain",
    //         isAI: true
    //     },
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
    // ];

    //     return servicesData;

    // }


// social Links Data Start
    function socialLinksData()
    {
        const socialLinks = [
        { href: "https://github.com/Iftikhar-jafry/", iconClass: "fab fa-github" },
        { href: "https://www.linkedin.com/in/iftikhar-jafry/", iconClass: "fab fa-linkedin" },
        ];
        return socialLinks
    }

    return {
        AboutData:AboutData,
        SkillData:SkillData,
        ProjectData:ProjectData,
        // ServiceData:ServiceData,
        socialLinksData:socialLinksData
    }
})();
// Social Links Data End


export default Helper;
