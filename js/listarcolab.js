window.addEventListener("load",()=>{
    
    const container = document.getElementById("container");

    var estrutura = "";

    fetch("http://localhost:3350/colaboradores")
    .then((response)=>response.json())
    .then((rs)=>{
        rs.output.map((item)=>{
            estrutura+="<div id='linha'>";
            estrutura+= "<div id='nomecolaborador'>" + item.nomecolaborador + "</div>";
            estrutura+= "<div id='email'>" + item.email + "</div>"; 
            estrutura+= "<div id='telefone'>" + item.telefone + "</div>";
            estrutura+= "<div id='usario'>" + item.usuario + "</div>";
            estrutura+= "<div id='cep'>" + item.cep + "</div>";
            estrutura+= "<div id='profissao'>" + item.profissao + "</div>";
            estrutura+= "<div id='senha'>" + item.senha + "</div>";
            estrutura+= "<div id='sexo'>" + item.sexo + "</div>";
            estrutura+= "<div id='senha'>" + item.senha  + "</div>";
            estrutura+= "<div id='nascimento'>" + item.nascimento + "</div>";
            estrutura+= "<div id='remuneracao'>" + item.remuneracao + "</div>";
            estrutura+= "<div id='datadocadastro'>" + item.datadocadastro + "</div>";
            estrutura+="<div id='atualizar'><a href=atualizar.html?"+item._id+">Atualizar</a></div>";
            estrutura+="<div id='apagar'><a href=apagar.html?"+item._id+">Apagar</a></div>";
            estrutura+="</div>";
        })
        container.innerHTML = estrutura;
    })
    .catch((erro)=>console.error("Erro ao tentar listar os Colaboradores -> "+erro));

});
           