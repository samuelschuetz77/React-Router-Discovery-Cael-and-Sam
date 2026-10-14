import Home from "./Home"
import PokemonPage from "./PokemonPage"
import About from "./components/About"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from "./components/Nav"
import NotFound from "./components/NotFound"

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
          <Route path ="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
