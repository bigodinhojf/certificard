const telaInicial = document.querySelector('.pagina-inicial')
const telaFormacao = document.querySelector('.formacao')
const telaInsignias = document.querySelector('.insignias')

function insignias() {
  telaInicial.style.display = 'none'
  telaInsignias.style.display = 'block'
}

function formacao(){
  telaInicial.style.display = 'none'
  telaFormacao.style.display = 'block'
}

function voltar(){
  telaInicial.style.display = 'block'
  telaFormacao.style.display = 'none'
  telaInsignias.style.display = 'none'
}
