
document.addEventListener("DOMContentLoaded", () => {
    let amigos = [];

    document.querySelector(".button-add").addEventListener("click", adicionarAmigo);
    document.querySelector(".button-draw").addEventListener("click", sortearAmigo);

    function adicionarAmigo() {
        const input = document.getElementById("amigo");
        const nome = input.value.trim();

        if (nome === "") {
            alert("Por favor, insira o nome dos participantes.");
            return;
        }

        amigos.push(nome);
        atualizarLista();
        input.value = "";
    }

    function atualizarLista() {
        const lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";

        amigos.forEach(nome => {
            const li = document.createElement("li");
            li.textContent = nome;
            lista.appendChild(li);
        });
    }

    function sortearAmigo() {
        if (amigos.length === 1) {
            alert("Adicione pelo menos dois nome para realizar o sorteio!");
            return;
        }

        const indiceSorteado = Math.floor(Math.random() * amigos.length);
        const nomeSorteado = amigos[indiceSorteado];

        const resultado = document.getElementById("resultado");
        resultado.innerHTML = `<li>O seu amigo secreto é: <strong>${nomeSorteado}</strong></li>`;
    }
});
