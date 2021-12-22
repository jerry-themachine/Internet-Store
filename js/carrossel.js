var btns = document.querySelectorAll('.utilidades-artigos-slider-item');

// Percorre todos os botoes controladores
btns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    

    // Remove classe 'ativo' dos outros botoes
    btns.forEach(function(btnRemoveClass) {
      btnRemoveClass.classList.remove('utilidades-artigos-slider-item--ativo')
    })

    this.classList.add('utilidades-artigos-slider-item--ativo')
  })
})