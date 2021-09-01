const btnAtualizar = document.getElementById("btnAtualizar");

window.addEventListener("load",()=>{
    var id = window.location.search;
    id = id.substring(1,id.length);

    fetch("http://localhost:3350/noticias/"+id)
    .then((response)=>response.json())
    .then((rs)=>{
        document.getElementById("titulo").value=rs.output.titulo;
        document.getElementById("datadepublicacao")=rs.output.datadepublicacao;
        document.getElementById("texto").value=rs.output.texto;
        document.getElementById("autor").value = rs.output.autor;
        document.getElementById("foto1").value = rs.output.img1;
        document.getElementById("foto2").value=rs.output.img2;
    })
    .catch((erro)=>console.error("Erro ao tentar carregar os dados -> "+erro))
});

btnAtualizar.onclick = ()=>{
    var id = window.location.search;
    id = id.substring(1,id.length);

    const titulo = document.getElementById("titulo");
    const datadepublicacao = document.getElementById("datadepublicacao");
    const texto = document.getElementById("texto");
    const autor = document.getElementById("autor");
    const foto1 = document.getElementById("foto1");
    const foto2 = document.getElementById("foto2");

    fetch("http://localhost:3350/atualizar/"+id,{
        method:"PUT",
            headers:{
                accept:"application/json",
                "content-type":"application/json"
            },
            body:JSON.stringify({
                titulo:titulo.value,
                datadepublicacao:datadepublicacao.value,
                texto: texto.value,
                autor: autor.value,
                foto1:foto1.value,
                foto2:foto2.value
            })
    })
    .then((response)=>response.json())
    .then((rs)=>{
        alert(rs.output);
        titulo.value = "";
        datadepublicacao.value = "";
        texto.value ="";
        autor.value = "";
        foto1.value = "";
        foto2.value = ""
    })
    .catch((erro)=>console.log("Erro ao tentar atualizar a notícia -> "+erro))
}
