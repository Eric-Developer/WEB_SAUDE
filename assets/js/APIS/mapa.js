
//Script do mapa

var map = L.map('mapa').setView([-7.08484,-41.47252], 20);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-7.08484,-41.47252]).addTo(map)
    .bindPopup('Localização')
    .openPopup();

