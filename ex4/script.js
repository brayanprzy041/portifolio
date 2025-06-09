function media () {
    let nota1 = Number(window.prompt("Digite a primeira nota: "));
    let nota2 = Number(window.prompt("Digite a segunda nota: "));
    let nota3 = Number(window.prompt("Digite a terceira nota: "));


    let media = (nota1 + nota2 + nota3) / 3;

    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = `<p>O resultado é ${media}</p>`
    
    console.log (resultado)


  if (media >= 60) {
     let resultado = document.querySelector('#resultado');
    resultado.innerHTML = `<h2><p> Você já está na media </p>`;
    

    } else {
        let sobra = 60 - media

         let resultado = document.querySelector('#resultado');
    resultado.innerHTML = `<h2><p>Você ainda não está na media, ainda faltam${sobra} pontos</p></h2>`;
    
      
    }

}
