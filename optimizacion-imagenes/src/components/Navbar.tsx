import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4 text-white flex justify-between">
            <h1 className="text-xl font-bold">Optimización de Imágenes</h1>
            <div>
                <Link style={{ color: 'white' }} className="mr-3" to="/">Inicio</Link>
                <Link style={{ color: 'white' }} className="mr-3" to="/ejercicio1">Ejercicio 1</Link>
                <Link style={{ color: 'white' }} className="mr-3" to="/ejercicio2">Ejercicio 2</Link>
                <Link style={{ color: 'white' }} className="mr-3" to="/ejercicio3">Ejercicio 3</Link>
                <Link style={{ color: 'white' }} className="mr-3" to="/ejercicio4">Ejercicio 4</Link>
                <Link style={{ color: 'white' }} className="mr-3" to="/ejercicio5">Ejercicio 5</Link>
                <br />
                <Link style={{ color: 'white' }} className="mr-3" to="/test1">Test 1</Link>
                <Link style={{ color: 'white' }} className="mr-3" to="/test2">Test 2</Link>
                <Link style={{ color: 'white' }} className="mr-3" to="/test3">Test 3</Link>
                <Link style={{ color: 'white' }} className="mr-3" to="/test4">Test 4</Link>
                <Link style={{ color: 'white' }} className="mr-3" to="/tutorial/test">Test final</Link>
            </div>
        </nav>
    );
};

export default Navbar;