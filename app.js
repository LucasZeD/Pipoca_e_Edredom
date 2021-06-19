/*MEU*/
const TMDB_ENDPOINT = 'https://api.themoviedb.org/3';
const APIKEY = '31587d8c96bb5ef89c58f85a654d8806';
const IMG_PREFIX = 'https://image.tmdb.org/t/p/w500';

function carregaFilmes() {
    xhr = new XMLHttpRequest();

    xhr.open('GET', TMDB_ENDPOINT + '/movie/popular?api_key=' + APIKEY);
    xhr.onload = exibeFilmes;
    xhr.send();
}

function pesquisaFilmes() {
    let xhr = new XMLHttpRequest();

    //let query = document.getElementById('inputPesquisa').value;
    let query = document.getElementById('barra').value;


    xhr.open('GET', TMDB_ENDPOINT + '/search/movie?api_key=' + APIKEY + '&query=' + query);
    xhr.onload = exibeFilmes;
    xhr.send();
}

function exibeFilmes(evt) {

    //let data = JSON.parse (xhr.responseText);
    let textoHTML = '';

    let filmes = JSON.parse(evt.target.responseText);


    //for (let i = 0; i < data.results.length; i++) {
    for (let i = 0; i < filmes.results.length; i++) {
        let nomeFilme = filmes.results[i].title;
        let dataLancamento = filmes.results[i].release_date;
        let sinopse = filmes.results[i].overview;
        let imagem = IMG_PREFIX + filmes.results[i].poster_path;
        //NEW
        let link = `https://www.themoviedb.org/movie/${filmes.results[i].id}?language=pt-BR`;

        textoHTML += `<div class="card col-md-4">
        <img src="${imagem}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${nomeFilme}</h5>
        <p class="card-data">${dataLancamento}</p>
        <p class="card-text">${sinopse}</p>
        <a target="_blank" href="${link}" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>`
        //<a href="#" class="btn btn-primary">Go somewhere</a>
    }
    document.getElementById('tela').innerHTML = textoHTML;
}

// Codigo retirado da aula sincrona com Rommel, chave de acesso alterada.
// Movies Popular alterado para Movies Lnaçamentos