const Helper=(function(){
    function SkillData()
    {
        const skills = [
            { name: "Machine Learning", level: "95%" },
            { name: "Deep Learning", level: "90%" },
            { name: "UI/UX Design", level: "85%" },
            { name: "Data Science & Analytics", level: "80%"},
            { name: "Web Scraping", level: "90%"}
        ];
        return skills;
    }

    // Projects Data
    function ProjectData()
    {
        const projects = [
        {
            image: "Asset/2.jpeg",
            title: "AI-Powered E-Commerce Platform",
            link: "https://github.com/username/ai-ecommerce",
            description: "sinesses.",
            technologies: ["React", "Node.js", "TensorFlow", "MongoDB", "NLP"]
        },
        {
            image: "Asset/2.jpeg",
            title: "Intelligent Task Management App",
            link: "https://github.com/username/smart-tasks",
            description: "A achine learning to ada0%.",
            technologies: ["Vue.js", "Express", "PyTorch", "PostgreSQL", "Machine Learning"]
        },
        {
            image: "project3.jpg",
            title: "AI Content Studio",
            link: "https://github.com/username/ai-content-studio",
            description: "A sophisticated content generation platform that leverages advanced language models to create high-quality, SEO-optimized articles, social media posts, and marketing copy. The tool includes sentiment analysis, readability scoring, and automatic content adaptation for different audience demographics.",
            technologies: ["Next.js", "FastAPI", "Transformers", "Redis", "GPT Models"]
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
            icon: "fa-code",
            title: "Data Analyst",
            description: "Custom web applications built with modern technologies and best practices.",
            features: ["Responsive Design", "Modern Frameworks", "Performance Optimization"],
            ai: false,
        },
        {
            icon: "fa-brain",
            title: "AI Integration",
            description: "Enhance your applications with intelligent AI capabilities.",
            features: ["Predictive Analytics", "Natural Language Processing", "Recommendation Systems"],
            ai: true,
        },
        {
            icon: "fa-paint-brush",
            title: "UI/UX Design",
            description: "Beautiful and intuitive user interfaces that enhance user experience.",
            features: ["User Research", "Wireframing", "Prototyping"],
            ai: false,
        },
        {
            icon: "fa-robot",
            title: "Machine Learning Solutions",
            description: "Custom machine learning models to solve your business challenges.",
            features: ["Data Mining & Analysis", "Computer Vision", "Automated Decision Systems"],
            ai: true,
        },
        {
            icon: "fa-mobile-alt",
            title: "Mobile Development",
            description: "Cross-platform mobile applications that work seamlessly on all devices.",
            features: ["Native Apps", "Cross-Platform", "App Store Optimization"],
            ai: false,
        },
        {
            icon: "fa-chart-line",
            title: "Intelligent Analytics",
            description: "Transform your data into actionable business intelligence.",
            features: ["Predictive Modeling", "Customer Insights", "Real-time Data Visualization"],
            ai: true,
        },
        {
            icon: "fa-chart-line",
            title: "Intelligent Analytics",
            description: "Transform your data into actionable business intelligence.",
            features: ["Predictive Modeling", "Customer Insights", "Real-time Data Visualization"],
            ai: true,
        },
        {
            icon: "fa-chart-line",
            title: "Intelligent Analytics",
            description: "Transform your data into actionable business intelligence.",
            features: ["Predictive Modeling", "Customer Insights", "Real-time Data Visualization"],
            ai: true,
        }
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
        SkillData:SkillData,
        ProjectData:ProjectData,
        ServiceData:ServiceData,
        socialLinksData:socialLinksData
    }
})();



export default Helper;