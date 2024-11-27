gsap.registerPlugin(ScrollTrigger);

// Smooth scrolling JUST for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const header = this.querySelector('header');
        const heroSection = document.querySelector('.hero');

        const heroObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
        }, { threshold: 0.1 });
    
        heroObserver.observe(heroSection);
    }
}

customElements.define('header-animation', Header);

class Hero extends HTMLElement {
    constructor() {
        super();
        this.heroContent = this.querySelector('.hero-content');
    }

    connectedCallback() {
        gsap.to(this, {
            scrollTrigger: {
              trigger: '.hero',
              start: 'top top',
              end: 'bottom 100px',
              pin: ".hero-content",
              scrub: true,
            },
            ease: 'power3.out'
        });
        gsap.to('.parallax-bg', {
            yPercent: 50,
            ease: 'none',
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });
        gsap.from(this.heroContent, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out'
        });
    }
}

customElements.define('hero-animation', Hero);

class Features extends HTMLElement {
    constructor() {
        super();
        this.swiper = null;
        window.addEventListener('resize', () => {
            this.#initSwiper();
        });
    }

    #destroySwiper() {
        if (this.swiper) {
            const swiper = new Swiper('.swiper', {
                slidesPerView: 1,
                spaceBetween: 30,
                centeredSlides: true,
                centeredSlidesBounds: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    768: {
                        slidesPerView: 3,
                        watchOverflow: true,
                        navigation: false,
                        pagination: false,
                        loop: false,
                    }
                },
                loop: true,
            });
            this.swiper.destroy(true, true);
            this.swiper = swiper;
        }
    }

    #initSwiper() {
        const swiper = new Swiper('.swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            centeredSlides: true,
            centeredSlidesBounds: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 3,
                    watchOverflow: true,
                    navigation: false,
                    pagination: false,
                    loop: false,
                }
            },
            loop: true,
        });
        this.swiper = swiper;
    }

    connectedCallback() {
        if (!this.swiper) {
            this.#initSwiper();
        } else {
            this.#destroySwiper();
        }
    }
}

customElements.define('features-animation', Features);

// Dark mode toggle
class DarkModeToggle extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const darkModeToggle = this.querySelector('.dark-mode-toggle');
        const body = document.body;

        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const isDarkMode = body.classList.contains('dark-mode');
            darkModeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        });
    }
}

customElements.define('dark-mode-toggle', DarkModeToggle);
