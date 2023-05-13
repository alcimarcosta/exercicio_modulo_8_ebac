let inputNome = document.getElementById('nome');
let inputTelefone = document.getElementById('telefone');
const form = document.getElementById('formulario');
let contatos = [];
let telefones = [];
let tdTabela = '';
let tdList = []

form.addEventListener('submit', function(e){
    e.preventDefault();
    inserirContato();
});

function inserirContato(){

    if (contatos.includes(inputNome.value)){
        alert('Contato com este nome já está cadastrado!');
    } else if (telefones.includes(inputTelefone.value)){
        alert('Telefone informado já está cadastrado!')
    } else {
        armazenarContatos();

        tdTabela = '<tr>';
        tdTabela += `<td>${inputNome.value}</td>`;
        tdTabela += `<td>${inputTelefone.value}</td>`;
        tdTabela += '</tr>'

        tdList += tdTabela; 

        atualizaTabela();
    }
    
}

function armazenarContatos(){
    contatos.push(inputNome.value);
    telefones.push(inputTelefone.value);
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = tdList;
}

function zerarInputs(){
    inputNome.value = '';
    inputTelefone.value = '';
}
