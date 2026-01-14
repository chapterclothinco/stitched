// ================================
// Stitched - Premium Custom Apparel
// ================================

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimations();
    createParticles();
    initTypingEffect();
});

// ================================
// Floating Particles
// ================================
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Random size
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';

        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';

        // Random animation duration
        particle.style.animationDuration = (Math.random() * 20 + 10) + 's';
        particle.style.animationDelay = (Math.random() * 10) + 's';

        container.appendChild(particle);
    }
}

// ================================
// Navbar Scroll Effect
// ================================
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

// ================================
// Mobile Menu
// ================================
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (!menuBtn || !mobileMenu) return;

    const mobileLinks = mobileMenu.querySelectorAll('a');

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close on escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            menuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ================================
// Smooth Scroll
// ================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (!target) return;

            e.preventDefault();

            const offset = 100;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

            smoothScrollTo(targetPosition, 1200);
        });
    });
}

function smoothScrollTo(targetPosition, duration) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        // Ease out cubic for smooth deceleration
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);

        window.scrollTo(0, startPosition + distance * easeOutCubic);

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}

// ================================
// Scroll Animations
// ================================
function initScrollAnimations() {
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        /* Base states for animations */
        .animate-fade-up {
            opacity: 0;
            transform: translateY(60px);
            transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                        transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animate-fade-left {
            opacity: 0;
            transform: translateX(-60px);
            transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                        transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animate-fade-right {
            opacity: 0;
            transform: translateX(60px);
            transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                        transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animate-scale {
            opacity: 0;
            transform: scale(0.9);
            transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                        transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animate-blur {
            opacity: 0;
            filter: blur(10px);
            transform: translateY(30px);
            transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                        filter 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                        transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Visible states */
        .animate-fade-up.visible,
        .animate-fade-left.visible,
        .animate-fade-right.visible {
            opacity: 1;
            transform: translate(0);
        }

        .animate-scale.visible {
            opacity: 1;
            transform: scale(1);
        }

        .animate-blur.visible {
            opacity: 1;
            filter: blur(0);
            transform: translateY(0);
        }

        /* Counter animation */
        .animate-counter {
            display: inline-block;
        }

        /* Parallax sections */
        .parallax-section {
            will-change: transform;
        }

        /* Reveal line animation */
        .reveal-line {
            position: relative;
            overflow: hidden;
        }

        .reveal-line::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--accent);
            transform: translateX(-101%);
            transition: transform 0.6s cubic-bezier(0.77, 0, 0.175, 1);
        }

        .reveal-line.visible::after {
            transform: translateX(101%);
        }

        /* Stagger children */
        .stagger-children > * {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                        transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .stagger-children.visible > *:nth-child(1) { transition-delay: 0s; opacity: 1; transform: translateY(0); }
        .stagger-children.visible > *:nth-child(2) { transition-delay: 0.1s; opacity: 1; transform: translateY(0); }
        .stagger-children.visible > *:nth-child(3) { transition-delay: 0.2s; opacity: 1; transform: translateY(0); }
        .stagger-children.visible > *:nth-child(4) { transition-delay: 0.3s; opacity: 1; transform: translateY(0); }
        .stagger-children.visible > *:nth-child(5) { transition-delay: 0.4s; opacity: 1; transform: translateY(0); }
        .stagger-children.visible > *:nth-child(6) { transition-delay: 0.5s; opacity: 1; transform: translateY(0); }

        /* Card hover enhancement */
        .brand-card, .pillar-card {
            transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }

        .brand-card:hover {
            box-shadow: 0 25px 50px -12px rgba(124, 58, 237, 0.15);
        }
    `;
    document.head.appendChild(style);

    // Apply animation classes
    document.querySelectorAll('.section-header').forEach(el => {
        el.classList.add('animate-fade-up');
    });

    document.querySelectorAll('.philosophy-header').forEach(el => {
        el.classList.add('animate-fade-left');
    });

    document.querySelectorAll('.philosophy-content').forEach(el => {
        el.classList.add('animate-fade-right');
    });

    document.querySelectorAll('.section-title').forEach(el => {
        el.classList.add('reveal-line');
    });

    // Stagger grids
    document.querySelectorAll('.pillars-grid, .brands-grid, .process-grid, .diff-list').forEach(el => {
        el.classList.add('stagger-children');
    });

    // Cards with scale
    document.querySelectorAll('.brand-card').forEach((el, index) => {
        el.classList.add('animate-scale');
        el.style.transitionDelay = `${index * 0.08}s`;
    });

    // Process steps with blur
    document.querySelectorAll('.process-step').forEach((el, index) => {
        el.classList.add('animate-blur');
        el.style.transitionDelay = `${index * 0.15}s`;
    });

    // Pillar cards with stagger
    document.querySelectorAll('.pillar-card').forEach((el, index) => {
        el.classList.add('animate-fade-up');
        el.style.transitionDelay = `${index * 0.12}s`;
    });

    // Diff items
    document.querySelectorAll('.diff-item').forEach((el, index) => {
        el.classList.add('animate-fade-left');
        el.style.transitionDelay = `${index * 0.1}s`;
    });

    // CTA section
    document.querySelectorAll('.cta-content').forEach(el => {
        el.classList.add('animate-scale');
    });

    // Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '-50px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Animate counters if present
                if (entry.target.classList.contains('animate-counter')) {
                    animateCounter(entry.target);
                }
            }
        });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.animate-fade-up, .animate-fade-left, .animate-fade-right, .animate-scale, .animate-blur, .stagger-children, .reveal-line').forEach(el => {
        observer.observe(el);
    });

    // Parallax effect on scroll
    initParallax();
}

// ================================
// Parallax Effect
// ================================
function initParallax() {
    const parallaxElements = document.querySelectorAll('.hero-visual');

    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;

                parallaxElements.forEach(el => {
                    const rect = el.getBoundingClientRect();
                    const speed = 0.1;

                    if (rect.top < window.innerHeight && rect.bottom > 0) {
                        const yPos = (rect.top - window.innerHeight / 2) * speed;
                        el.style.transform = `translateY(${yPos}px)`;
                    }
                });

                ticking = false;
            });

            ticking = true;
        }
    });
}

// ================================
// Counter Animation
// ================================
function animateCounter(element) {
    const target = parseInt(element.dataset.target);
    const duration = 2000;
    const start = 0;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(start + (target - start) * easeOutQuart);

        element.textContent = current;

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = target;
        }
    }

    requestAnimationFrame(update);
}

// ================================
// Typing Effect
// ================================
function initTypingEffect() {
    const typingElement = document.getElementById('typing-text');
    if (!typingElement) return;

    const words = ['Weddings', 'Communities', 'Celebrations', 'Companies', 'Milestones', 'Teams', 'Bar Mitzvahs', 'Startups', 'Reunions', 'Clubs'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
            typingElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            typingSpeed = 4000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typingSpeed = 500;
        }

        setTimeout(type, typingSpeed);
    }

    type();
}
