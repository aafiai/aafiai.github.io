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
themeToggle.onclick = function () {
    const body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
};

// Modal functionality
function openModal(job) {
    const modal = document.getElementById('myModal');
    const company = document.getElementById('modal-company');
    const title = document.getElementById('modal-title');
    const duration = document.getElementById('modal-duration');
    const responsibilities = document.getElementById('modal-responsibilities');

    if (job === 'job1') {
        company.textContent = 'Company Name 1';
        title.textContent = 'Position Title 1';
        duration.textContent = 'Month Year - Month Year';
        responsibilities.textContent = 'Job Responsibilities 1';
    } else if (job === 'job2') {
        company.textContent = 'Company Name 2';
        title.textContent = 'Position Title 2';
        duration.textContent = 'Month Year - Month Year';
        responsibilities.textContent = 'Job Responsibilities 2';
    }

    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

// Project dropdown functionality
document.querySelectorAll('.dropdown-btn').forEach(button => {
    button.addEventListener('click', function () {
        const details = this.nextElementSibling;
        details.style.display = details.style.display === 'none' ? 'block' : 'none';
    });
});
