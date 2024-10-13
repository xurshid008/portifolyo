// script.js
window.onload = function() {
    const elements = document.querySelectorAll('.fade-in');
    setTimeout(() => {
        elements.forEach(element => {
            element.classList.add('visible');
        });
    }, 100); // 100ms kechikish bilan animatsiya
};
function showSection(section) {
    // Barcha bo'limlarni yashirish
    document.querySelectorAll('.section').forEach((el) => {
        el.style.display = 'none';
    });
    
    // Tanlangan bo'limni ko'rsatish
    document.getElementById(section).style.display = 'block';
}

