const menuBtn = document.querySelector('.menu-btn')
const closeBtn = document.querySelector('.close-icon')
const leftMenu = document.querySelector('.left-menu')
const leftNav = document.querySelector('.left-nav')
const catalog = document.querySelector('.catalog')

function toggleMenu() {
    menuBtn.classList.toggle('open')

    if (menuBtn.classList.contains('open')) {
        catalog.style.display = 'none'
        leftMenu.style.height = '100%'
        leftMenu.style.width = '100%'
        menuBtn.style.display = 'none'
        closeBtn.style.display = 'block'
    } else {
        menuBtn.style.display = 'block'
        closeBtn.style.display = 'none'
        leftNav.style.display = ''
        catalog.style.display = ''
        leftMenu.style.height = ''
    }
}

// Event listeners
menuBtn.addEventListener('click', toggleMenu)
document.querySelector('.close-icon').addEventListener('click', toggleMenu)
