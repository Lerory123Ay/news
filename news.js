// Function to adjust font size dynamically
function adjustFontSize() {
    const newsTitle = document.querySelector(".news-title");
    const newsDescription = document.querySelector(".news-description");

    const screenWidth = window.innerWidth;

    // Adjust font size based on screen width
    if (screenWidth > 1200) {
        newsTitle.style.fontSize = "3rem";
        newsDescription.style.fontSize = "1.5rem";
    } else if (screenWidth > 768) {
        newsTitle.style.fontSize = "2.8rem";
        newsDescription.style.fontSize = "1.95rem";
    } else {
        newsTitle.style.fontSize = "1.9rem";
        newsDescription.style.fontSize = "1.1rem";
    }
}

// Run adjustment on page load and window resize
window.addEventListener("DOMContentLoaded", adjustFontSize);
window.addEventListener("resize", adjustFontSize);

window.onload = function() {
    const mode = localStorage.getItem("mode");
    if (mode === "dark") {
        document.body.classList.add("dark-mode"); // Apply dark mode if the stored mode is "dark"
    }
};

