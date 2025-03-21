document.addEventListener("DOMContentLoaded", function () {
    // Reveal sections on scroll
    const sections = document.querySelectorAll(".section");
    
    function revealSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight - 100) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections(); // Run initially to reveal sections already in view

    // Smooth scrolling for nav links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: "smooth" });
        });
    });
});
// Function to handle the live chat button click
function openChat() {
    // Replace this with your chat functionality
    alert("Live chat is not implemented yet. You can integrate a chat service like WhatsApp, Facebook Messenger, or a custom chat widget here.");
    // Example: Redirect to WhatsApp
    // window.open("https://wa.me/017", "_blank");
}