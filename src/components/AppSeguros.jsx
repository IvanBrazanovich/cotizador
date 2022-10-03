import React from "react";
import Formulario from "./Formulario";

const AppSeguros = () => {
  return (
    <div className="app">
      <h2 className="my-10 font-black text-3xl uppercase text-white text-center">
        Cotizador de seguros de auto
      </h2>

      <Formulario />
    </div>
  );
};

export default AppSeguros;
