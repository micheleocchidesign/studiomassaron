window.addEventListener("DOMContentLoaded", () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    const menuLinks = document.querySelectorAll('.nav-links a');

    // Toggle menu al click sull'hamburger
    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Cambia l'icona da "menu" a "close" se disponibile
        const icon = mobileMenu.querySelector('.material-symbols-outlined');
        icon.textContent = navMenu.classList.contains('active') ? 'close' : 'menu';
    });

    // Chiudi il menu quando si clicca su un link (per lo scorrimento)
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenu.querySelector('.material-symbols-outlined').textContent = 'menu';
        });
    });
});