const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
if (window.scrollY > 50) {
nav.classList.add('scrolled');
} else {
nav.classList.remove('scrolled');
}
});

const socialLinks = document.querySelectorAll('.social-links a');

socialLinks.forEach(link => {
link.addEventListener('mouseover', () => {
link.style.transform = 'scale(1.2)';
});

link.addEventListener('mouseout', () => {
link.style.transform = 'scale(1)';
});
});
