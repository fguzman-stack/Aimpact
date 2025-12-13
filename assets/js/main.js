document.addEventListener('DOMContentLoaded', () => {
    
    // AOS Initialization
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Sticky Navbar
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Dark Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const icon = themeToggle.querySelector('i');

    // Check for saved user preference
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
        updateIcon(savedTheme);
    } else {
        htmlElement.setAttribute('data-theme', systemTheme);
        updateIcon(systemTheme);
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme);
    });

    function updateIcon(theme) {
        if (theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    const billingToggle = document.getElementById('billing-toggle');
    if (billingToggle) {
        const prices = document.querySelectorAll('.price');
        const periods = document.querySelectorAll('.price-period');
        const updatePrices = (yearly) => {
            prices.forEach(p => {
                const monthly = p.getAttribute('data-monthly');
                const yearlyVal = p.getAttribute('data-yearly');
                const value = yearly ? yearlyVal : monthly;
                if (value) p.textContent = `$${value}`;
            });
            periods.forEach(el => {
                el.textContent = yearly ? '/yr' : '/mo';
            });
        };
        updatePrices(false);
        billingToggle.addEventListener('change', () => {
            updatePrices(billingToggle.checked);
        });
    }

    const pricingToggle = document.getElementById('pricing-toggle');
    if (pricingToggle) {
        const amountEls = document.querySelectorAll('[data-monthly][data-yearly]');
        const periodEls = document.querySelectorAll('[data-period-monthly][data-period-yearly]');
        const updatePricing = () => {
            const yearly = pricingToggle.checked;
            amountEls.forEach(el => {
                el.textContent = yearly ? el.getAttribute('data-yearly') : el.getAttribute('data-monthly');
            });
            periodEls.forEach(el => {
                el.textContent = yearly ? el.getAttribute('data-period-yearly') : el.getAttribute('data-period-monthly');
            });
        };
        pricingToggle.addEventListener('change', updatePricing);
        updatePricing();
    }

});
