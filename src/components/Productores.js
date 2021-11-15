import React, { Fragment } from "react";
import { Datos } from "./Datos";

export const Productores = ({ productores }) => {
  // for (let index = 0; index < productores.length; index++) {
  //   console.log(productores[index].adreca);
  // }

  return (
    <Fragment>
      {productores.map((productor, index) => (
        <Datos key={index} productor={productor} />
      ))}
    </Fragment>
  );
};
