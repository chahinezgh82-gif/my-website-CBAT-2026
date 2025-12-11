document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    // Mobile toggle
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Smooth scroll
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                // استخدام nav
                const navbarHeight = document.getElementById('navbar').offsetHeight; 
                window.scrollTo({
                    top: target.offsetTop - navbarHeight,
                    behavior: 'smooth'
                });
            }
            if(navLinks.classList.contains('active')){
                navLinks.classList.remove('active');
                hamburger.querySelector('i').classList.remove('fa-times');
                hamburger.querySelector('i').classList.add('fa-bars');
            }
        });
    });

    // Axe titles
    const axes = document.querySelectorAll('.axe');
    const axeTitle = document.getElementById('axe-title');
    axes.forEach(a => {
        a.addEventListener('click', () => {
            axeTitle.textContent = a.dataset.title;
        });
    });
    
    /* 🔵 SLIDER LOGIC 🔵 */
    const wrapper = document.querySelector('.committee-wrapper');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    const cards = document.querySelectorAll('.committee-card');

    let currentIndex = 0;
    const totalCards = cards.length;

    /**
     * Déplace le wrapper horizontalement pour afficher la carte à l'index donné.
     * Chaque carte représente 100% du conteneur parent (committee-slider-container).
     * @param {number} index L'index de la carte à afficher.
     */
    function showCard(index){
        // Utilise transform: translateX() pour déplacer le wrapper de (index * 100)% vers la gauche.
        wrapper.style.transform = `translateX(-${index * 100}%)`;
    }

    prevBtn.addEventListener('click', () => {
        // Décrémente l'index
        currentIndex = (currentIndex - 1 + totalCards) % totalCards;
        showCard(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        // Incrémente l'index
        currentIndex = (currentIndex + 1) % totalCards;
        showCard(currentIndex);
    });

    // Afficher la première carte au chargement
    showCard(currentIndex);
    /* 🔵 FIN SLIDER LOGIC 🔵 */
});