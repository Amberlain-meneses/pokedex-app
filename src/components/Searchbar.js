import React,{useState} from 'react'
import { getPokemons } from '../helpers/getPokemons'

 
export const Searchbar = () => {
    
    const [inputSearch, setSearchValue] = useState('');//estado actual string vacio
    const [pokemon, setPokemon] = useState();
    const handleInputChange = (evt) =>{
        setSearchValue(evt.target.value)
    }

    const handleSearch = async (evt) => {
        
        if(inputSearch.trim().length > 2 ){
            const data = await getPokemons(inputSearch);
            setPokemon(data);
        }
        else{
            alert("Pokemon no encontrado");
        }
        
    }

    return (
        <>
            <div className="cont-searchbar">
                <div className="searchbar">
                <input type="text" placeholder="Seach Pokemon..."onChange={handleInputChange} />
                </div> 
                <div className="searchbtn">
                    <input onClick={handleSearch} type="submit" value="Search"/>
                </div>
            </div>   
            <div>
                    {pokemon && 
                        <div>
                            <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                            <div>Nomnre: {pokemon.name}</div>
                            
                        </div>
                    }
                </div> 
        </>
    );
}

