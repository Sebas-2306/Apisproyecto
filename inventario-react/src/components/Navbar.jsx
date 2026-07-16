import { Link } from "react-router-dom";

function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

            <div className="container">

                <Link className="navbar-brand" to="/">
                    Inventario SENA
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#menu"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="menu">

                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Inicio
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/categorias">
                                Categorías
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/productos">
                                Productos
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                Acerca
                            </Link>
                        </li>

                    </ul>

                </div>

            </div>

        </nav>

    );
}

export default Navbar;