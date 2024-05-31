document.addEventListener('DOMContentLoaded', () => {
    // Handle address click
    const addressElement = document.getElementById('nav-address');
    addressElement.addEventListener('click', () => {
        alert('Change delivery address functionality can be added here.');
    });

    // Handle search
    const searchIcon = document.getElementById('search-icon');
    searchIcon.addEventListener('click', () => {
        const searchCategory = document.getElementById('search-category').value;
        const searchInput = document.getElementById('search-input').value;
        alert(`Search for: ${searchInput} in category: ${searchCategory}`);
        // Add search functionality here
    });

    // Handle Back to top
    const backToTop = document.querySelector('.foot-panel1');
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
