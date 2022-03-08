peca = "CaVaLo";

peca = peca.toLowerCase()

switch (peca) {
    case  "peao" :
    console.log ("vertical")
    break
    case "torre" :
    console.log ("vertical e horizontal")
    break
    case "cavalo" :
    console.log ("movimento em L")
    break
    case "bispo" :
    console.log ("diagonais")
    break
    case "rainha" :
    console.log ("diagaonais, vertical e horizontal")
    break
    case "rei" :
    console.log ("uma casa apenas na horizontal, vertical ou diagonal")
    break
}

if ( peca != "peao" && peca != "bispo"  && peca != "torre" && peca != "cavalo" && peca != "rainha" && peca != "rei")
{ console.log ("peça inválida") }

