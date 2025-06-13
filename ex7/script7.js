let mostraResultado = document.querySelector("#resultado");
let inscritos = 0;
let times = 0;

function cliques(){

    inscritos += 1;
    times = parseInt( inscritos);

    mostraResultado.innerHTML =`<p> Número de cliques: ${inscritos}</p><p>Números de times: ${times}.</p>`;

    if(times >=10){
        
        ("é possível iniciar o campeonato, pois temos 4 equipes!")
    }r
}

function zerar(){

}
