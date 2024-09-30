document.addEventListener('DOMContentLoaded', function () {
    // Debug log to check if DOMContentLoaded is firing
    console.log('DOM fully loaded, applying fade-in');
    
    // Fade in the page when it loads
    document.body.classList.add('fade-in');
});

document.querySelectorAll('.page-link').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetUrl = this.href;
        document.body.classList.add('fade-out');
        setTimeout(function () {
            window.location.href = targetUrl;
        }, 500); // Match this with your CSS transition duration
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.carousel-item'); // Select all items
    let currentItem = 0; // Keep track of the current item

    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');

    // Function to show the current item
    function showItem(index) {
        // Remove 'active' class from all items
        items.forEach(item => item.classList.remove('active'));
        
        // Add 'active' class to the current item
        items[index].classList.add('active');
    }

    // Show the first item initially
    showItem(currentItem);

    // Event listener for the next arrow
    nextArrow.addEventListener('click', function () {
        currentItem = (currentItem + 1) % items.length; // Move to the next item, loop to the beginning if needed
        showItem(currentItem);
    });

    // Event listener for the previous arrow
    prevArrow.addEventListener('click', function () {
        currentItem = (currentItem - 1 + items.length) % items.length; // Move to the previous item, loop to the end if needed
        showItem(currentItem);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const scrollIcon = document.querySelector('.scroll-icon');
    const aboutSection = document.querySelector('#about');

    // When the scroll icon is clicked, scroll to the About Me section
    scrollIcon.addEventListener('click', function() {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
});
