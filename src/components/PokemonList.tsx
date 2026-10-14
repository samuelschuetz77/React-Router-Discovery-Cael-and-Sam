import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

type PokemonListItem = {
    name: string
}

function PokemonList() {
    const [pokemonList, setPokemonList] = useState<PokemonListItem[]>([])

    useEffect(() => {
        async function getPokemonList() {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
            const data = await response.json()
            setPokemonList(data.results)
        }
        getPokemonList()
    }, [])

    return (
        <ul>
            {pokemonList.map((p) => (
                <li key={p.name}>
                    <Link to={`/pokemon/${p.name}`}>{p.name}</Link>
                </li>
            ))}
        </ul>
    )
}

export default PokemonList
