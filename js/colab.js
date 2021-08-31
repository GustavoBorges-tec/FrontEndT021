window.addEventListener("load",()=>{

    const container = document.getElementById("container");
    var estrutura = "<div id='listarColaboradores'>";

    fetch("http://localhost:3350/colaboradores")
    .then((response)=>response.json())
    .then((dados)=>{

        dados.output.map((item)=>{
            estrutura += "<p>" + item.nomecolaborador + "</p>";
            estrutura += "<p>" + item.email + "</p>";
            estrutura += "<p>" + item.telefone + "</p>";
            estrutura += "<p>" + item.usuario + "</p>";
            estrutura += "<p>" + item.cep  + "</p>";
            estrutura += "<p>" + item.profissao + "</p>";
            estrutura += "<p>" + item.senha + "</p>";
            estrutura += "<p>" + item.sexo  + "</p>";
            estrutura += "<p>" + item.nascimento + "</p>";
            estrutura += "<p>" + item.remuneracao + "</p>";
            estrutura += "<p>" + item.datadocadastro + "</p>";
           
            
        estrutura += "</div>";
        estrutura += "</div>";
        });

        estrutura += "</div>";

        container.innerHTML = estrutura;
    })
    .catch((erro)=>console.error("Erro ao carregar Colaboradores "+erro))

})