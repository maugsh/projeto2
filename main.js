const form = document.getElementById('form-atividade');
let linhas = '';
const nomes = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nomeLista = document.getElementById('nome');
    const numeroLista = document.getElementById('numero');

    let linha = '<tr>';
    linha += `<td>${nomeLista.value}</td>`;
    linha += `<td>${numeroLista.value}</td>`;
    linha += `</tr>`;

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
})