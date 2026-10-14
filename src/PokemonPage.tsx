import { useEffect, useState } from "react"
import { Route, Routes, useNavigate, useParams } from "react-router-dom"
import Pokemon from "./Pokemon"
import { type PokemonProps } from "./Pokemon"
import PokemonList from "./components/PokemonList"

function PokemonPage() {
    const navigate = useNavigate()
    const [pokemonSearch, setPokemonSearch] = useState("")

    return (
        <>
            <h1>Pokemon Page</h1>
            <div>
                <input placeholder="Pokemon Name" onChange={(event) => setPokemonSearch(event.target.value)}></input>
                <button onClick={() => navigate(`/pokemon/${pokemonSearch}`)}>Search</button>
            </div>

            <Routes>
                <Route index element={<PokemonList />} />
                <Route path=":pokemonSearch" element={<PokemonResult />} />
            </Routes>
        </>
    )
}

function PokemonResult()
{
    const {pokemonSearch} = useParams()
    const [pokemon, setPokemon] = useState<PokemonProps | null>(null)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => { 
       

        async function getPokemon() {
            setPokemon(null)
            setError(null)
            try
            {
                
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSearch}`)
                if (!response.ok){
                    setError("Could not find that Pokemon!")
                    return
                }
                const data = await response.json()
    
                const newPokemon: PokemonProps = {
                    name: data.name,
                    height: data.height,
                    base_xp: data.base_experience,
                    image: data.sprites.front_default,
                }
    
                setPokemon(newPokemon)
            }
            catch{
                setError("The request failed. Your connection sucks")
            }
        }
        getPokemon()
    }, [pokemonSearch])

    if (error) return <p>{error}</p>
    if (!pokemon) return <p>Loading...</p>
    return <Pokemon {...pokemon} />
}

export default PokemonPage
