function validarSenha() {
    const nomeInput = document.getElementById("nome");
    const emailInput = document.getElementById("email");
    const cpfInput = document.getElementById("cpf");
    const telefoneInput = document.getElementById("telefone");
    const senhaInput = document.getElementById("senha");

    if (nomeInput.value === "") {
        alert("Você esqueceu de colocar o seu nome!");
        destacarCampo(nomeInput);
        return false;
    }
        
        if (emailInput.value === "") {
            alert("Você esqueceu de colocar o email!");
            destacarCampo(emailInput);
            return false;
        }
        
        if (cpfInput.value === "") {
            alert("Você esqueceu de colocar o CPF!");
            destacarCampo(cpfInput);
            return false;
        }
    
        if (telefoneInput.value === "") {
            alert("Você esqueceu de colocar o telefone!");
            destacarCampo(telefoneInput);
            return false;
        }

    if (senhaInput.value === "") {
        alert("Você esqueceu de colocar o senha!");
        destacarCampo(senhaInput);
        return false;
    }

    document.querySelectorAll("input, select").forEach(campo => {
    campo.addEventListener("input", () => {
        if (campo.value !== "") {
            campo.classList.remove("error");
        }
    });
});

        // Função para destacar o campo com foco e borda vermelha
    function destacarCampo(campo) {
    campo.focus();

    if (campo.value == "") {
        campo.classList.add("error"); // Adiciona borda vermelha
    } else {
        campo.classList.remove("error"); // Remove assim que o usuário preencher
    }
}

    alert("Cadastro realizado com sucesso!");
    return true;
}
