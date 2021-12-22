// Variáveis
var btnAbreDialog1 = document.querySelector('#abrir-dialog1');
var btnAbreDialog2 = document.querySelector('#abrir-dialog2');
var btnAbreDialog3 = document.querySelector('#abrir-dialog3');
var btnAbreDialog4 = document.querySelector('#abrir-dialog4');
var btnAbreDialog5 = document.querySelector('#abrir-dialog5');
var btnAbreDialog6 = document.querySelector('#abrir-dialog6');
var dialog = document.querySelector('.dialog');


// Abrir dialog 1
btnAbreDialog1.addEventListener('click', function() {
  dialog.classList.add('dialog--aberto');
});

function fechandoDialog() {
  document.activeElement.blur();
  dialog.classList.remove('dialog--aberto');     
}

// Listeners
document.querySelector('.dialog-fechar').addEventListener('click', fechandoDialog);


// Abrir dialog 2
btnAbreDialog2.addEventListener('click', function() {
  dialog.classList.add('dialog--aberto');
});

function fechandoDialog() {
  document.activeElement.blur();
  dialog.classList.remove('dialog--aberto');     
}

// Listeners
document.querySelector('.dialog-fechar').addEventListener('click', fechandoDialog);



// Abrir dialog 3
btnAbreDialog3.addEventListener('click', function() {
  dialog.classList.add('dialog--aberto');
});

function fechandoDialog() {
  document.activeElement.blur();
  dialog.classList.remove('dialog--aberto');     
}

// Listeners
document.querySelector('.dialog-fechar').addEventListener('click', fechandoDialog);



// Abrir dialog 4
btnAbreDialog4.addEventListener('click', function() {
  dialog.classList.add('dialog--aberto');
});

function fechandoDialog() {
  document.activeElement.blur();
  dialog.classList.remove('dialog--aberto');     
}

// Listeners
document.querySelector('.dialog-fechar').addEventListener('click', fechandoDialog);



// Abrir dialog 5
btnAbreDialog5.addEventListener('click', function() {
  dialog.classList.add('dialog--aberto');
});

function fechandoDialog() {
  document.activeElement.blur();
  dialog.classList.remove('dialog--aberto');     
}

// Listeners
document.querySelector('.dialog-fechar').addEventListener('click', fechandoDialog);



// Abrir dialog 6
btnAbreDialog6.addEventListener('click', function() {
  dialog.classList.add('dialog--aberto');
});

function fechandoDialog() {
  document.activeElement.blur();
  dialog.classList.remove('dialog--aberto');     
}

// Listeners
document.querySelector('.dialog-fechar').addEventListener('click', fechandoDialog);