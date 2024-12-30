document.addEventListener('DOMContentLoaded', () => {
    const totalFrames = 91; // Cantidad total de imágenes
    const productFrame = document.getElementById('product-frame');
    const containerHeight = document.body.scrollHeight - window.innerHeight; // Altura total del documento

    // Asegúrate de que productFrame exista
    if (!productFrame) {
        console.error('El elemento product-frame no fue encontrado.');
        return;
    }

    // Ajuste de la velocidad del giro
    const scrollSpeedFactor = 5; // Incrementa este valor para hacerlo más lento

    // Evento de scroll
    window.addEventListener('scroll', () => {
        // Calcula el porcentaje de scroll
        const scrollTop = window.scrollY;
        const scrollFraction = scrollTop / (containerHeight * scrollSpeedFactor);

        // Determina el índice del frame según el porcentaje de scroll
        const frameIndex = Math.min(
            totalFrames - 1,
            Math.floor(scrollFraction * totalFrames)
        );

        // Cambia la imagen del producto
        productFrame.src = `assets/Render/${frameIndex + 1}.png`;
    });
});


