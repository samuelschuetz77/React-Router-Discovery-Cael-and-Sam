import { useEffect, useState } from "react"
import { Route, Routes, useNavigate, useParams } from "react-router-dom"
import Pokemon from "./Pokemon"
import { type PokemonProps } from "./Pokemon"

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
                <Route path=":pokemonSearch" element={<PokemonResult />} />
            </Routes>
        </>
    )
}

function PokemonResult()
{
    const {pokemonSearch} = useParams()
    const [pokemon, setPokemon] = useState<PokemonProps | null>(null)

    useEffect(() => {

        async function getPokemon() {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSearch}`)
            const data = await response.json()

            const newPokemon: PokemonProps = {
                name: data.name,
                height: data.height,
                base_xp: data.base_experience,
                image: data.sprites.front_default,
            }

            setPokemon(newPokemon)
        }
        getPokemon()
    }, [pokemonSearch])

    if (!pokemon) return <p>Loading...</p>
    return <Pokemon {...pokemon} />
}

export default PokemonPage
