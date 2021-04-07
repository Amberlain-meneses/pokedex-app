
//Obtenemos los elementos de la API de Pokeapi

export const getPokemons = async(pokemon) =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}?limit=10&offset=0`;
    const resp = await fetch(url);
    const dataPokemon = await resp.json();
     
    return dataPokemon;
}

export const obtenerPokemons = async(limit=25, offset=0) =>{
    try{
        const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
        const resp = await fetch(url);
        const dataPokemon = await resp.json();
     
    return dataPokemon;
    }catch(err){

    }
}

export const dataPokemon = async(url) =>{
    try{
        
        const resp = await fetch(url);
        const dataPokemon = await resp.json();
        return dataPokemon;
    }catch(err){}

}