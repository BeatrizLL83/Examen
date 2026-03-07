// Buscamos los elementos necesarios
const opciones = document.querySelectorAll('input[name="calification"]'); // Los números
const botonEnviar = document.querySelector('button'); // El botón naranja
const formulario = document.querySelector('#form'); // El formulario
const vistaValoration = document.querySelector('#valoration'); // Pantalla 1
const vistaThanks = document.querySelector('#thanks'); // Pantalla 2
const textoRating = document.querySelector('.rating'); // Texto de "Seleccionaste..."

// 1. ESCUCHA DE CLICK EN LOS NÚMEROS: Cambia la URL y quita la sombra al botón
opciones.forEach(radio => {
    radio.addEventListener('change', () => {
        // Al pinchar, ponemos "?calification=X" arriba en el navegador
        window.history.pushState({}, '', '?calification=' + radio.value);
        
        // EL CAMBIO QUE BUSCAS: El botón naranja pierde su sombra interna (se queda plano)
        botonEnviar.style.boxShadow = 'none';
    });
});

// 2. ESCUCHA DEL ENVÍO: Cambia de pantalla
formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // Evitamos que la página se refresque
    const marcado = document.querySelector('input[name="calification"]:checked');
    if (marcado) {
        textoRating.textContent = `Seleccionaste ${marcado.value} de 5`;
        vistaValoration.setAttribute('hidden', ''); // Esconde la pantalla 1
        vistaThanks.style.display = 'flex'; // Muestra la pantalla 2
    }
});
