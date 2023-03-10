const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`;

const generatePokemonPromises = () => Array(150).fill().map((_, index) => 
  fetch(getPokemonUrl(index + 1)).then(response => response.json()))
  
const generateHtml = pokemons => {
  return pokemons.reduce((accumulator, pokemon) => {
    const types = pokemon.types.map(typeInfo => typeInfo.type.name);
    
    accumulator += 
      `<li class="card">
        <img 
        class="card-img ${types[0]}" 
        alt="${pokemon.name}"       src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"/>
          <h2 class="card-title">${pokemon.id}- ${pokemon.name}</h2>
          <p class="card-subtitle">${types.join(' | ')}</p>
      </li>`
    return accumulator;
}, '')
}

const insertPokemonsIntoPage = pokemons => {
  const ul = document.querySelector('.ul-pokemons');
  ul.innerHTML = pokemons;
}

const pokemonPromises = generatePokemonPromises();

Promise.all(pokemonPromises)
  .then(generateHtml)
  .then(insertPokemonsIntoPage);

fetchPokemon();