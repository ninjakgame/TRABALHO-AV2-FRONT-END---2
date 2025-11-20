document.addEventListener("DOMContentLoaded", function() {

    const hoje = new Date().toISOString().split('T')[0];
    try {
        document.getElementById("agendar").setAttribute("min", hoje);
    } catch {}

    document.querySelectorAll(".excluir").forEach(botao => {
        botao.addEventListener("click", function(){
            this.closest("tr").remove();
        });
    });

});

function criar(){
        window.location.href = "pages/criar.html";
    }

    function editar(){
        window.location.href = "pages/editar.html";
    }