// Dynamic year
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scrolling
const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
themeToggle.onclick = function() {
    const body = document.body;
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const sections = document.querySelectorAll('section');

    // Toggle classes for body, header, footer, and sections
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    header.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    sections.forEach(section => {
        section.classList.toggle('dark-mode');
        section.classList.toggle('light-mode');
    });

    // Update button icon based on the current mode
    if (body.classList.contains('dark-mode')) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Sun icon
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Moon icon
    }
};

// Function to open the modal
function openModal(job) {
    const modal = document.getElementById("myModal");
    const modalCompany = document.getElementById("modal-company");
    const modalTitle = document.getElementById("modal-title");
    const modalDuration = document.getElementById("modal-duration");
    const modalResponsibilities = document.getElementById("modal-responsibilities");

    // Fill modal with job details
    if (job === 'job1') {
        modalCompany.textContent = 'Company Name 1';
        modalTitle.textContent = 'Position Title 1';
        modalDuration.textContent = 'Duration: Month Year - Month Year';
        modalResponsibilities.textContent = 'Responsibilities: Briefly explain your role, key responsibilities, and achievements.';
    } else if (job === 'job2') {
        modalCompany.textContent = 'Company Name 2';
        modalTitle.textContent = 'Position Title 2';
        modalDuration.textContent = 'Duration: Month Year - Month Year';
        modalResponsibilities.textContent = 'Responsibilities: Briefly explain your role, key responsibilities, and achievements.';
    } else if (job === 'edu1') {
        modalCompany.textContent = 'Degree Name 1';
        modalTitle.textContent = 'Institution Name 1';
        modalDuration.textContent = 'Duration: Month Year - Month Year';
        modalResponsibilities.textContent = 'Details: Briefly explain your degree, key courses, and achievements.';
    } else if (job === 'edu2') {
        modalCompany.textContent = 'Degree Name 2';
        modalTitle.textContent = 'Institution Name 2';
        modalDuration.textContent = 'Duration: Month Year - Month Year';
        modalResponsibilities.textContent = 'Details: Briefly explain your degree, key courses, and achievements.';
    }

    modal.style.display = "block"; // Show the modal
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none"; // Hide the modal
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none"; // Hide the modal
    }
}

// Function to toggle dropdown details
function toggleDropdown(projectId) {
    const projectDetails = document.getElementById(projectId);
    if (projectDetails.style.display === "none") {
        projectDetails.style.display = "block"; // Show details
    } else {
        projectDetails.style.display = "none"; // Hide details
    }
}
