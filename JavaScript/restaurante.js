function mostraDetalhes(id, titulo, imagem, descricao) {
    document.getElementById("tituloDetalhe").innerText = titulo;
    document.getElementById("imagemDetalhe").src = imagem;
    document.getElementById("descricaoDetalhe").innerText = descricao;

    document.getElementById("modalDetalhes").style.display = "Block";
}

function fecharModal() {
    document.getElementById("modalDetalhes").style.display = "none";
}