import { Link } from "react-router-dom";

function Navbar ()  {
  return (
    <nav className="bg-gray-800 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-extrabold">
                <Link to="/">My Portfolio</Link>
            </h1>
            <div className="space-x-4">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    </nav>
  
  );
}

export default Navbar
