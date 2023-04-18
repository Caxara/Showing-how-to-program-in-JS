function aceitar(){
    let sim = document.getElementById('aceitar');
    let resposta = document.getElementById('res');

    let imagem = document.createElement('IMG');
 
    resposta.innerHTML += `É nóis \u{1F44c}`
    resposta.style.color = 'green';
    imagem.setAttribute('src', '/img/snoop.jpg');
    document.getElementById('res').appendChild(imagem);
}


function negar(){
    let nao = document.getElementById('negar')
    let resposta = document.getElementById('res')
    
    let imagem = document.createElement('IMG')
    
    resposta.innerHTML += `Que vacilo \u{1F44E}`
    resposta.style.color = 'yellow';
    imagem.setAttribute('src', '/img/snoosad.jpg');
    document.getElementById('res').appendChild(imagem);
}