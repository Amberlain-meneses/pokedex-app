import React from 'react'
import Pagination from './Pagination';
import { Pokemon } from './Pokemon';

const PokemonGrid = (props) => {
    const {pokemon,page,setPage, total, loading} = props;

    const lastPage = () => {
        const nextPage = Math.max(page -1 , 0)
        setPage(nextPage);
    }

    const nextPage = () => {
        const nextPage = Math.min(page + 1, total)
        setPage(nextPage);
    }

    return (
        <>
            <div className="header">
             
                <Pagination 
                page={page + 1} 
                totalPage={total}
                handlePaginationLeft = {lastPage}
                handlePaginationRight = {nextPage}
                />
            </div>
            {loading ? 
            <div>Cargando...</div> :
            <div className="pokemon-grid">
                {pokemon.map((pokemon, index) => {
                    return <Pokemon pokemon={pokemon} key={pokemon.name}/>
                    
                })}
            </div>
                }
        </>
    )
}

export default PokemonGrid

