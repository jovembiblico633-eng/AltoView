// ================ INICIALIZAÇÃO ================

window.onload = () => {
    // Popular lista de ruas
    populateStreetList();
    
    // Carregar clima
    updateWeather();
    
    // Carregar mapa inicial
    document.getElementById('map-primary').src = currentStreet.sat;
    
    // Mostrar botão 360 se disponível
    setTimeout(() => {
        if(currentStreet.pano) {
            document.getElementById('action-wrapper').classList.add('visible');
        }
    }, 1000);
};