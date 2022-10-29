

let headedMenu = document.getElementById('headed-items')
let mobileBtn = document.getElementById('mobile-menu')
let openBtn = document.getElementById('open-btn')
let closeBtn = document.getElementById('close-btn')
mobileBtn.onclick = function () {
    var isOpen = headedMenu.clientHeight == 250
    if (isOpen) {
        headedMenu.style.display = 'none'
        closeBtn.style.display = 'none'
        openBtn.style.display = 'block'
    } else {
        headedMenu.style.display = 'block'
        openBtn.style.display = 'none'
        closeBtn.style.display = 'block'
    }
}