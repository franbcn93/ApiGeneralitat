import React, { Fragment } from "react";

export const Datos = ({ productor }) => {
  const { adreca, codipostal, nom_productor, productes, tel_fon, correu } =
    productor;
  return (
    <Fragment>
      <div className="card">
        <h5 className="card-header">{nom_productor}</h5>
        <div className="card-body">
          <h5 className="card-title">Correu: {correu}</h5>
          <p className="card-text">Adreça: {adreca}</p>
          <p className="card-text">Codi postal: {codipostal}</p>
          <p className="card-text">Teléfon: {tel_fon}</p>
          <p className="card-text">Productes: {productes}</p>
          {/* <a href="#" class="btn btn-primary">
            Go somewheree
          </a> */}
        </div>
      </div>
      {/* <div className="card" style={{ width: "18rem" }}>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{productor.adreca}</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <div class="card-footer">Card footer</div>
      </div> */}
    </Fragment>
  );
};
