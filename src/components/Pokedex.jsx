import { useState, useEffect } from "react"


export default function Pokedex(){
 const [id, setId] = useState(1);
 const [pokemon, setPokemon] = useState(null);


 const fetchData = async () => { // função assincrona para encontrar dados e conectar na API
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`) 
        const data = await response.json();
        setPokemon(data)
    }catch(error){
        console.error(error);
    }
 }

    useEffect(() => {
        fetchData()
    }), [id]

    const nextPokemon = () =>{
        setId(id+1)
    }
    
    return(
        <div>
                {pokemon && (
          
            <div className="pokemon">
                <header>
                    <h1><img className="title" src="pologo.png" alt="" /></h1>
                </header>
                <main>
                    <p className="name">{pokemon.name}</p>
                    <p className="peso">Peso: {pokemon.weight}</p>
                    <div className="select-pokemon"> 
                    <img className="pokemon-img" src={pokemon.sprites.front_default} alt="Pokemon" />
                    <br/>
                    <button className="botao" onClick={nextPokemon}>Próximo</button>
                    </div>
                </main>
                <footer>
                    
                </footer>
                
            </div>
            )}
        </div>
        
    )
}