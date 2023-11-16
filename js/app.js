function comprar(){
    let tipo = document.getElementById("tipo-ingresso");
    let qtd = parseInt(document.getElementById("qtd").value);

    if(isNaN(qtd) || qtd <= 0){
        alert("Insira uma quantidade, por favor.");
        return;
    }

    if(tipo.value == "pista"){
        comprarPista(qtd);
    }else if(tipo.value == "superior"){
        comprarSuperior(qtd);
    }else{
        comprarInferior(qtd);
    }
}

function comprarPista(qtd){
    let qtdPista = parseInt(document.getElementById("qtd-pista").textContent);
    if(qtd > qtdPista){
        alert("Quantidade indisponível para o tipo PISTA.");
    }else{
        qtdPista = qtdPista - qtd;
        document.getElementById("qtd-pista").textContent = qtdPista;
        alert("Compra efetuada com sucesso!");
    }
}

function comprarSuperior(qtd){
    let qtdSuperior = parseInt(document.getElementById("qtd-superior").textContent);

    if(qtd > qtdSuperior){
        alert("Quantidade indisponível para o tipo CADEIRA SUPERIOR.");
    }else{
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById("qtd-superior").textContent = qtdSuperior;
        alert("Compra efetuada com sucesso!");
    }
}

function comprarInferior(qtd){
    let qtdInferior = parseInt(document.getElementById("qtd-inferior").textContent);

    if(qtd > qtdInferior){
        alert("Quantidade indisponível para o tipo CADEIRA INFERIOR.");
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById("qtd-inferior").textContent = qtdInferior;
        alert("Compra efetuada com sucesso!");
    }
}