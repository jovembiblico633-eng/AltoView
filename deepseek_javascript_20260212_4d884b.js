// ================ FUNÇÕES DE MAPA ================

let currentStreet = streets[0];
let isMoving = false;

function switchMap(newUrl, callback) {
    if (isMoving) return;
    isMoving = true;
    
    const host = document.getElementById('map-host');
    const oldLayer = document.querySelector('.layer-active');
    
    // Esconder elementos 360
    document.getElementById('action-wrapper').classList.remove('visible');
    document.getElementById('btn-close-360').classList.remove('visible');

    const newLayer = document.createElement('iframe');
    newLayer.className = 'map-layer';
    newLayer.src = newUrl;
    newLayer.allowFullscreen = true;
    host.appendChild(newLayer);

    newLayer.onload = () => {
        setTimeout(() => {
            newLayer.classList.add('layer-active');
            oldLayer.classList.remove('layer-active');
            
            setTimeout(() => {
                if (oldLayer.parentNode) host.removeChild(oldLayer);
                isMoving = false;
                if (callback) callback();
            }, 650);
        }, 50);
    };
}

function selectStreet(index) {
    currentStreet = streets[index];
    toggleDrawer(false);
    switchMap(currentStreet.sat, () => {
        if (currentStreet.pano) {
            document.getElementById('action-wrapper').classList.add('visible');
        }
    });
}

function enter360() {
    if (currentStreet.pano) {
        switchMap(currentStreet.pano, () => {
            document.getElementById('btn-close-360').classList.add('visible');
        });
    }
}

function exit360() {
    switchMap(currentStreet.sat, () => {
        document.getElementById('action-wrapper').classList.add('visible');
    });
}

function dismiss360Suggestion(event) {
    event.stopPropagation();
    document.getElementById('action-wrapper').classList.remove('visible');
}