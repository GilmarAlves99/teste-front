const tabela = document.getElementById('tabela');
const botaoSalvar = document.getElementById('botaosalvar');
const resultado = document.getElementById('result');



tabela.style.display = 'none'
botaoSalvar.style.display = 'none'
function AbrirConsulta() {
    tabela.style.display = 'block'
    botaoSalvar.style.display = 'none'
    inputCod.style.display = 'none'
    inputDes.style.display = 'none'
    resultado.innerHTML = '';

}
function IncluirConsulta() {

    tabela.style.display = 'block'
    botaoSalvar.style.display = 'block'

    const corpoTabela = document.querySelector('#tbody');

    corpoTabela.innerHTML =
        `<tr>
    <td id='codigo'></td>
    <td id='descricao'></td>
    </tr>`
    const corpoCod = document.querySelector('#codigo');
    const corpoDes = document.querySelector('#descricao');

    corpoCod.innerHTML = "<input id='inputCod'>";
    corpoDes.innerHTML = "<input id='inputDes' style='width:100%'>";
    const inputCod = document.querySelector('#inputCod');
    const inputDes = document.querySelector('#inputDes');

    resultado.innerHTML = '';

    botaoSalvar.innerHTML = 'Adicionar'
    botaoSalvar.addEventListener("click", (e) => {
        e.preventDefault();
        resultado.innerHTML = 'Adicionado com sucesso';

        inputCod.value = '';
        inputDes.value = '';
    })

}



function AlterarConsulta() {
    botaoSalvar.style.display = 'block'
    botaoSalvar.innerHTML = 'Alterar'
    tabela.style.display = 'block'
    inputCod.style.display = 'none'
    inputDes.style.display = 'none'
    resultado.innerHTML = '';
    botaoSalvar.addEventListener("click", (e) => {
        e.preventDefault();
        resultado.innerHTML = 'Alterado com sucesso';

    })

}
function ExcluirConsulta() {
    botaoSalvar.style.display = 'block'
    tabela.style.display = 'block'
    resultado.innerHTML = '';
    inputCod.style.display = 'none'
    inputDes.style.display = 'none'
    botaoSalvar.innerHTML = 'Excluir'
    botaoSalvar.addEventListener("click", (e) => {
        e.preventDefault();
        resultado.innerHTML = 'Excluido com sucesso';

    })

}


