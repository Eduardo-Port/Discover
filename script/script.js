function toggleMode() {
    const element = document.documentElement
    element.classList.toggle('light')

    const img = document.querySelector("img:nth-child(1)")
    if(element.classList.contains('light')) {
        img.setAttribute('src', '/img/avatar-light.svg')
        img.setAttribute('alt', 'DARK MODE')
    } else {
        img.setAttribute('src', '/img/avatar-dark.svg')
    }
}