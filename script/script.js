const menuBtn = document.querySelector('.left-nav .fa-bars')
const closeBtn = document.querySelector('.left-nav .fa-times')
const leftMenu = document.querySelector('.left-menu')
const catalog = document.querySelector('.catalog')
const subMenuItems = document.querySelectorAll('.sub-menu li:not(:first-child)')
console.log(subMenuItems)

function toggleMenu() {
    menuBtn.classList.toggle('open')
    let currentMenuItem

    if (menuBtn.classList.contains('open')) {
        catalog.style.display = 'none'
        leftMenu.style.height = '100%'
        leftMenu.style.width = '100%'
        menuBtn.style.display = 'none'
        closeBtn.style.display = 'block'
        subMenuItems.forEach(function (item) {
            currentMenuItem = item
            currentMenuItem.style.display = 'flex'
        })
    } else {
        menuBtn.style.display = 'block'
        closeBtn.style.display = 'none'
        subMenuItems.forEach(function (item) {
            currentMenuItem = item
            currentMenuItem.style.display = ''
        })
        catalog.style.display = ''
        leftMenu.style.height = ''
    }
}

menuBtn.addEventListener('click', toggleMenu)
document
    .querySelector('.left-nav .fa-times')
    .addEventListener('click', toggleMenu)
