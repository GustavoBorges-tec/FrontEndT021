const btncolaborador = document.getElementById("btnColaborador");

btncolaborador.onclick = ()=>{
    const nomecolaborador = document.getElementById("nomecolaborador");
    const email = document.getElementById("email");
    const telefone = document.getElementById("telefone");
    const usuario = document.getElementById("usuario");
    const cep = document.getElementById("cep");
    const profissao = document.getElementById("profissao");
    const senha = document.getElementById("senha");
    const sexo  = document.getElementById("sexo");
    const nascimento  = document.getElementById("nascimento");
    const remuneracao = document.getElementById("remuneracao");
    const datadocadastro = document.getElementById("datadocadastro");

    fetch("http://localhost:3350/colaborador/cadastro",{
        method:"POST",
        headers:{
            accept:"application/json",
            "content-type":"application/json"
        },
        body:JSON.stringify({
            nomecolaborador:nomecolaborador.value,
            email:email.value,
            telefone:telefone.value,
            usuario:usuario.value,
            cep :cep.value,
            profissao: profissao.value,
            senha: senha.value,
            sexo: sexo.value,
            nascimento: nascimento.value,
            remuneracao: remuneracao.value,
            datadocadastro: datadocadastro.value
        })
    })
    .then((response)=>response.json())
    .then((rs)=>{
    alert("Colaboradores cadastrado com sucesso!");
    nomecolaborador.value = "";
    email.value = "";
    telefone.value = "";
    usuario.value = "";
    cep.value = "";
    profissao.value = "";
    senha.value = "";
    sexo.value = "";
    nascimento.value = "";
    remuneracao.value = "";
    datadocadastro.value = ""
    })
    .catch((erro)=>console.error("Erro ao tentar cadastrar -> "+erro));
}