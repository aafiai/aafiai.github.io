// Toggle between dark and light mode
const toggleButton = document.getElementById('themeToggle');
toggleButton.addEventListener('click', () => {
    const body = document.body;
    body.classList.toggle('light-mode');

    // Change icon based on the theme
    if (body.classList.contains('light-mode')) {
        toggleButton.innerHTML = '<i class="fas fa-moon"></i>'; // Moon icon for light mode
    } else {
        toggleButton.innerHTML = '<i class="fas fa-sun"></i>'; // Sun icon for dark mode
    }
});

// Modal functionality
function openModal(jobId) {
    const modal = document.getElementById('myModal');
    const modalCompany = document.getElementById('modal-company');
    const modalTitle = document.getElementById('modal-title');
    const modalDuration = document.getElementById('modal-duration');
    const modalResponsibilities = document.getElementById('modal-responsibilities');

    // Example data, replace with your actual data
    const jobData = {
        job1: {
            company: "Company Name 1",
            title: "Position Title 1",
            duration: "Month Year - Month Year",
            responsibilities: "Responsibilities for Position Title 1."
        },
        job2: {
            company: "Company Name 2",
            title: "Position Title 2",
            duration: "Month Year - Month Year",
            responsibilities: "Responsibilities for Position Title 2."
        },
        degree1: {
            company: "Degree Title 1",
            title: "Institution Name 1",
            duration: "Year - Year",
            responsibilities: "Details about Degree Title 1."
        },
        degree2: {
            company: "Degree Title 2",
            title: "Institution Name 2",
            duration: "Year - Year",
            responsibilities: "Details about Degree Title 2."
        },
    };

    // Set modal content based on jobId
    modalCompany.textContent = jobData[jobId].company;
    modalTitle.textContent = jobData[jobId].title;
    modalDuration.textContent = jobData[jobId].duration;
    modalResponsibilities.textContent = jobData[jobId].responsibilities;

    modal.style.display = "block"; // Show the modal
}

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = "none"; // Hide the modal
}

// Close modal when user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Toggle project details
function toggleDetails(projectId) {
    const projectDetails = document.getElementById(projectId);
    if (projectDetails.style.display === "none") {
        projectDetails.style.display = "block";
    } else {
        projectDetails.style.display = "none";
    }
}

// Update the year in the footer dynamically
document.getElementById('year').textContent = new Date().getFullYear();
