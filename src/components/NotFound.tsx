import {Link} from 'react-router-dom'

function NotFound () {
    return(
       
      <div>
        <h1>Oops this isnt a page...mmm Awkward</h1>
        <Link to="/">Return Home</Link>
      </div>
  
    )
}

export default NotFound