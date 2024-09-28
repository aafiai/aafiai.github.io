// Dynamic year
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scrolling
const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Check if there's a saved theme in localStorage
const savedTheme = localStorage.getItem('theme');

// Apply saved theme (if any) or default to dark mode
if (savedTheme) {
    body.classList.remove('dark-mode', 'light-mode');
    body.classList.add(savedTheme);
    icon.classList.toggle('fa-sun', savedTheme === 'light-mode');
    icon.classList.toggle('fa-moon', savedTheme === 'dark-mode');
} else {
    body.classList.add('dark-mode'); // Default to dark mode
    icon.classList.add('fa-sun'); // Set sun icon (because dark mode is active)
}

themeToggle.onclick = function () {
    // Toggle the dark and light mode classes
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    // Toggle the icon
    icon.classList.toggle('fa-sun');
    icon.classList.toggle('fa-moon');

    // Save the current theme in localStorage
    const currentTheme = body.classList.contains('light-mode') ? 'light-mode' : 'dark-mode';
    localStorage.setItem('theme', currentTheme);
};

// Modal functionality
function openModal(jobId) {
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';
    // Fill modal content based on jobId
    document.getElementById('modal-company').textContent = `Details for ${jobId}`;
}

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

// Toggle Project Details
function toggleDetails(projectId) {
    const details = document.getElementById(projectId);
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
}
