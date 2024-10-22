import { NavLink } from "react-router-dom";
import miLogo from "../../../assets/img/conciertostar.webp";

export const Cabecera = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top w-100"
        style={{ backgroundColor: "#343a40" }}
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand text-white fs-5" to="/">
            <img
              src={miLogo}
              alt="El logo"
              style={{ height: "70px", width: "auto" }}
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link text-white active"
                  aria-current="page"
                  to="/"
                >
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="*">
                  Conciertos
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Artistas
                </a>
                <ul className="dropdown-menu" data-bs-popper="static">
                  <li>
                  <li>
                    <NavLink className="dropdown-item" to="/regisart">
                      Registrar artistas
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/listart">
                      Listar artistas
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                    <NavLink className="dropdown-item" to="/adminart">
                      Administrar artistas
                    </NavLink>
                  </li>
                </ul>

              </li>

              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/acer">
                  Acerca de
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
