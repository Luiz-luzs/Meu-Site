function togglemode(){
  const html = document.documentElement
  /*if(html.classList.contains('light')){
    html.classList.remove('light')
  } else{
    html.classList.add('light')
  } */

  /* SIMPLIFICANDO A FUNÇÃO ACIMA */
  html.classList.toggle('light')
  

  // PEGAR A TAG IMG
  const img = document.querySelector('#profile img')

  // SUBSTITUIR A IMG 
  if (html.classList.contains("light")) {
    //SE TIVER LIGHT MODE, ADICIONAR A IMAGEM LIGHT
    img.setAttribute("src", "./assets/img-avatar.png")
    img.setAttribute( "alt", "Foto do luiz com oculos escuro, blusa regata de carnaval, capinha preta, e boné branco")
  } else {
    //SE TIVER SEM LIGHT MODE, MANTER A IMAGEM NORMAL
    img.setAttribute("src", "./assets/Avatar.png")
    img.setAttribute("alt", "Foto do luiz com oculos escuro, blusa branca da lacoste, capinha azul e boné branco")

  }
  
}