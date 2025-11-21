document.addEventListener("DOMContentLoaded", function() {

    const hoje = new Date().toISOString().split('T')[0];
    try {
        document.getElementById("agendar").setAttribute("min", hoje);
    } catch {}

});

document.querySelectorAll(".excluir").forEach(botao => {
        botao.addEventListener("click", function(){
            this.closest("tr").remove();
        });
    });

function validarSenha(event) {
    event.preventDefault(); // Impede o envio do formulário até tudo estar correto

    const nomeInput = document.getElementById("nome");
    const emailInput = document.getElementById("email");
    const senhaInput = document.getElementById("senha");
    const confirmarSenhaInput = document.getElementById("confirmarSenha");
    const check = document.getElementById("confirmacao");
    const label = document.getElementById("labelConfirmacao");

    let formularioValido = true;

    // Função para destacar campos com erro
    function destacarCampo(campo) {
        campo.classList.add("error");
        campo.focus();
        formularioValido = false;
    }

    // Limpa erros ao digitar
    document.querySelectorAll("input, select").forEach(campo => {
        campo.addEventListener("input", () => campo.classList.remove("error"));
    });

    // Verificações
    if (nomeInput.value === "") {
        alert("Você esqueceu de colocar o seu nome!");
        destacarCampo(nomeInput);
    }

    if (emailInput.value === "") {
        alert("Você esqueceu de colocar o email!");
        destacarCampo(emailInput);
    }

    if (senhaInput.value === "") {
        alert("Você esqueceu de colocar a senha!");
        destacarCampo(senhaInput);
    }

    if (confirmarSenhaInput.value === "") {
        alert("Você esqueceu de confirmar a senha!");
        destacarCampo(confirmarSenhaInput);
    }

    if (senhaInput.value !== "" && confirmarSenhaInput.value !== "" && senhaInput.value !== confirmarSenhaInput.value) {
        alert("A senha e a confirmação não são iguais!");
        destacarCampo(confirmarSenhaInput);
    }

    // Validação do checkbox
    if (!check.checked) {
    alert("Você precisa aceitar os termos para continuar.");
    check.classList.add("checkErro");
    label.classList.add("checkErro");
    formularioValido = false;
} else {
    check.classList.remove("checkErro");
    label.classList.remove("checkErro");
}

check.addEventListener("change", () => {
    if (check.checked) {
        check.classList.remove("checkErro");
        label.classList.remove("checkErro");
    }
});



    // Se estiver tudo certo, envia o formulário
    if (formularioValido) {
        alert("Formulário enviado com sucesso!");
        document.querySelector("form").submit();
    }
}


function criar(){
        window.location.href = "pages/criar.html";
}

    function editar(){
        window.location.href = "pages/editar.html";
    }