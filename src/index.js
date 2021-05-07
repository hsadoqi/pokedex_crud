const pokemonContainer = document.getElementById("pokemon-container")

// GET - request record
// POST - adding record
// PATCH - editing record
// PUT - replacing whole record of data 
// DELETE - delete record


fetch(`http://localhost:3000/pokemon`)
.then((res) => res.json())
.then((pokemon) => {
    pokemon.forEach(poke => {
      renderPokemon(poke)
    })
})

function renderPokemon(pokemon){
  const pokemonCard = document.createElement('div')

  const pokeInfo = `
  <div class='card' id='${pokemon.id}'>
    <h2>${pokemon.name}</h2>
    <img src="${pokemon.sprites.front}"/>
  </div>
`
  pokemonCard.innerHTML = pokeInfo

  pokemonContainer.append(pokemonCard)

  pokemonCard.addEventListener("click", () => showCard(pokemon.id))

}

function showCard(id){

  pokemonContainer.innerHTML = ""

  fetch(`http://localhost:3000/pokemon/${id}`)
  .then(res => res.json())
  .then(poke => renderPokemon(poke))

  console.log(image)
}