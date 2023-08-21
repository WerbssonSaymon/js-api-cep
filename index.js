// Variaveis dos inputs
const i_cep = document.getElementById("i_cep");
const i_logradouro = document.getElementById("i_logradouro");
const i_complemento = document.getElementById("i_complemento");
const i_bairro = document.getElementById("i_bairro");
const i_localidade = document.getElementById("i_localidade");
const i_uf = document.getElementById("i_uf");
const i_ibge = document.getElementById("i_ibge");
const i_gia = document.getElementById("i_gia");
const i_ddd = document.getElementById("i_ddd");
const i_siafi = document.getElementById("i_siafi");


// Função para acessar a API e apresentar os dados no index.html
function buscarCep() {
    const endpoint = `https://viacep.com.br/ws/${i_cep.value}/json/`;
    fetch(endpoint)
    .then(res => res.json())
    .then(dados => {
        i_logradouro.value = dados.logradouro; 
        i_complemento.value = dados.complemento;
        i_bairro.value = dados.bairro;
        i_localidade.value = dados.localidade;
        i_uf.value = dados.uf;
        i_ibge.value = dados.ibge;
        i_gia.value = dados.gia;
        i_ddd.value = dados.ddd;
        i_siafi.value = dados.siafi;
}).catch(error => alert("Erro ao consultar CEP:", error));
}
