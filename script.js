function aceitar(){
    let sim = document.getElementById('aceitar');
    let resposta = document.getElementById('res');

    let imagem = document.createElement('IMG');
 
    resposta.innerHTML += `É NóÓóóóÓiis \u{1F44c}`
    imagem.setAttribute('src', './img/snoop.jpg');
    document.getElementById('res').appendChild(imagem);
}


function negar(){
    let nao = document.getElementById('negar')
    let resposta = document.getElementById('res')
    
    let imagem = document.createElement('IMG')
    
    resposta.innerHTML += `Que vacilo affs \u{1F44E}`
    
    imagem.setAttribute('src', './img/snoosad.jpg');
    document.getElementById('res').appendChild(imagem);
}