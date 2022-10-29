var headedMenu = document.getElementById('headed-items')
var mobileBtn = document.getElementById('mobile-menu')
var openBtn = document.getElementById('open-btn')
var closeBtn = document.getElementById('close-btn')
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