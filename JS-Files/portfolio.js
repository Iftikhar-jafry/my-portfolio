 // Intersection Observer for section animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

        // Navbar hide/show on scroll
        // let lastScroll = 0;
        // const nav = document.querySelector('nav');

        // window.addEventListener('scroll', () => {
        //     const currentScroll = window.pageYOffset;
            
        //     if (currentScroll <= 0) {
        //         nav.classList.remove('hide');
        //         return;
        //     }
            
        //     if (currentScroll > lastScroll && !nav.classList.contains('hide')) {
        //         nav.classList.add('hide');
        //     } else if (currentScroll < lastScroll && nav.classList.contains('hide')) {
        //         nav.classList.remove('hide');
        //     }
            
        //     lastScroll = currentScroll;
        // });

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll(".nav-link");

        window.addEventListener("scroll", () => {
            let scrollPosition = window.pageYOffset + window.innerHeight / 2;

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    const currentId = section.getAttribute("id");

                    navLinks.forEach((link) => {
                        link.classList.remove("active");
                        if (link.getAttribute("href") === `#${currentId}`) {
                            link.classList.add("active");
                        }
                    });
                }
            });
        });


        // Animate skill bars when they come into view
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.parentElement.querySelectorAll('.skill-progress').forEach(progress => {
                        const width = progress.parentElement.previousElementSibling.querySelector('span').textContent;
                        progress.style.width = width;
                    });
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.skill-bars').forEach(skillBar => {
            skillObserver.observe(skillBar);
        }); 