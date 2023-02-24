function voltarPagina() {
    document.querySelector('.back-button').classList.add('blink'); // adiciona classe 'blink' ao botão de voltar
    setTimeout(function() {
      document.querySelector('.back-button').classList.remove('blink'); // remove classe 'blink' do botão de voltar após 2 segundos
      window.history.back(); // volta para a página anterior
    }, 2000);
  }