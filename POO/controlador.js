let amigoResultado = document.getElementById("amigoResultado");





function carregarListarDeAmigos() {
    amigoResultado.innerHTML = "";
    for (let i = 0; i < listaDeAmigos.length; i++) {
        let AmigosEmHTML = "";
        
        AmigosEmHTML += `<div class="divSobrar"><div class="divImgMini"><img src="img/${listaDeAmigos[i].imgOnline}" class="imgMini"></div><img src="img/${listaDeAmigos[i].imgAvatar}" class="imgPadrao">
<div class="amigonome">${listaDeAmigos[i].nome}</div><div class="amigomensagem">${listaDeAmigos[i].mensagem}</div>
</div>`;

        

amigoResultado.innerHTML += AmigosEmHTML

    }
}

