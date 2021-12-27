let campoNome = document.getElementById('nome');
let campoEmail = document.getElementById('e-mail');
let campoTelefone = document.getElementById('telefone');
let campoCep = document.getElementById('cep');
let campoEndereco = document.getElementById('endereco');
let campoBairro  = document.getElementById('bairro');
let campoCidade  = document.getElementById('cidade');
let campoEstado  = document.getElementById('estado');
let campoPlano  = document.getElementById('plano');
let campoMensagem  = document.getElementById('mensagem');
let campoContrato  = document.getElementById('contrato');

campoNome.oninvalid = function () {
    this.setCustomValidity('');
    if(!this.validity.valid){
        this.setCustomValidity(`Preencha o seu nome para continuar`);
    }
};

campoEmail.oninvalid = function () {
    this.setCustomValidity('');
    if(!this.validity.valid){
       this.setCustomValidity(`${campoNome.value} preencha o campo e-mail para continuar o cadastro`);
    }
};

campoTelefone.oninvalid = function () {
    this.setCustomValidity('');
    if(!this.validity.valid){
        this.setCustomValidity(`${campoNome.value} preencha o campo telefone com DDD para continuar o cadastro`);
    }
};

campoCep.oninvalid = function () {
    this.setCustomValidity('');
    if(!this.validity.valid){
        this.setCustomValidity(`${campoNome.value} preencha o campo cep para continuar o cadastro`);
    }
};

campoEndereco.oninvalid = function () {
    this.setCustomValidity('');
    if(!this.validity.valid){
        this.setCustomValidity(`${campoNome.value} preencha o campo endereço para continuar o cadastro`);
    }
};

campoBairro.oninvalid = function () {
    this.setCustomValidity('');
    if(!this.validity.valid){
        this.setCustomValidity(`${campoNome.value} preencha o campo bairro para continuar o cadastro`);
    }
};

campoCidade.oninvalid = function () {
    this.setCustomValidity('');
    if(!this.validity.valid){
        this.setCustomValidity(`${campoNome.value} preencha o campo cidade para continuar o cadastro`);
    }
};

campoEstado.oninvalid = function () {
    this.setCustomValidity('');
    if(!this.validity.valid){
        this.setCustomValidity(`${campoNome.value} preencha o campo estado para continuar o cadastro`);
    }
};

campoPlano.oninvalid = function () {
    this.setCustomValidity('');
    if(!this.validity.valid){
        this.setCustomValidity(`${campoNome.value} escolha o plano que mais lhe atende para continuar o cadastro`);
    }
};

campoMensagem.oninvalid = function () {
    this.setCustomValidity('');
    if(!this.validity.valid){
        this.setCustomValidity(`${campoNome.value} insira uma mensagem para continuar o cadastro`);
    }
};

campoContrato.oninvalid = function () {
    this.setCustomValidity('');
    if(!this.validity.valid){
        this.setCustomValidity(`${campoNome.value} após ler o contrato, dê um aceite para continuar o cadastro`);
    }
};