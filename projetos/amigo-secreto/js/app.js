let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');
    let valAmigo = CapitalizeWord(amigo.value)

    if (amigo.value == '') {
        alert('Informe o nome do amigo!');
        return;
    }

    if (amigos.includes(valAmigo)) {
        alert('Nome já adicionado!');
        return;
    }
    
    amigos.push(valAmigo);

    if (lista.textContent == '') {
        lista.textContent = valAmigo;
    } else {
        lista.textContent = lista.textContent + ', ' + valAmigo;
    }

    valAmigo = '';
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function sortear() {
    
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos!');
        return;
    }

    embaralha(amigos);

    let sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
            }
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}

function CapitalizeWord(name)
{
    return name.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}