document.addEventListener('DOMContentLoaded', function () {
    // Select all links with the class 'page-link'
    const pageLinks = document.querySelectorAll('.page-link');

    // Loop through each link
    pageLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default link behavior

            const targetUrl = this.href; // Get the target URL

            // Add the fade-out class to the body
            document.body.classList.add('fade-out');

            // After the transition (500ms), navigate to the new page
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 500); // This should match the duration in CSS (0.5s)
        });
    });
});