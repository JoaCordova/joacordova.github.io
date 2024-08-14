document.getElementById("scroll-trigger").addEventListener("click", function() {
    // Encuentra el siguiente elemento después de `scroll-trigger`
    const content = document.querySelector(".other-content");
    const container = document.querySelector("#scroll-trigger");

    // Calcula la posición del contenido
    const contentTop = content.getBoundingClientRect().top + window.scrollY;

    // Realiza el desplazamiento suave
    window.scrollTo({
        top: contentTop - container.clientHeight, // Ajusta el desplazamiento para evitar que el texto quede demasiado abajo
        behavior: 'smooth'
    });
});
