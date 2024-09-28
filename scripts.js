// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
themeToggle.onclick = function() {
    const body = document.body;
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const sections = document.querySelectorAll('section');
    const modals = document.querySelectorAll('.modal-content');

    // Toggle classes for body, header, footer, and sections
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    header.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    sections.forEach(section => {
        section.classList.toggle('dark-mode');
    });
    modals.forEach(modal => {
        modal.classList.toggle('dark-mode');
    });

    // Update button icon based on the current mode
    if (body.classList.contains('dark-mode')) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Sun icon for light mode
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Moon icon for dark mode
    }
};

// Modal functionality
function showModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Dropdown functionality for projects
function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle('show'); // Toggle display
}
