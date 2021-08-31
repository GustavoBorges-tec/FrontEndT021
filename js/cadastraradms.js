const btnCadastrar = document.getElementById("btnCadastrar");

btnCadastrar.onclick = ()=>{
    const nomeadm = document.getElementById("nomeadmin");
    const email = document.getElementById("email");
    const loginusuario = document.getElementById("loginusuario");
    const senhausuario = document.getElementById("senhausuario");
    

    fetch("http://localhost:3350/adm/cadastro",{
        method:"POST",
        headers:{
            accept:"application/json",
            "content-type":"application/json"
        },
        body:JSON.stringify({
            nomeadmin:nomeadm.value,
            email:email.value,
            loginusuario:loginusuario.value,
            senhausuario:senhausuario.value
            
        })
    })
    .then((response)=>response.json())
    .then((rs)=>{
    alert("ADM cadastrado");
    nomeadm.value = "";
    email.value = "";
    loginusuario.value = "";
    senhausuario.value = ""
    
    })
    .catch((erro)=>console.error("Erro ao tentar cadastrar ADM  "+erro));
}