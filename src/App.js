import React, { Fragment, useState, useEffect } from "react";
import { Productores } from "./components/Productores";
import styled from "@emotion/styled";

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

function App() {
  // State de frases
  const [productores, guardarProductores] = useState([]);

  const consultarAPI = async () => {
    const api = await fetch(
      "https://analisi.transparenciacatalunya.cat/resource/xmyy-7xqi.json"
    );
    const productores = await api.json();

    const myFilter = productores.filter(
      (ciutat) => ciutat.municipi === "BARCELONA"
    );

    console.log(myFilter);

    guardarProductores(myFilter);
  };

  // Cargar una productores
  useEffect(() => {
    consultarAPI();
  }, []);

  return (
    <Fragment>
      <Contenedor>
        <h3>
          Exercici fet, agafant una API de la Generalitat de Catalunya, filtrant
          només les de Barcelona ciutat{" "}
        </h3>
        <hr />
        <h1>Productors adherits a la venda de proximitat</h1>
        <hr />
        <p>
          Dades proveïdes per Departament d'Agricultura, Ramaderia, Pesca i
          Alimentació
        </p>
        <p>Actualitzat 9 de novembre de 2021</p>
      </Contenedor>
      <Productores productores={productores} />
      {/* <Boton onClick={consultarAPI}>Actualizar Productores</Boton> */}
    </Fragment>
  );
}

export default App;
