function troca() {

    let r = Math.floor(Math.random()*255),
    g = Math.floor(Math.random()*255),
    b = Math.floor(Math.random()*255); //regrinha para aleatorizar

    document.body.style.backgroundColor = 'rgb('+r+','+g+', '+b+')'; //chamando as variaveis para criar a cor
}