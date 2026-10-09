function Pokemon(props: PokemonProps)
{
    return (
        <>
            <img src={props.image}/>
            <h1>Name: {props.name}</h1>
            <p>Base Experience: {props.base_xp}</p>
            <p>Height: {props.height}</p>
        </>
    )
}

type PokemonProps = {
    name: string
    base_xp: number
    height: number
    image: string
}

export default Pokemon
export {type PokemonProps}