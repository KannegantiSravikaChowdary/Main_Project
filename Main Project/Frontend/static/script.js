// Function to navigate to the motto page
function goToMottoPage() { 
    window.location.href = '/motto'; // Redirects to motto page
} // Redirects to about page 
// Function to toggle navbar menu
function toggleMenu() {
    const navLinks = document.getElementById('navbar-links');
    navLinks.classList.toggle('show');
}
