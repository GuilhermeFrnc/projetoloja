function VirarProduto(id) {
    if (id == "camisa5") {
        document.getElementById("camisa5").src = "style/img/costascamisatigre.png"
        return
    }
    if (id == "camisa4") {
        document.getElementById("camisa4").src = "style/img/costascamisarosa.png"
        return
    }
    if (id == "camisa3") {
        document.getElementById("camisa3").src = "style/img/costascamisatigre.png"
        return
    }
    if (id == "camisa1") {
        document.getElementById("camisa1").src = "style/img/costascamisatigre.png"
        return
    }
    if (id == "camisa2") {
        document.getElementById("camisa2").src = "style/img/costascamisarosa.png"
        return
    }
}

function VoltarProduto(id) {
    if (id == "camisa5") {
        document.getElementById("camisa5").src = "style/img/frentecamisatigre.png"
        return
    }
    if (id == "camisa4") {
        document.getElementById("camisa4").src = "style/img/frentecamisarosa.png"
        return
    }
    if (id == "camisa3") {
        document.getElementById("camisa3").src = "style/img/frentecamisatigre.png"
        return
    }
    if (id == "camisa1") {
        document.getElementById("camisa1").src = "style/img/frentecamisatigre.png"
        return
    }
    if (id == "camisa2") {
        document.getElementById("camisa2").src = "style/img/frentecamisarosa.png"
        return
    }
}

function InfoProduto(camisas) {
    let modelo = camisas.dataset.nome;
    let titulo = document.getElementById('nomepreco')
    titulo.textContent = modelo;

    let valor = camisas.dataset.preco;
    let preco = document.getElementById('preco')
    preco.textContent = valor;

    let imgcamisa = camisas.dataset.img;
    let img = document.getElementById('camisapreco')
    img.src = imgcamisa

    document.getElementById('modal').style.display = 'flex'
    document.getElementById('overlay').style.display = 'block';
    return
}

function Sair() {
    document.getElementById('modal').style.display = 'none'
    document.getElementById('overlay').style.display = 'none';
    return
}


//Carrinho
let itemIdCounter = 0;
var testelocal = 0

function Adicionar() {
    Sair();
    testelocal = 1;
    let produtocar = document.getElementById("nomepreco").textContent;
    let precoproduto = document.getElementById("preco").textContent;

    const itemCarrinho = document.createElement("li");
    const itemId = `item-${itemIdCounter++}`;
    itemCarrinho.setAttribute("id", itemId);
    itemCarrinho.innerHTML = `${produtocar} - R$ ${precoproduto} <button class="botaotirar" onclick="Tirar('${itemId}')">-</button>`;

    const itensCarrinho = document.getElementById("itensCarrinho");
    itensCarrinho.appendChild(itemCarrinho);

    const totalCarrinho = document.getElementById("totalCarrinho");
    const totalAtual = parseFloat(totalCarrinho.innerText);
    totalCarrinho.innerText = (totalAtual + parseFloat(precoproduto)).toFixed(2);

    document.getElementsByTagName('aside')[0].style.display = "flex";
    document.getElementById('overlay').style.display = 'block';

    const carrinho = obterCarrinhoDoLocalStorage();
    carrinho[itemId] = { produto: produtocar, preco: precoproduto };
    salvarCarrinhoNoLocalStorage(carrinho);
}

function Mostar(){
    document.getElementsByTagName('aside')[0].style.display = "flex";
    document.getElementById('overlay').style.display = 'block';
}

function Tirar(itemId) {
    const itemRemover = document.getElementById(itemId);
    const paiItemRemover = itemRemover.parentNode;
    paiItemRemover.removeChild(itemRemover);

    const precoTexto = itemRemover.textContent.split(' - R$ ')[1];
    const totalCarrinho = document.getElementById("totalCarrinho");
    const totalAtual = parseFloat(totalCarrinho.innerText);
    totalCarrinho.innerText = (totalAtual - parseFloat(precoTexto)).toFixed(2);

    const carrinho = obterCarrinhoDoLocalStorage();
    delete carrinho[itemId];
    salvarCarrinhoNoLocalStorage(carrinho);
}

function SairCarrinho() {
    document.getElementsByTagName('aside')[0].style.display = "none";
    document.getElementById('overlay').style.display = 'none';
}

window.onload = function () {
    exibirCarrinho()
}

function obterCarrinhoDoLocalStorage() {
    const carrinhoString = localStorage.getItem('carrinho');
    return carrinhoString ? JSON.parse(carrinhoString) : {};
}

function salvarCarrinhoNoLocalStorage(carrinho) {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function exibirCarrinho() {
    const carrinho = obterCarrinhoDoLocalStorage();

    const itensCarrinho = document.getElementById("itensCarrinho");
    const totalCarrinho = document.getElementById("totalCarrinho");

    // Limpa o conteúdo atual do carrinho na página
    itensCarrinho.innerHTML = "";
    totalCarrinho.innerText = "0.00";

    // Percorre os itens do carrinho e os exibe na página
    Object.keys(carrinho).forEach((itemId) => {
        const item = carrinho[itemId];
        const { produto, preco } = item;

        const itemCarrinho = document.createElement("li");
        itemCarrinho.setAttribute("id", itemId);
        itemCarrinho.innerHTML = `${produto} - R$ ${preco} <button class="botaotirar" onclick="Tirar('${itemId}')">-</button>`;

        itensCarrinho.appendChild(itemCarrinho);

        const totalAtual = parseFloat(totalCarrinho.innerText);
        totalCarrinho.innerText = (totalAtual + parseFloat(preco)).toFixed(2);
    });
}

function SairTudo() {
    Sair();
    SairCarrinho();
}