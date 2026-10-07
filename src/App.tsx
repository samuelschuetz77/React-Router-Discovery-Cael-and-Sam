import Home from "./Home"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <h1>React Router Discovery Lab</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
