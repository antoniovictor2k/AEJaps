let idReceberNome = document.getElementById("idReceberNome")

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