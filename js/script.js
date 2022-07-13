const btnMobile = document.getElementById('botao-mobile')
const itemLista = document.getElementById('menu-web')

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefalt() // previnindo o mobile de dar um clipe duplo ao abrir o menu
    const nav = document.getElementById('navegar')
    nav.classList.toggle('active')

}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)  //para mobile

itemLista.addEventListener('click', toggleMenu)
