import Home from "./Home"
import PokemonPage from "./PokemonPage"
import About from "./components/About"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from "./components/Nav"

function App() {
  return (
    <>
      <h1>React Router Discovery Lab</h1>
      <BrowserRouter>
        <Nav/> 
        <Routes>
          <Route path ="/" element={<Home/>}/> 
          <Route path="/about" element={<About />} />
          <Route path="/pokemon/*" element={<PokemonPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
