
const page = document.querySelector('#pokedex-page');

fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
    .then(response => {
        return response.json()
    })
    .then( async data => {
        const box = document.querySelector('#pokemon-box')

        for(let i=0; i<data.results.length; i++){
            box.querySelector('#pokemon-name').innerHTML = 
            data.results[i].nome
            box.querySelector('#pokemon-name').style.textTransform = "capitalize"
            const pokemonImagem = await fetch('https://pokeapi.co/api/v2/pokemon-form/' + data.results[i].name) 
            const image = await pokemonImagem.json()
            box.querySelector('#pokemon-img').src = image.sprites.front_default
            page.innerHTML += box.outerHTML
        }
    })