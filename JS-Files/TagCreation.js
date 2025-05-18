import Helper from "./Data.js";
    console.log(Helper.ServiceData)

// SkillBar Start
    // console.log(Helper.SkillData)
    const skills=Helper.SkillData();
    const skillBarsContainer = document.querySelector('.skill-bars');

    skills.forEach(skill => {
        // Create .skill-bar
        const skillBar = document.createElement('div');
        skillBar.classList.add('skill-bar');

        // Create .skill-info
        const skillInfo = document.createElement('div');
        skillInfo.classList.add('skill-info');

        const title = document.createElement('h4');
        title.textContent = skill.name;

        const span = document.createElement('span');
        span.textContent = skill.level;

        skillInfo.appendChild(title);
        skillInfo.appendChild(span);

        // Create .skill-progress-bg
        const progressBg = document.createElement('div');
        progressBg.classList.add('skill-progress-bg');

        const progress = document.createElement('div');
        progress.classList.add('skill-progress');
        progress.style.width = skill.level;

        progressBg.appendChild(progress);

        // Append everything
        skillBar.appendChild(skillInfo);
        skillBar.appendChild(progressBg);
        skillBarsContainer.appendChild(skillBar);
    });

// End of Skill Bar


// Start of Project Section
    const projects=Helper.ProjectData();
    
    const projectsContainer = document.querySelector("#projects-grid");

    projects.forEach(project => {
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = project.image;
        img.alt = project.title;

        const title = document.createElement("h3");
        const link = document.createElement("a");
        link.href = project.link;
        link.target = "_blank";
        link.textContent = project.title;
        title.appendChild(link);

        const tech_tool = document.createElement("h4");
        tech_tool.className="tech-tool"
        tech_tool.textContent = "Techs and Tools";

        const techContainer = document.createElement("div");
        techContainer.classList.add("technologies");

        project.technologies.forEach(tech => {
            const techSpan = document.createElement("span");
            techSpan.classList.add("technology");
            if (
                tech.toLowerCase().includes("ai") ||
                tech.toLowerCase().includes("ml") ||
                tech.toLowerCase().includes("gpt") ||
                tech.toLowerCase().includes("nlp") ||
                tech.toLowerCase().includes("transformers") ||
                tech.toLowerCase().includes("pytorch") ||
                tech.toLowerCase().includes("tensorflow")
            ) {
                techSpan.classList.add("ai-tech");
            }
            techSpan.textContent = tech;
            techContainer.appendChild(techSpan);
        });

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(tech_tool);
        card.appendChild(techContainer);

        projectsContainer.appendChild(card);
    });
// End Project Data

// Start Service Data

    const services=Helper.ServiceData()

    const servicesContainer=document.querySelector('#services-grid');

    services.forEach(service=>{
        const card=document.createElement('div');
        const icon=document.createElement('div');
        const anchor=document.createElement('a');
        const ul=document.createElement('ul');
        anchor.textContent="Get Started"
        anchor.href="#contact";
        if(service.ai==true)
        {
            card.classList.add("service-card", "ai-service")
            icon.classList.add("service-icon", "ai-icon");
            ul.classList.add("service-features","ai-features")
            anchor.classList.add('service-btn','ai-btn');
            
        }
        else
        {
            card.classList.add('service-card');
            icon.classList.add('service-icon');
            ul.classList.add("service-features");
            anchor.classList.add('service-btn');
        }
    
        const icon_i=document.createElement('i');
        

        icon_i.classList.add('fa',service.icon)



        const h3=document.createElement('h3');
        h3.textContent=service.title;
        console.log(service.title)
        const para=document.createElement('p');
        para.textContent=service.description;

        service.features.forEach(feature=>{
            const li=document.createElement('li');
            const i=document.createElement('i');
            i.classList.add("fas","fa-check");
            li.appendChild(i);
            li.appendChild(document.createTextNode(""+feature));
            ul.appendChild(li);
        });

        icon.appendChild(icon_i);
        card.appendChild(h3);
        card.appendChild(para);
        card.appendChild(ul);
        card.appendChild(anchor);

        servicesContainer.appendChild(card);


    });
// End Services

// Start Contact Form

    const form = document.querySelector('.contact-form');

    // --- Create Label ---
    const serviceLabel = document.createElement('label');
    serviceLabel.setAttribute('for', 'service');
    serviceLabel.textContent = 'Select a Service';

    // --- Create Select ---
    const serviceSelect = document.createElement('select');
    serviceSelect.setAttribute('id', 'service');
    serviceSelect.setAttribute('name', 'service');
    serviceSelect.required = true;
    const optionDisable = document.createElement('option');
    optionDisable.disabled=true;
    optionDisable.selected=true;
    optionDisable.textContent="Select Service";
    serviceSelect.appendChild(optionDisable);
    // --- Create Options ---
    services.forEach(service => {
    const option = document.createElement('option');
    option.value = service.title;
    option.textContent = service.title;
    serviceSelect.appendChild(option);
    });

    // --- Append to Form ---
    form.insertBefore(serviceLabel, form.querySelector('textarea'));
    form.insertBefore(serviceSelect, form.querySelector('textarea'));
// End Contact Form

// Start Select service in Contact Form through sevices section
document.querySelectorAll('.service-card a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        // Get the related h3 text (service name)
        const serviceName = this.closest('.service-card').querySelector('h3').textContent;

        // Scroll to the contact section
        const contactSection = document.getElementById('contact');
        contactSection.scrollIntoView({ behavior: 'smooth' });

        // Select the correct option in the dropdown
        const select = document.getElementById('service');
        const options = Array.from(select.options);
        const matched = options.find(opt => opt.textContent === serviceName);

        if (matched) {
            matched.selected = true;
        }
    });
});
// End Select service in Contact Form through sevices section


// Start of Social links Creation

    // Create container div
    const socialLinksDiv = document.createElement('div');
    socialLinksDiv.classList.add('social-links');

    // Loop through the data to create links and icons
    const socialLinks=Helper.socialLinksData();
    socialLinks.forEach(link => {
    const a = document.createElement('a');
    a.href = link.href;

    const i = document.createElement('i');
    link.iconClass.split(' ').forEach(cls => i.classList.add(cls));

    a.appendChild(i);
    socialLinksDiv.appendChild(a);
    });

    // Append to the footer (make sure footer already exists in DOM)
    document.querySelector('footer').appendChild(socialLinksDiv);

// End of socialLinks



//   document.querySelector('.contact-form').addEventListener('submit', function (e) {
//     e.preventDefault(); // prevent default form submission

//     const name = document.querySelector('input[placeholder="Your Name"]').value.trim();
//     const email = document.querySelector('input[placeholder="Your Email"]').value.trim();
//     const message = document.querySelector('textarea').value.trim();

//     const phoneNumber = '923449114907'; // Replace with your WhatsApp number (no +, just country code and number)
    
//     const text = `Hello! I'm ${name},\nEmail: ${email}\nMessage: ${message}`;
//     const encodedText = encodeURIComponent(text);
    
//     const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedText}`;

//     window.open(whatsappURL, '_blank');
//   });



  document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent actual form submission

    const name = document.querySelector('input[placeholder="Your Name"]').value.trim();
    const email = document.querySelector('input[placeholder="Your Email"]').value.trim();
    const service = document.querySelector('#service').value.trim();
    const message = document.querySelector('textarea').value.trim();

    const phoneNumber = '923449114907'; // Your WhatsApp number

    const text = `Hello! I'm ${name}\nEmail: ${email}\nService: ${service}\nMessage: ${message}`;
    const encodedText = encodeURIComponent(text);

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    window.open(whatsappURL, '_blank');
  });
