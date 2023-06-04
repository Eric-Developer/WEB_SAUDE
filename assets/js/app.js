
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

 
