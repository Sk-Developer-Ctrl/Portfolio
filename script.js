const menuToggle = document.querySelector('.menu-toggle');
        const navMenu = document.querySelector('.nav-menu');

        menuToggle.addEventListener('click', (event) => {
            event.stopPropagation();
            navMenu.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', navMenu.classList.contains('active'));
        });

        // Close menu when clicking outside
        document.addEventListener('click', (event) => {
            if (!event.target.closest('.header')) {
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });

        // Close menu when resizing to larger screen
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });



  //  -------------- -------------- -----------

  document.getElementById('downloadCertificateBtn').addEventListener('click', function() {
    // Create an anchor element
    const link = document.createElement('a');

    // Set the href attribute to the image path
    link.href = 'Image/Cv.jpg';  // Path to the image file

    // Set the download attribute with the desired file name
    link.setAttribute('download', 'Cv.jpg');

    // Append the anchor to the body
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    // Remove the anchor element from the document
    document.body.removeChild(link);
});
