// Animacion para bajar seleccionando en Navbar
document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1); // Obtener el ID del destino
        const targetElement = document.getElementById(targetId); // Obtener el elemento de destino
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 20, // Ajustar la posición para el padding de la barra lateral
                behavior: 'smooth'
            });
        }
    });
});

// Efecto de carga para las barras de progreso
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.progress-bar').forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.transition = 'width 1s ease-in-out';
            bar.style.width = width;
        }, 100); // Tiempo para asegurar que la transición se aplique
    });

});

//Animacion de foto
document.addEventListener('DOMContentLoaded', () => {
    // Puedes agregar código aquí para futuras funcionalidades si es necesario.
    // Este espacio está reservado para futuras mejoras o interacciones.
});

