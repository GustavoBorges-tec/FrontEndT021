const btnCadastrar = document.getElementById("btnCadastrar");

btnCadastrar.onclick = ()=>{
    const datadapublicacao = document.getElementById("datadapublicacao");
    const texto = document.getElementById("texto");
    const foto1 = document.getElementById("foto1");
    const foto2 = document.getElementById("foto2");
    const autor = document.getElementById("autor");

    fetch("http://localhost:3350/noticias/cadastro",{
        method:"POST",
        headers:{
            accept:"application/json",
            "content-type":"application/json"
        },
        body:JSON.stringify({
            datadepublicacao:datadepublicacao.value,
            texto:texto.value,
            foto1:foto1.value,
            foto2:foto2.value,
            autor:autor.value
        })
    })
    .then((response)=>response.json())
    .then((rs)=>{
    alert("Notícia cadastrada");
    datadepublicacao.value = "";
    texto.value = "";
    foto1.value = "";
    foto2.value = "";
    autor.value = ""
    })
    .catch((erro)=>console.error("Erro ao tentar cadastrar a notícia "+erro));
}