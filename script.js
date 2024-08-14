document.addEventListener('DOMContentLoaded', function() {
    showNotification("Hey! If you want, you can check out my CV in English.", "https://example.com/cv");

    document.getElementById("close").addEventListener("click", function() {
        document.getElementById("notification").classList.remove("show");
    });
});

function showNotification(message, url) {
    const notification = document.getElementById("notification");
    const messageElement = document.getElementById("message");
    const linkElement = document.getElementById("link");

    messageElement.textContent = message;
    linkElement.textContent = "Check out my CV";
    linkElement.href = "eng_index.html";

    notification.classList.add("show");
}
