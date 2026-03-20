document.addEventListener('DOMContentLoaded', () => {

    const header = document.getElementById('header');

    const triggerHeight = 150;


    window.addEventListener('scroll', () => {

        if (window.scrollY > triggerHeight) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }

    });
});

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const closeMenu = document.getElementById("closeMenu");

function openMenu() {
    navMenu.classList.add("active");
    closeMenu.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeNav() {
    navMenu.classList.remove("active");
    closeMenu.classList.remove("active");
    document.body.style.overflow = "";
}

hamburger.addEventListener("click", openMenu);
closeMenu.addEventListener("click", closeNav);

document.querySelectorAll(".nav-items a").forEach(link => {
    link.addEventListener("click", closeNav);
});

document.addEventListener('DOMContentLoaded', () => {

    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({
        duration: 1.2,
        smoothWheel: true,
        touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    const sections = document.querySelectorAll('.reveal-section');

    sections.forEach(section => {

        const images = section.querySelectorAll('.reveal-image');

        gsap.fromTo(images,
            { clipPath: 'inset(0% 0% 100% 0%)' },
            {
                clipPath: 'inset(0% 0% 0% 0%)',
                duration: 1.5,
                ease: 'power3.out',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                }
            }
        );

        const leftImage = section.querySelectorAll('.reveal-image1');

        gsap.fromTo(leftImage,
            { clipPath: 'inset(0% 100% 0% 0%)' },
            {
                clipPath: 'inset(0% 0% 0% 0%)',
                duration: 1.5,
                ease: 'power3.out',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                }
            }
        );
    });

    ScrollTrigger.refresh();
});
document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);
    const sectionHeaders = document.querySelectorAll('.section-header');

    sectionHeaders.forEach(header => {
        const chip = header.querySelector('.chips');
        const head = header.querySelector('.sec-head');
        const desc = header.querySelector('.sec-desc');

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: header,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });

        if (chip) {
            tl.fromTo(chip,
                { autoAlpha: 0, scale: 0.8, y: 15 },
                { autoAlpha: 1, scale: 1, y: 0, duration: 0.5, ease: 'back.out(1.5)' }
            );
        }

        if (head) {
            tl.fromTo(head,
                { autoAlpha: 0, y: 40, skewY: 4 },
                { autoAlpha: 1, y: 0, skewY: 0, duration: 0.8, ease: 'power4.out' },
                "-=0.2"
            );
        }

        if (desc) {
            tl.fromTo(desc,
                {
                    autoAlpha: 0,
                    y: 15,
                    filter: 'blur(10px)'
                },
                {
                    autoAlpha: 1,
                    y: 0,
                    filter: 'blur(0px)',
                    duration: 1.2,
                    ease: 'power3.out'
                },
                "-=0.4"
            );
        }
    });

});