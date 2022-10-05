function CarregarMenu(){
    if (itens.style.display == 'none'){
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
} // EM JAVA TEM QUE USAR QUASE TUDO ID PARA FUNC

function mudoutamanho(){
    if (window.innerWidth >=768){
        itens.style.display = 'flex'
    } else {
        itens.style.display = 'none'
    }
}