import React,{useState,useEffect} from 'react'
import Navbar from './components/Navbar'
import {Searchbar} from './components/Searchbar';
import PokemonGrid from './components/PokemonGrid';
import {dataPokemon, obtenerPokemons} from './helpers/getPokemons'
import './App.css';


export const  PokedexApp = () => {
  
  const [pokemon, setPokemons] = useState([]);
  //crear estados de paginación
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoaging] = useState(true);


  const fetchPokemons = async() =>{
    try{
      setLoaging(true);
      const data = await obtenerPokemons(25, 25 * page);
      const promises = data.results.map( async(pokemon) =>{
        return await dataPokemon(pokemon.url)
      })
     const results = await Promise.all(promises)
     setPokemons(results);
     setLoaging(false); 
     setTotal(Math.ceil(data.count / 25));

  
    }catch(err){}
  }

  useEffect( () =>{
    fetchPokemons();

  },[page]); //Pasamos page con limite 12
  return (
    <>
    <Navbar />
    <div className="App">
      <Searchbar/>
      
       <PokemonGrid
       loading={loading}
        pokemon={pokemon}
        page={page}
        setPage={setPage}
        total={total}
        
        />
       
    </div>
    </>
  );
}

export default PokedexApp;
