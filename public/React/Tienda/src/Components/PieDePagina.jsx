import React from "react";
import { Link } from "react-router-dom";
import "./PieDePagina.css";

import logoUrl from "/assets/iconos/Logo.png";

export const PieDePagina = () => {
  return (
    <>
      <div className="container-xl piedepagina">
        <div className="row px-3">
          <div className="col-sm-6 col-md-4 pb-4">
            <Link to={`/como-comprar`}>
              <h4 className="my-1 text-uppercase">Cómo comprar</h4>
            </Link>
            <Link to={`/preguntas-frecuentes`}>
              <div>Preguntas frecuentes</div>
            </Link>
            <Link to={`/bases-y-condiciones`}>
              <div>Bases y condiciónes</div>
            </Link>
            <Link to={`/acerca-de`}>
              <div className="my-1 text-uppercase">Acerca de...</div>
            </Link>
          </div>
          <div className="col-sm-6 col-md-4 pb-4">
            <Link to={`/contacto`}>
              <h4 className="my-1 text-uppercase">Contacto</h4>
            </Link>

            <div>Tel. (3825) 538310</div>
            <div>jorgefemenia@gmail.com</div>
            <div>Chilecito, La Rioja, Argentina</div>
          </div>
          <div className="col-sm-6 col-md-4 pb-4 pr-1">
            <Link to="/">
              <img
                className="nav-logo-img"
                src={logoUrl}
                alt="Fast Food 5"
              />
            </Link>
          </div>
        </div>
        <div className="row px-3 pb-3">
          <div className="col-10 ">
            © Copyright Jorge E. Femenía. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </>
  )
}