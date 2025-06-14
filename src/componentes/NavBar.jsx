function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#001f3f' }}>
      <div className="container-fluid">
        <span className="navbar-brand text-white">Navbar</span> {/* No es enlace si no navega */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button className="nav-link active text-white btn btn-link" aria-current="page" type="button">
                Inicio
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link text-white btn btn-link" type="button">
                Enlaces
              </button>
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle text-white btn btn-link"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Mis Mascotas
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item btn btn-link" type="button">
                    Alimentos
                  </button>
                </li>
                <li>
                  <button className="dropdown-item btn btn-link" type="button">
                    Limpieza
                  </button>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button className="dropdown-item btn btn-link" type="button">
                    Otras Acciones
                  </button>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <span className="nav-link disabled text-white-50" aria-disabled="true">
                Deshabilitado
              </span>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={e => e.preventDefault()}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Búsqueda"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
