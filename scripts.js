document.addEventListener("DOMContentLoaded", function() {
    const modeToggle = document.getElementById("mode-toggle");
    const workCards = document.querySelectorAll(".work-card, .education-card");
    const modals = document.querySelectorAll(".modal");
    const closeButtons = document.querySelectorAll(".close");
    const dropdowns = document.querySelectorAll(".dropdown-toggle");

    // Toggle light/dark mode
    modeToggle.addEventListener("click", function() {
        document.body.classList.toggle("light-mode");
        document.body.classList.toggle("dark-mode");
        const icon = this.querySelector("i");
        icon.classList.toggle("fa-sun");
        icon.classList.toggle("fa-moon");
    });

    // Open modal on card click
    workCards.forEach(card => {
        card.addEventListener("click", function() {
            const modalId = this.getAttribute("data-modal");
            const modal = document.getElementById(modalId);
            modal.style.display = "block";
        });
    });

    // Close modal
    closeButtons.forEach(button => {
        button.addEventListener("click", function() {
            const modal = button.closest(".modal");
            modal.style.display = "none";
        });
    });

    // Close modal when clicking outside
    window.addEventListener("click", function(event) {
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });

    // Show project details on dropdown click
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("click", function() {
            const details = this.parentNode.nextElementSibling;
            details.style.display = details.style.display === "block" ? "none" : "block";
        });
    });
});
