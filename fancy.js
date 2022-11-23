const welcome = document.querySelector(".welcome")
const fancyColors = (el) => {
    setInterval(() => {
        const rand1 = Math.floor(Math.random() * 255)
        const rand2 = Math.floor(Math.random() * 255)
        const rand3 = Math.floor(Math.random() * 255)
        el.style.color = `rgb(${rand1}, ${rand2}, ${rand3})`
    }, 500)
}
fancyColors(welcome)