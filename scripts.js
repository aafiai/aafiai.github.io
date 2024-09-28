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
    if (savedTheme === 'light-mode') {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
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
function openModal(sectionId) {
    const modal = document.getElementById('myModal');
    const modalTitle = document.getElementById('modal-title');
    const modalDetails = document.getElementById('modal-details');

    // Define content based on sectionId
    const content = {
        'job1': {
            title: 'Company Name 1',
            details: 'Details about your experience at Company Name 1. Responsibilities included...'
        },
        'job2': {
            title: 'Company Name 2',
            details: 'Details about your experience at Company Name 2. Responsibilities included...'
        },
        'degree1': {
            title: 'Bachelor of Science in Computer Science',
            details: 'Details about Degree Name 1. Courses included...'
        },
        'degree2': {
            title: 'Master of Science in Software Engineering',
            details: 'Details about Degree Name 2. Courses included...'
        }
    };

    if (content[sectionId]) {
        modalTitle.textContent = content[sectionId].title;
        modalDetails.textContent = content[sectionId].details;
        modal.style.display = 'block';
    }
}

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
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

// Alternatively, add event listeners to dropdown buttons for better separation of concerns
document.querySelectorAll('.dropdown-btn').forEach(button => {
    button.addEventListener('click', function () {
        const projectDetails = this.parentElement.nextElementSibling;
        if (projectDetails.style.display === 'none' || projectDetails.style.display === '') {
            projectDetails.style.display = 'block';
        } else {
            projectDetails.style.display = 'none';
        }
    });
});
