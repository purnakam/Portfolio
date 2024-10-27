// Toggle theme between dark and light
function toggleTheme() {
    const body = document.body;
    const themeToggleButton = document.querySelector('.theme-toggle button');

    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeToggleButton.innerText = '🌛';
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeToggleButton.innerText = '🌞';
    }
}

// Open section and close others
function openSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.toggle('show');
            // Close the nav when a section is opened
            if (window.innerWidth <= 768) {
                toggleNav(); // Toggle nav if on mobile
            }
        } else {
            section.classList.remove('show');
        }
    });
}

// Activate the first section by default
document.addEventListener('DOMContentLoaded', () => {
    openSection('about');
});

// Event listener for download button
document.getElementById('download-btn').addEventListener('click', function() {
    alert('Your CV is downloading!');
});

// Function to show the popup
function showPopup(event, popupId) {
    event.preventDefault();
    const popup = document.getElementById(popupId);
    popup.style.display = 'block';

    // Add event listener for 'Esc' key
    document.addEventListener('keydown', handleEscClose);
}

// Function to hide the popup
function hidePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = 'none';

    // Remove event listener for 'Esc' key
    document.removeEventListener('keydown', handleEscClose);
}

// Handle 'Esc' key to close the popup
function handleEscClose(event) {
    if (event.key === 'Escape') {
        const openPopup = document.querySelector('.popup[style*="display: block"]');
        if (openPopup) {
            openPopup.style.display = 'none';
            document.removeEventListener('keydown', handleEscClose);
        }
    }
}

// Function to toggle the navigation menu visibility on mobile
function toggleNav() {
    const nav = document.getElementById('vertical-nav');
    nav.classList.toggle('show');
}