// ================ FUNÇÕES DE CLIMA ================

async function updateWeather() {
    try {
        const apiURL = `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=America%2FSao_Paulo`;
        const response = await fetch(apiURL);
        const data = await response.json();
        
        if (data && data.current) {
            const current = data.current;
            const daily = data.daily;
            const [desc, icon] = weatherMap[current.weather_code] || ["Nublado", "☁️"];

            // Atualizar widget
            document.getElementById('weather-temp').innerText = `${Math.round(current.temperature_2m)}°C`;
            document.getElementById('weather-desc').innerText = desc;
            document.getElementById('weather-icon').innerText = icon;

            // Atualizar painel
            document.getElementById('panel-main-temp').innerText = `${Math.round(current.temperature_2m)}°C`;
            document.getElementById('panel-main-status').innerText = desc;
            document.getElementById('panel-main-icon').innerText = icon;

            // Previsão para os próximos dias
            const grid = document.getElementById('forecast-grid');
            grid.innerHTML = '';
            const days = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'];
            
            for(let i = 1; i < 7; i++) {
                const date = new Date();
                date.setDate(date.getDate() + i);
                const [dIcon] = weatherMap[daily.weather_code[i]] || ["☁️"];
                
                grid.innerHTML += `
                    <div class="forecast-card">
                        <div style="font-size: 0.65rem; font-weight: 700; color: #ffcc00;">${days[date.getDay()]}</div>
                        <div style="font-size: 1.2rem;">${dIcon}</div>
                        <div style="font-size: 0.8rem; font-weight: 800;">${Math.round(daily.temperature_2m_max[i])}°</div>
                    </div>
                `;
            }
        }
    } catch (e) { 
        console.error('Erro ao carregar clima:', e); 
    }
}

function toggleWeatherPanel(show) { 
    document.getElementById('weather-panel').classList.toggle('active', show); 
}
