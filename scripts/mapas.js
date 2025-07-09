    const lat = 9.6451072;
    const lng = -83.9155453;

    const map = L.map('map', {
        scrollWheelZoom: false 
    }).setView([lat, lng], 18);


    // Estilos base
    const openStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    });

    const cartoDark = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '© CartoDB'
    });

    const cartoLight = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '© CartoDB'
    });

    const stamenToner = L.tileLayer('https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {
        attribution: 'Map tiles by Stamen Design, CC BY 3.0'
    });

    // Agregar capa base predeterminada
    openStreetMap.addTo(map);

    // Marcador
    const marker = L.marker([lat, lng]).addTo(map);
    marker.bindPopup('<a href="https://www.google.com/maps?q=9.6451072,-83.9155453" target="_blank">Ver en Google Maps</a>');

    // Clics abren Google Maps
    marker.on('click', () => {
        window.open('https://www.google.com/maps?q=9.6451072,-83.9155453', '_blank');
    });
    map.on('click', () => {
        window.open('https://www.google.com/maps?q=9.6451072,-83.9155453', '_blank');
    });

    // Control de capas
    const baseMaps = {
        "Estilo Claro (Carto)": cartoLight,
        "Estilo Oscuro (Carto)": cartoDark,
        "OpenStreetMap": openStreetMap,
        "Stamen Toner": stamenToner
    };

    L.control.layers(baseMaps).addTo(map);