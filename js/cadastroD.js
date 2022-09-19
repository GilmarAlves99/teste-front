const tabela = document.getElementById('tabela');
const botaoSalvar = document.getElementById('botaosalvar');
tabela.style.display = 'none'
botaoSalvar.style.display = 'none'
function AbrirConsulta() {
    tabela.style.display = 'block'

}
function IncluirConsulta() {

    tabela.style.display = 'block'
    botaoSalvar.style.display = 'block'

    var corpoTabelaCodigo = document.querySelector('#codigo');
    var corpoTabelaDes = document.querySelector('#descricao');

    corpoTabelaCodigo.innerHTML = "<input>";
    corpoTabelaDes.innerHTML = "<input  style='width:90%'>";


    botaoSalvar.addEventListener("click", () => {

        alert('salvo')
    })


}

function ExcluirConsulta() {
    botaoSalvar.style.display = 'block'
    tabela.style.display = 'block'
    botaoSalvar.addEventListener("click", () => {

        alert('Excluido com sucesso')
    })

}