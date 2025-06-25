const animateSections = () => {
            const sections = document.querySelectorAll('.section');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('section--active');
                        
                        // Animeer skills cards met vertraging
                        if (entry.target.id === 'skills') {
                            const cards = entry.target.querySelectorAll('.skills__card');
                            cards.forEach((card, index) => {
                                setTimeout(() => {
                                    card.classList.add('skills__card--active');
                                }, index * 200);
                            });
                        }
                    }
                });
            }, {
                threshold: 0.1
            });

            sections.forEach(section => {
                observer.observe(section);
            });
        };

        // Animation on page load for hero section
        const animateHero = () => {
            const homeSection = document.querySelector('.home');
            const title = homeSection.querySelector('.section__title');
            const description = homeSection.querySelector('.section__description');
            
            setTimeout(() => {
                homeSection.classList.add('section--active');
                title.classList.add('slide-up');
            }, 100);
            
            setTimeout(() => {
                description.classList.add('slide-up');
            }, 300);
        };

        // Smooth scrolling for navigation
        const setupSmoothScrolling = () => {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
        };

        // Initialize all functions when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            animateSections();
            animateHero();
            setupSmoothScrolling();
        });