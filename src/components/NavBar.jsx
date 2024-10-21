import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <ul className="flex text-xl font-serif font-semibold gap-x-16 items-center text-white">
      <li className="p-3 bg-orange-500 rounded-lg shadow-lg" >
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="p-3 bg-orange-500 rounded-lg shadow-xl" >
        <NavLink to="/BrowseBooks">Browse</NavLink>
      </li>
      <li className="p-3 bg-orange-500 rounded-lg shadow-lg" >
        <NavLink to="/AddBook">Add Book</NavLink>
      </li>
    </ul>
  );
}

export default NavBar;
