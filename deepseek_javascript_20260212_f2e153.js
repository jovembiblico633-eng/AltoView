// ================ FUNÇÕES DE UI ================

function toggleDrawer(open) {
    document.getElementById('drawer').classList.toggle('open', open);
    document.getElementById('overlay').style.visibility = open ? 'visible' : 'hidden';
    document.getElementById('overlay').style.opacity = open ? '1' : '0';
}

function populateStreetList() {
    const list = document.getElementById('street-list');
    list.innerHTML = '';
    
    streets.forEach((s, i) => {
        list.innerHTML += `
            <div onclick="selectStreet(${i})" style="padding: 15px; cursor: pointer; border-bottom: 1px solid #eee; background: white; margin-bottom: 5px; border-radius: 8px;">
                <h4 style="font-size: 0.9rem; color: var(--primary);">${s.name}</h4>
                <p style="font-size: 0.7rem; color: #777;">${s.type}</p>
            </div>
        `;
    });
}