import React from "react";
import useCotizador from "../hooks/useCotizador";
import { marcas, planes } from "../constants";

const Resultado = () => {
  const { cotizacion } = useCotizador();
  const { marca, year, plan, resultado } = cotizacion;

  const typeMarca = marcas.filter((m) => m.id === Number(marca));
  const typePlan = planes.filter((p) => p.id === Number(plan));
  let dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <div className="text-center rounded-md bg-slate-100 p-5 w-full mx-auto">
      <h3 className="text-3xl font-black text-gray-500">Resumen</h3>
      <p className="my-4">
        <span className="text-black font-bold">Marca: </span>{" "}
        {typeMarca[0].nombre}
      </p>
      <p className="my-4">
        <span className="text-black font-bold">Plan: </span>{" "}
        {typePlan[0].nombre}
      </p>
      <p className="my-4">
        <span className="text-black font-bold">Año del auto: </span> {year}
      </p>

      <p className="text-2xl ">
        <span className="font-bold">Total Cotización: </span>
        {dollarUS.format(resultado)}
      </p>
    </div>
  );
};

export default Resultado;
