
        function clickMenu(){
    if(itens.style.display == 'block'){
    itens.style.display = 'none';
    }
   else{
    itens.style.display = 'block';
   }

        }

        const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event){
    if(event.type === 'touchstart'){
        event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    constactive = nav.classList.contains('active')
    }
 
}

      
btnMobile.addEventListener('click',toggleMenu);
btnMobile.addEventListener('touchstart',toggleMenu);


 //Script do mapa
 var map = L.map('mapa').setView([-7.08484,-41.47252], 20);

 L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
 }).addTo(map);

 L.marker([-7.08484,-41.47252]).addTo(map)
     .bindPopup('Localização')
     .openPopup();


