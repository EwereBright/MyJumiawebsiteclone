// ==========================================
// JUMIA EXACT REPLICA - JAVASCRIPT
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // MOBILE MENU
    // ==========================================
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileOverlay = document.getElementById('mobileOverlay');
    const closeMobile = document.getElementById('closeMobile');

    function openMobileMenu() {
        mobileMenu.classList.add('active');
        mobileOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        mobileOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    mobileToggle.addEventListener('click', openMobileMenu);
    closeMobile.addEventListener('click', closeMobileMenu);
    mobileOverlay.addEventListener('click', closeMobileMenu);

    // ==========================================
    // TOP BAR SLIDER
    // ==========================================
    const topSlides = document.querySelectorAll('.top-slide');
    let currentTopSlide = 0;

    function rotateTopSlide() {
        topSlides[currentTopSlide].classList.remove('active');
        currentTopSlide = (currentTopSlide + 1) % topSlides.length;
        topSlides[currentTopSlide].classList.add('active');
    }

    setInterval(rotateTopSlide, 4000);

    // ==========================================
    // HERO SLIDER
    // ==========================================
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const sliderPrev = document.getElementById('sliderPrev');
    const sliderNext = document.getElementById('sliderNext');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            dots[i].classList.remove('active');
        });
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        showSlide((currentSlide + 1) % slides.length);
    }

    function prevSlide() {
        showSlide((currentSlide - 1 + slides.length) % slides.length);
    }

    function startSlider() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function stopSlider() {
        clearInterval(slideInterval);
    }

    sliderNext.addEventListener('click', () => {
        stopSlider();
        nextSlide();
        startSlider();
    });

    sliderPrev.addEventListener('click', () => {
        stopSlider();
        prevSlide();
        startSlider();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopSlider();
            showSlide(index);
            startSlider();
        });
    });

    startSlider();

    // Pause on hover
    const sliderWrapper = document.getElementById('sliderWrapper');
    sliderWrapper.addEventListener('mouseenter', stopSlider);
    sliderWrapper.addEventListener('mouseleave', startSlider);

    // ==========================================
    // FLASH SALES COUNTDOWN
    // ==========================================
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    let countdownTime = 4 * 3600 + 32 * 60 + 15; // 4h 32m 15s

    function updateCountdown() {
        const hours = Math.floor(countdownTime / 3600);
        const minutes = Math.floor((countdownTime % 3600) / 60);
        const seconds = countdownTime % 60;

        hoursEl.textContent = hours.toString().padStart(2, '0');
        minutesEl.textContent = minutes.toString().padStart(2, '0');
        secondsEl.textContent = seconds.toString().padStart(2, '0');

        if (countdownTime > 0) {
            countdownTime--;
        } else {
            countdownTime = 4 * 3600 + 32 * 60 + 15; // Reset
        }
    }

    setInterval(updateCountdown, 1000);

    // ==========================================
    // FLASH PRODUCTS SCROLL
    // ==========================================
    const flashProducts = document.getElementById('flashProducts');
    const flashPrev = document.getElementById('flashPrev');
    const flashNext = document.getElementById('flashNext');

    flashPrev.addEventListener('click', () => {
        flashProducts.scrollBy({ left: -200, behavior: 'smooth' });
    });

    flashNext.addEventListener('click', () => {
        flashProducts.scrollBy({ left: 200, behavior: 'smooth' });
    });

    // ==========================================
    // ADD TO CART FUNCTIONALITY
    // ==========================================
    const cartBadge = document.getElementById('cartBadge');
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    let cartCount = 0;

    function showToast(message) {
        toastMessage.textContent = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    function updateCartBadge() {
        cartBadge.textContent = cartCount;
        cartBadge.style.animation = 'pulse 0.3s ease';
        setTimeout(() => {
            cartBadge.style.animation = '';
        }, 300);
    }

    document.querySelectorAll('.add-cart-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const productName = this.getAttribute('data-name');
            const price = this.getAttribute('data-price');
            
            cartCount++;
            updateCartBadge();
            showToast(`${productName} added to cart!`);
            
            // Button animation
            const originalText = this.textContent;
            this.textContent = '✓ ADDED';
            this.style.backgroundColor = '#27ae60';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.backgroundColor = '';
            }, 2000);
        });
    });

    // ==========================================
    // WISHLIST TOGGLE
    // ==========================================
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const icon = this.querySelector('i');
            
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                this.style.backgroundColor = '#e74c3c';
                this.style.color = '#ffffff';
                showToast('Added to wishlist!');
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                this.style.backgroundColor = '';
                this.style.color = '';
                showToast('Removed from wishlist!');
            }
        });
    });

    // ==========================================
    // NEWSLETTER FORM
    // ==========================================
    const newsletterForm = document.getElementById('newsletterForm');
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input').value;
        
        showToast('Thank you for subscribing!');
        this.reset();
    });

    // ==========================================
    // SEARCH FUNCTIONALITY
    // ==========================================
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const searchTerm = this.value.trim();
            if (searchTerm) {
                showToast(`Searching for: ${searchTerm}`);
            }
        }
    });

    // ==========================================
    // SIDEBAR CATEGORY HOVER
    // ==========================================
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    
    sidebarItems.forEach(item => {
        item.addEventListener('click', function() {
            const category = this.querySelector('span').textContent;
            showToast(`Browsing ${category}...`);
        });
    });

    // ==========================================
    // SCROLL ANIMATIONS
    // ==========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe product cards
    document.querySelectorAll('.product-card, .flash-card, .deal-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });

    // ==========================================
    // ADD CSS ANIMATION
    // ==========================================
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.2); }
        }
    `;
    document.head.appendChild(style);

    console.log('Jumia replica initialized successfully!');
});