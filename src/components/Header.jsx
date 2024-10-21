import NavBar from "./NavBar"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="flex md:justify-around my-5">
      <Link to="/"><h1 className="text-2xl md:text-6xl text-orange-600 font-bold"style={{ textShadow: '5px 5px 10px' }}><u>E-Library System</u></h1></Link>
      <NavBar />
    </header>
  )
}

export default Header