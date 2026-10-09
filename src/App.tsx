import Home from "./Home"
import PokemonPage from "./PokemonPage"
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <h1>React Router Discovery Lab</h1>
      <BrowserRouter>
      <div>
        <NavLink to="/home" style={{padding: '1rem'}}>Home</NavLink>
        <NavLink to="/pokemon" style={{padding: '1rem'}}>Pokemon</NavLink>
        <NavLink to="/home" style={{padding: '1rem'}}>About</NavLink>
      </div>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/pokemon/*" element={<PokemonPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
