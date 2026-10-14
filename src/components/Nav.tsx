import { NavLink } from "react-router-dom"

function Nav () {
    return(
       
      <div>
        <NavLink to="/" style={{padding: '1rem'}}>Home</NavLink>
        <NavLink to="/pokemon" style={{padding: '1rem'}}>Pokemon</NavLink>
        <NavLink to="/about" style={{padding: '1rem'}}>About</NavLink>
      </div>
  
    )
}

export default Nav