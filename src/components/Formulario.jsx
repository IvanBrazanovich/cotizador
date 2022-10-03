import React, { Fragment } from "react";
import { marcas, planes, YEARS } from "../constants/index";
import useCotizador from "../hooks/useCotizador";
import Error from "./Error";
import Resultado from "./Resultado";
import Spinner from "./Spinner";

const Formulario = () => {
  // useContext(CotizadorContext); Esto significa que quieres utilizar la info de  CotizadorContext
  const { cotizacion, error, handleChange, handleSubmit, cargando } =
    useCotizador();

  return (
    <div className="container w-1/2 mx-auto bg-white p-10  rounded-md">
      <form onSubmit={handleSubmit}>
        {error && <Error>Todos los campos son obligatorios </Error>}
        {/* INPUT */}
        <div className="wrapper my-5">
          <label
            htmlFor="marca"
            className="block uppercase text-gray-400  font-bold mb-3"
          >
            Marca
          </label>
          <select
            name="marca"
            id="marca"
            className="w-full p-3 text-gray-500 font-semibold border-2 border-slate-200 text-center rounded-md "
            onChange={(e) => handleChange(e)}
          >
            <option value=""> -- Seleccione una marca -- </option>
            {marcas.map((marca) => {
              return (
                <option key={marca.id} value={marca.id}>
                  {marca.nombre}
                </option>
              );
            })}
          </select>
        </div>

        {/* INPUT */}
        <div className="wrapper my-5">
          <label
            htmlFor="year"
            className="block uppercase text-gray-400  font-bold mb-3"
          >
            Año
          </label>
          <select
            name="year"
            id="year"
            className="w-full p-3 text-gray-500 font-semibold border-2 border-slate-200 text-center rounded-md "
            onChange={(e) => handleChange(e)}
          >
            <option value=""> -- Seleccione un año-- </option>
            {YEARS.map((year) => {
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
        </div>

        {/* INPUT */}
        <div className="wrapper my-5 ">
          <p className=" uppercase text-gray-400  font-bold mb-3">
            Elige un plan
          </p>
          <div className="flex gap-3">
            {planes.map((plan) => {
              return (
                <Fragment key={plan.id}>
                  <label>{plan.nombre}</label>
                  <input
                    onChange={(e) => handleChange(e)}
                    type="radio"
                    name="plan"
                    value={plan.id}
                    id={plan.nombre}
                  />
                </Fragment>
              );
            })}
          </div>
        </div>
        {cargando && <Spinner />}
        {!cargando && cotizacion && cotizacion.marca !== "" && <Resultado />}
        <button
          type="submit"
          className="py-3 bg-blue-500 text-xl uppercase  my-10 text-white font-semibold block rounded-md w-full"
        >
          Cotizar
        </button>
      </form>
    </div>
  );
};

export default Formulario;
