var btnEnvia = document.getElementById('dialog-btn');
var email = document.getElementById('email');
var btnFechar = document.getElementById('fechar');


btnEnvia.addEventListener('submit', function(btn){
    alert(`Enviamos uma proposta de venda no e-mail: \n ${email.value}`);
    document.getElementById('dialog-btn').reset();    
    btn.preventDefault();
})

btnFechar.addEventListener('click', function(close) {
    location.reload();
    close.preventDefault();
    this.parentNode.style.display = 'none';
}, false);


