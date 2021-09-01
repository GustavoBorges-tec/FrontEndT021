window.addEventListener("load",() => {


    const container = document.getElementById("container");
    var estrutura = "<div id='listarNoticias'>";

    fetch("http://localhost:3350/noticias")
        .then((response) => response.json())
        .then((dados) => {
           dados.output.map((item=>{
           estrutura += "<div id='titulo'>";
           estrutura += "<h2>"+item.texto+"</h2>";
           estrutura += "<div id='autor'>";
           estrutura += "<p>"+item.datadepublicacao+"</p>";
           estrutura += "<div id='imagens'><img src="+item.imagens+">";
           estrutura += "</div>";
           estrutura += "</div>";
           }));
           
           estrutura += "</div>";
           container.innerHTML = estrutura;
        })
        .catch((erro) => console.error("Erro ao carregar noticias " + erro));
});