// Function to toggle Dark Mode
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

modeToggle.addEventListener('click', () => {
    // Toggle the 'dark-mode' class on the body
    body.classList.toggle('dark-mode');

    // Update the button text based on the current mode
    if (body.classList.contains('dark-mode')) {
        modeToggle.textContent = 'Toggle Light Mode';
        localStorage.setItem('theme', 'dark'); // Save preference
    } else {
        modeToggle.textContent = 'Toggle Dark Mode';
        localStorage.setItem('theme', 'light'); // Save preference
    }
});

// Load saved preference on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        modeToggle.textContent = 'Toggle Light Mode';
    } else {
        modeToggle.textContent = 'Toggle Dark Mode';
    }
});

// Simple Scroll Spy (optional: to highlight nav links on scroll)
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 50) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.navbar a').forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').includes(current)) {
            a.classList.add('active');
        }
    });
});