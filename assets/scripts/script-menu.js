

const btnMobile = document.getElementById("btn-mobile");


btnMobile.addEventListener('click', toogleMenu); 
btnMobile.addEventListener('touchstart', toogleMenu);

function toogleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const containerMenu = document.getElementById("container-menu");
    containerMenu.classList.toggle('active');
    const active = containerMenu.classList.contains('active');
    event.currentTarget.setAttribute("aria-expanded", active);
    if (active) {
        event.currentTarget.setAttribute('arial-label', 'Fechar Menu')
    } else {
        event.currentTarget.setAttribute('arial-label', 'Abrir Menu')
    }
}

