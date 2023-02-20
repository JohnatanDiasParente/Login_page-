function typeWriter(e) {
    const textoArray = e.innerHTML.split('')
    e.innerHTML = ''
    textoArray.forEach((letra, i) => {
        setTimeout(() => e.innerHTML += letra, 75 * i)
    });
}
const texto = document.querySelector('h1')
typeWriter(texto)