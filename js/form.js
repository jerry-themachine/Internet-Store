var form = document.getElementById('form');
var nome = document.getElementById('nome');

form.addEventListener('submit', function(name){
    alert(`\u2605 Olá ${nome.value}! \u2605  \n Seu cadastro foi efetuado com sucesso. \n A contratação do plano escolhido está sob análise. \n Aguarde o retorno de um dos nossos consultores. \n\n Obrigado pela visita!`);
    document.getElementById('form').reset();
    name.preventDefault();
});