  
const btnCadastrar = document.getElementById("btnCadastrar");

btnCadastrar.onclick = ()=>{
    const nomecliente = document.getElementById("nomecliente");
    const email = document.getElementById("email");
    const telefone = document.getElementById("telefone");
    const assunto = document.getElementById("assunto");
    

    fetch("http://localhost:3350/contato/cadastro",{
        method:"POST",
        headers:{
            accept:"application/json",
            "content-type":"application/json"
        },
        body:JSON.stringify({
            nomecliente:nomecliente.value,
            email:email.value,
            telefone:telefone.value,
            assunto:assunto.value
           
        })
    })
    .then((response)=>response.json())
    .then((rs)=>{
    alert("Contato cadastrado");
    nomecliente.value = "";
    email.value = "";
    telefone.value = "";
    assunto.value = ""
    
    })
    .catch((erro)=>console.error("Erro ao enviar mensagem "+erro));
}