document.addEventListener("DOMContentLoaded", function() {
    fetch('./pages/navbar.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(htmlContent => {
            const placeholder = document.getElementById('navbar-placeholder');
            if (placeholder) {
                placeholder.innerHTML = htmlContent;
            }
        })
        .catch(error => {
            console.error('Failed to load the universal navbar:', error);
        });
    fetch('./pages/font.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(htmlContent => {
            const placeholder = document.getElementById('font-placeholder');
            if (placeholder) {
                placeholder.innerHTML = htmlContent;
            }
        })
        .catch(error => {
            console.error('Failed to load the font:', error);
        });
});