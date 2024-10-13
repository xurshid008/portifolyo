document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
        // Sahifa yuklanganda 200ms kechikish bilan ko'rsatish
        setTimeout(() => {
            element.classList.add('visible');
        }, 200); // O'zgarishi mumkin
    });
});