import React from 'react'


export const Pokemon = (props) => {
    const {pokemon} = props;
    return (
        <div className="card-pokemon">
            <div className="img-pokemon">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                <div className="name-pokemon">
                    <h3>{pokemon.name}</h3>
                    <h5># {pokemon.id}</h5>
                </div>
                 
                <div>
                    <div>
                        {pokemon.types.map((type, index) =>{
                            return <div key={index}>{type.type.name}</div>
                            
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
