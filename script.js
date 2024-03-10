document.addEventListener("DOMContentLoaded", function () {
    // Function to show/hide the scroll-to-top button
    function toggleScrollTopButton() {
        var scrollTopButton = document.getElementById("scroll-top-button");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollTopButton.style.display = "block";
        } else {
            scrollTopButton.style.display = "none";
        }
    }

    // Event listener for scrolling
    window.onscroll = function () {
        toggleScrollTopButton();
    };

    // Smooth scroll to top when the button is clicked
    document.getElementById("scroll-top-button").addEventListener("click", function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Function to show/hide the scroll-to-top button
    function toggleScrollTopButton() {
        var scrollTopButton = document.getElementById("scroll-top-button");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollTopButton.style.display = "block";
        } else {
            scrollTopButton.style.display = "none";
        }
    }

    // Event listener for scrolling
    window.onscroll = function () {
        toggleScrollTopButton();
    };

    // Smooth scroll to top when the button is clicked
    document.getElementById("scroll-top-button").addEventListener("click", function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera

        // Add an 'animate' class for the button animation
        document.getElementById("scroll-top-button").classList.add("animate");

        // Remove the 'animate' class after the animation duration (in this case, 1 second)
        setTimeout(function () {
            document.getElementById("scroll-top-button").classList.remove("animate");
        }, 1000);
    });
});

