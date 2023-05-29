function VirarProduto(id){
    if(id=="camisa5"){
        document.getElementById("camisa5").src="style/img/camisa1costas.png"
        return
    }
}

function VoltarProduto(id){
    if(id=="camisa5"){
    document.getElementById("camisa5").src="style/img/camisa1frente.png"
    return
    }
}

function InfoProduto(camisas){
    let modelo= camisas.dataset.nome;
    let titulo=  document.getElementById('nomepreco')
    titulo.textContent=modelo;

    let valor= camisas.dataset.preco;
    let preco=document.getElementById('preco')
    preco.textContent=valor;

    let imgcamisa=camisas.dataset.img;
    let img =document.getElementById('camisapreco')
    img.src=imgcamisa
    
    document.getElementById('modal').style.display='flex'
    document.getElementById('overlay').style.display = 'block';
    return
}

function Sair(){
    document.getElementById('modal').style.display='none'
    document.getElementById('overlay').style.display = 'none';
    return
}

function PrecionarTamanho(id){
    let tamanho= id
    if(tamanho=="p"){
        document.getElementById('p').style.backgroundColor="#c0db93";
        document.getElementById('m').style.backgroundColor="white";
        document.getElementById('g').style.backgroundColor="white";
        document.getElementById('xl').style.backgroundColor="white";
        return
    }

    if(tamanho=="m"){
        document.getElementById('p').style.backgroundColor="white";
        document.getElementById('m').style.backgroundColor="#c0db93";
        document.getElementById('g').style.backgroundColor="white";
        document.getElementById('xl').style.backgroundColor="white";
        return
    }

    if(tamanho=="g"){
        document.getElementById('p').style.backgroundColor="white";
        document.getElementById('m').style.backgroundColor="white";
        document.getElementById('g').style.backgroundColor="#c0db93";
        document.getElementById('xl').style.backgroundColor="white";
        return
    }

    if(tamanho=="xl"){
        document.getElementById('p').style.backgroundColor="white";
        document.getElementById('m').style.backgroundColor="white";
        document.getElementById('g').style.backgroundColor="white";
        document.getElementById('xl').style.backgroundColor="#c0db93";
        return
    }
}

