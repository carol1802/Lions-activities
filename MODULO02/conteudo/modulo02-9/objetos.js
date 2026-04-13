
let pinturaFavorita = {
    nomePintura: 'impressão, nascer do sol',
    nomeArtista:'Monet',
    ano:'1872',
    significado: 'O significado da obra reside na tentativa de Monet de capturar não o cenário de forma realista ou detalhada, mas sim a sensação efêmera da luz e da cor naquele exato momento. Ele utiliza pinceladas rápidas e soltas para mostrar como o sol alaranjado rompe o cinza da névoa, priorizando a percepção visual imediata sobre a forma precisa dos objetos.',

    printar(){
        console.log("Minha pintura favorita é "+this.nomePintura+",feita por " + this.nomeArtista+", em "+this.ano+", e com o significado: \n"+this.significado)
    }
}
pinturaFavorita.printar()