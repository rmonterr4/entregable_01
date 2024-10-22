import { Link } from 'react-router-dom';

export const Inicio = () => {
  return (
    <>
      <div className="p-5 mb-4 bg-body-tertiary rounded-3">
        <div className="container-fluid py-5 text-start">
          <h1 className="display-5 fw-bold">Bienvenido al Inicio</h1>
          <h2 className="col-md-8 fs-4">Este es el inicio</h2>
          <Link to="/acer">
            <button className="btn btn-primary btn-lg" type="button">
              Acerca de Nosotros
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
