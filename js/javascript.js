let idReceberNome = document.getElementById("idReceberNome")
let idReceberNomeConversa = document.getElementById("idReceberNomeConversa")


function funcaoteste () {
    let nome = idReceberNome.value;

if (nome == ""){
    alert("Preenchimento do usuário é obrigatório para envio da solicitação de amizade");
    idReceberNome.focus();
    return;
}
alert("Solicitação de amizade enviada com sucesso para: " + nome)


idReceberNome.value="";

}

function funcaoteste2 () {
    let nome2 = idReceberNomeConversa.value;

if (nome2 == ""){
    alert("Preenchimento da conversa é obrigatório para localizar");
    idReceberNomeConversa.focus();
    return;
}
alert('Conversa não encontrada: "' + nome2 +'"')


idReceberNomeConversa.value="";

}
idReceberNomeConversa.addEventListener("keypress" , function(event)
  {if (event.keyCode == 13){
   
    funcaoteste2();
} 
}
  )
idReceberNome.addEventListener("keypress" , function(event)
  {if (event.keyCode == 13){
    
    funcaoteste();
} 
}
  )