// Theme toggle function
const toggleButton = document.getElementById('themeToggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
    
    const isLightMode = body.classList.contains('light-mode');
    
    // Update the modal to reflect the current theme
    const modalContent = document.querySelector('.modal-content');
    modalContent.classList.toggle('light-mode', isLightMode);
    modalContent.classList.toggle('dark-mode', !isLightMode);
});

// Show modal function
function showModal(degree) {
    const modal = document.getElementById('modal');
    const modalCompany = document.getElementById('modalCompany');
    const modalTitle = document.getElementById('modalTitle');
    const modalDuration = document.getElementById('modalDuration');
    const modalResponsibilities = document.getElementById('modalResponsibilities');

    // Fill modal with work experience or education details
    if (degree === 'degree1') {
        modalCompany.textContent = 'Company Name 1 or Degree Name 1';
        modalTitle.textContent = 'Position Title 1 or Institution Name 1';
        modalDuration.textContent = 'Duration: Duration 1';
        modalResponsibilities.textContent = 'Details about Work Experience or Degree 1.';
    } else if (degree === 'degree2') {
        modalCompany.textContent = 'Company Name 2 or Degree Name 2';
        modalTitle.textContent = 'Position Title 2 or Institution Name 2';
        modalDuration.textContent = 'Duration: Duration 2';
        modalResponsibilities.textContent = 'Details about Work Experience or Degree 2.';
    }

    modal.style.display = "block"; // Show the modal
}

// Close modal
document.querySelector('.close').onclick = function() {
    document.getElementById('modal').style.display = "none";
}

// Function to toggle project details
function toggleProjectDetails(project) {
    const projectDetails = document.getElementById(project);
    if (projectDetails.style.display === "none") {
        projectDetails.style.display = "block";
    } else {
        projectDetails.style.display = "none";
    }
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
