const btnMobile = document.getElementById('botao-mobile')
const itemLista = document.getElementById('menu-web')

const nome = document.getElementById('nome_escrito')
const text = 'André Luis'
const intervalo = 150

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefalt() // previnindo o mobile de dar um clipe duplo ao abrir o menu
    const nav = document.getElementById('navegar')
    nav.classList.toggle('active')

}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)  //para mobile

itemLista.addEventListener('click', toggleMenu)



//função para escrever nome no inicio

function showText (nome, text, intervalo){
    const char = text.split('').reverse()

    const escritor = setInterval(()=>{
        if(!char.length){
            return clearInterval(escritor)
        }

        const proximo = char.pop()

        nome.innerHTML += proximo

        console.log(name)

    }, intervalo)
}

showText(nome, text, intervalo)