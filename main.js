const btd = document.querySelector('#btd');


btd.addEventListener('click', function (e) {
    e.preventDefault(); 

    const coresFundo = ['red', 'green', 'yellow', 'white', 'blue', 'pink', 'gray', 'orange'];
    const coresP =  ['red', 'green', 'yellow', 'white', 'blue', 'pink', 'gray', 'orange'];

    const contaAleatoria = Math.floor(Math.random() * coresFundo.length);
    const contaAleatoriaP = Math.floor(Math.random() * coresP.length);

    const AleatorioFundo = coresFundo[contaAleatoria];
    const AleatorioP     = coresP[contaAleatoriaP];

    document.body.style.background = AleatorioFundo;
    document.body.style.color      = AleatorioP;
})