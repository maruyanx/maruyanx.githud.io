document.addEventListener("DOMContentLoaded", function() {
    const title = document.getElementById("title");
    const text = title.innerText;
    title.innerText = ''; // Vaciar el título inicial

    let i = 0;
    function typeLetter() {
        if (i < text.length) {
            title.innerText += text[i];
            i++;
            setTimeout(typeLetter, 150); // Ajusta la velocidad de la animación
        }
    }

    // Iniciar la animación de las letras al cargar la página
    setTimeout(typeLetter, 500);

    // Animación para el título
    title.style.animation = 'fadeIn 1s ease forwards, slideIn 1s ease forwards';
});
