// Adding a simple scroll effect to the navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(31, 31, 31, 0.98)';
        navbar.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(31, 31, 31, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});
