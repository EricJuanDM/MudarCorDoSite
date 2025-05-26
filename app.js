const switcher = document.querySelector('.botão');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('tema-preto');

    var className = document.body.className;
    if (className == "tema-preto") {
        this.textContent = "Tema claro";
    } else {
        this.textContent = "Tema escuro";
    }
    console.log('Current class name: ' + className);
});
