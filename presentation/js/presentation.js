// Presentation Controller
class PresentationController {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.indicators = document.querySelectorAll('.indicator');
        this.currentSlide = 1;
        this.totalSlides = this.slides.length;

        this.init();
    }

    init() {
        // Set up event listeners
        this.setupResponsiveScaling();
        this.setupNavigation();
        this.setupKeyboard();
        this.setupFullscreen();
        this.setupParticles();
        this.updateUI();

        // Show particles on first slide
        this.toggleParticles();
    }

    setupResponsiveScaling() {
        const frame = document.querySelector('.presentation-frame');
        if (!frame) return;

        const updateScale = () => {
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;

            // Standard HD aspect ratio
            const targetWidth = 1920;
            const targetHeight = 1080;

            if (windowWidth <= 768 || windowHeight <= 600) {
                // Disable fixed scaling for mobile devices
                frame.style.transform = 'none';
                frame.style.width = '100vw';
                frame.style.height = '100vh';
                frame.style.position = 'fixed';
                frame.style.left = '0';
                frame.style.top = '0';
                frame.style.marginLeft = '0';
                frame.style.marginTop = '0';
            } else {
                // Calculate scale based on which dimension is the constricting factor
                const scaleX = windowWidth / targetWidth;
                const scaleY = windowHeight / targetHeight;
                const scale = Math.min(scaleX, scaleY);

                // Apply scale safely
                frame.style.width = targetWidth + 'px';
                frame.style.height = targetHeight + 'px';
                frame.style.position = 'absolute';
                frame.style.left = '50%';
                frame.style.top = '50%';
                frame.style.marginLeft = -(targetWidth / 2) + 'px';
                frame.style.marginTop = -(targetHeight / 2) + 'px';
                frame.style.transform = `scale(${scale})`;
            }
        };

        window.addEventListener('resize', updateScale);
        updateScale(); // Initial call

        // Handle delayed resizing for mobile/dynamic viewports
        setTimeout(updateScale, 100);
    }

    setupParticles() {
        // Initialize particles.js
        if (typeof particlesJS !== 'undefined') {
            particlesJS('particles-js', {
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: '#2563eb'
                    },
                    shape: {
                        type: 'circle'
                    },
                    opacity: {
                        value: 0.3,
                        random: false
                    },
                    size: {
                        value: 3,
                        random: true
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: '#3b82f6',
                        opacity: 0.3,
                        width: 1.5
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: 'none',
                        random: false,
                        straight: false,
                        out_mode: 'out',
                        bounce: false
                    }
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'repulse'
                        },
                        onclick: {
                            enable: true,
                            mode: 'push'
                        },
                        resize: true
                    },
                    modes: {
                        repulse: {
                            distance: 100,
                            duration: 0.4
                        },
                        push: {
                            particles_nb: 4
                        }
                    }
                },
                retina_detect: true
            });
        }
    }

    toggleParticles() {
        const particlesContainer = document.getElementById('particles-js');
        if (this.currentSlide === 1) {
            particlesContainer.classList.add('active');
        } else {
            particlesContainer.classList.remove('active');
        }
    }

    setupNavigation() {
        // Previous button
        document.querySelector('.prev-button').addEventListener('click', () => {
            this.previousSlide();
        });

        // Next button
        document.querySelector('.next-button').addEventListener('click', () => {
            this.nextSlide();
        });

        // Indicator buttons
        this.indicators.forEach(indicator => {
            indicator.addEventListener('click', (e) => {
                const slideNumber = parseInt(e.target.dataset.slide);
                this.goToSlide(slideNumber);
            });
        });
    }

    setupKeyboard() {
        document.addEventListener('keydown', (e) => {
            switch (e.key) {
                case 'ArrowLeft':
                case 'ArrowUp':
                    e.preventDefault();
                    this.previousSlide();
                    break;
                case 'ArrowRight':
                case 'ArrowDown':
                case ' ':
                    e.preventDefault();
                    this.nextSlide();
                    break;
                case 'Home':
                    e.preventDefault();
                    this.goToSlide(1);
                    break;
                case 'End':
                    e.preventDefault();
                    this.goToSlide(this.totalSlides);
                    break;
            }
        });
    }

    setupFullscreen() {
        const fullscreenBtn = document.querySelector('.fullscreen-btn');
        const presentationFrame = document.querySelector('.presentation-frame');

        if (fullscreenBtn && presentationFrame) {
            fullscreenBtn.addEventListener('click', () => {
                if (!document.fullscreenElement) {
                    presentationFrame.requestFullscreen().catch(err => {
                        console.log('Fullscreen error:', err);
                    });
                } else {
                    document.exitFullscreen();
                }
            });

            // Update button on fullscreen change
            document.addEventListener('fullscreenchange', () => {
                const svg = fullscreenBtn.querySelector('svg');
                if (document.fullscreenElement) {
                    svg.innerHTML = '<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/>';
                } else {
                    svg.innerHTML = '<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>';
                }
            });
        }
    }

    nextSlide() {
        if (this.currentSlide < this.totalSlides) {
            this.goToSlide(this.currentSlide + 1);
        }
    }

    previousSlide() {
        if (this.currentSlide > 1) {
            this.goToSlide(this.currentSlide - 1);
        }
    }

    goToSlide(slideNumber) {
        if (slideNumber < 1 || slideNumber > this.totalSlides) {
            return;
        }

        // Remove active class from current slide
        this.slides[this.currentSlide - 1].classList.remove('active');

        // Add prev class for transition direction
        if (slideNumber < this.currentSlide) {
            this.slides[this.currentSlide - 1].classList.add('prev');
        } else {
            this.slides[this.currentSlide - 1].classList.remove('prev');
        }

        // Update current slide
        this.currentSlide = slideNumber;

        // Add active class to new slide
        this.slides[this.currentSlide - 1].classList.add('active');
        this.slides[this.currentSlide - 1].classList.remove('prev');

        // Update UI
        this.updateUI();

        // Toggle particles visibility
        this.toggleParticles();

        // Trigger slide animation
        this.animateSlide();
    }

    updateUI() {
        // Update indicators
        this.indicators.forEach((indicator, index) => {
            if (index === this.currentSlide - 1) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });

        // Update navigation buttons
        const prevBtn = document.querySelector('.prev-button');
        const nextBtn = document.querySelector('.next-button');

        prevBtn.disabled = this.currentSlide === 1;
        nextBtn.disabled = this.currentSlide === this.totalSlides;
    }

    animateSlide() {
        const currentSlideElement = this.slides[this.currentSlide - 1];
        const slideBody = currentSlideElement.querySelector('.slide-body');

        // Handle different slide structures
        if (!slideBody) {
            // For slides without .slide-body (like hero slide or title slide)
            const heroContainer = currentSlideElement.querySelector('.hero-slide-container');
            const titleLayout = currentSlideElement.querySelector('.title-split-layout');
            const animateElement = heroContainer || titleLayout;

            if (animateElement) {
                animateElement.style.animation = 'none';
                setTimeout(() => {
                    animateElement.style.animation = '';
                }, 10);
            }
            return;
        }

        // Reset animation for standard slides
        slideBody.style.animation = 'none';
        setTimeout(() => {
            slideBody.style.animation = '';
        }, 10);
    }
}

// Touch/Swipe support
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next slide
            presentation.nextSlide();
        } else {
            // Swipe right - previous slide
            presentation.previousSlide();
        }
    }
}

// Initialize presentation
const presentation = new PresentationController();

// Prevent default touch behaviors
document.addEventListener('touchmove', (e) => {
    if (e.touches.length > 1) {
        e.preventDefault();
    }
}, { passive: false });

// Log keyboard shortcuts on load
console.log('%c🎯 Presentation Controls:', 'color: #2563eb; font-size: 14px; font-weight: bold;');
console.log('%c→/↓/Space: Next slide', 'color: #64748b; font-size: 12px;');
console.log('%c←/↑: Previous slide', 'color: #64748b; font-size: 12px;');
console.log('%cHome: First slide', 'color: #64748b; font-size: 12px;');
console.log('%cEnd: Last slide', 'color: #64748b; font-size: 12px;');
console.log('%cSwipe left/right on touch devices', 'color: #64748b; font-size: 12px;');
