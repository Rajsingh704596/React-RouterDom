import { NavLink } from "react-router-dom"


function Home() {
  return (
    <div>
      <h1>Welcome Home page</h1>
      <p>Explore Movies, Tv shows, & more.</p>
      <NavLink to="/movie">Explore Now </NavLink>
    </div>
  )
}

export default Home
