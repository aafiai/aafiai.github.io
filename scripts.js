// Dynamic year
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
themeToggle.onclick = function () {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');

    // Update button icon based on the current mode
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Sun icon for dark mode
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Moon icon for light mode
    }
};

// Modal functionality for Work Experience, Education, and Projects
function openModal(content) {
    const modal = document.getElementById("myModal");
    const modalCompany = document.getElementById("modal-company");
    const modalTitle = document.getElementById("modal-title");
    const modalDuration = document.getElementById("modal-duration");
    const modalResponsibilities = document.getElementById("modal-responsibilities");

    // Set modal content based on the section clicked
    if (content.type === 'work') {
        modalCompany.textContent = content.company;
        modalTitle.textContent = content.title;
        modalDuration.textContent = content.duration;
        modalResponsibilities.textContent = content.responsibilities;
    } else if (content.type === 'education') {
        modalCompany.textContent = content.institution;
        modalTitle.textContent = content.degree;
        modalDuration.textContent = content.duration;
        modalResponsibilities.textContent = content.details;
    } else if (content.type === 'project') {
        modalCompany.textContent = content.title;
        modalTitle.textContent = 'Project Details';
        modalDuration.textContent = ''; // Optional: You can add duration or other details if needed
        modalResponsibilities.textContent = content.details;
    }

    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function (event) {
    const modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
