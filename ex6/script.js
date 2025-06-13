let mostraResultado = document.querySelector("#resultado");
let inscritos = 0;
let times = 0;

function inscrever(){

    inscritos += 1;
    times = parseInt(inscritos /3);

    mostraResultado.innerHTML =`<p> Número de inscritos: ${inscritos}</p><p>Números de times: ${times}.</p>`;

    if(times >=4){
        alert("é possível iniciar o campeonato, pois temos 4 equipes!")
    }
}