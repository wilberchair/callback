const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`;

const fetchPokemon = () => {
  const generatePokemonPromises = () => Array(150).fill().map((_, index) => 
    fetch(getPokemonUrl(index + 1)).then(response => response.json()))
    const pokemonPromises = generatePokemonPromises();

  
  // for(let i = 1; i <= 150; i++) {
  //   pokemonPromises.push(fetch(getPokemonUrl(i)).then(response => response.json()));
  // }
  
  Promise.all(pokemonPromises)
    .then(pokemons => {
    // console.log(pokemons);
    
    const lisPokemons = pokemons.reduce((accumulator, pokemon) => {
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
    
    console.log(lisPokemons);
    const ul = document.querySelector('.ul-pokemons');
    ul.innerHTML = lisPokemons;

  });
}

fetchPokemon();