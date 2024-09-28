// Toggle theme
const toggleButton = document.getElementById("toggle-theme");
toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
    document.body.classList.toggle("dark-mode");
});

// Function to open the modal
function openModal(job) {
    const modal = document.getElementById("myModal");
    const modalContent = document.querySelector('.modal-content'); // Select modal content
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

    // Check the current theme and adjust modal styles
    const body = document.body;
    if (body.classList.contains('dark-mode')) {
        modalContent.style.backgroundColor = '#1e1e1e'; // Dark background
        modalContent.style.color = 'white'; // Light text
    } else {
        modalContent.style.backgroundColor = 'white'; // Light background
        modalContent.style.color = 'black'; // Dark text
    }

    modal.style.display = "block"; // Show the modal
}

// Function to close the modal
function closeModal() {
    document.getElementById("myModal").style.display = "none"; // Hide the modal
}

// Function to toggle project details
function toggleProjectDetails(event) {
    const projectDetails = event.target.nextElementSibling; // Get the next sibling (details)
    const isVisible = projectDetails.style.display === "block";
    projectDetails.style.display = isVisible ? "none" : "block"; // Toggle display
}
