import { useState, createContext } from "react";
import { marcas, planes } from "../constants";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
  const [error, setError] = useState(false);
  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });

  const [cargando, setCargando] = useState(false);

  const [cotizacion, setCotizacion] = useState({
    marca: "",
    year: "",
    plan: "",
    resultado: "",
  });

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(datos).includes("")) {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }

    setError(false);
    setCargando(true);

    //Comenzar a calcular el precio
    let resultado = 2000;
    // Le resto un 3% por cada año de diferencia
    const diferencia = new Date().getFullYear() - Number(datos.year);
    resultado -= (diferencia * 3 * resultado) / 100;

    //Dependiendo de la marca aumento el resultado
    // Europeo 30%
    // Americano 15%
    // Asiático 5%
    switch (Number(datos.marca)) {
      case 1:
        resultado += resultado * 0.3;
        break;
      case 2:
        resultado += resultado * 0.15;
        break;
      case 3:
        resultado += resultado * 0.05;
        break;
    }

    //Básico: 20% más, Completo: 50% más
    resultado += resultado * (Number(datos.plan) === 1 ? 0.2 : 0.5);

    //Instancio el total
    setCotizacion({ ...datos, resultado });
    setTimeout(() => {
      setCargando(false);
    }, 1500);
  };

  return (
    // .Provider señaliza que CotizadorContext dará información
    <CotizadorContext.Provider
      value={{
        handleChange,
        error,
        handleSubmit,
        cargando,
        cotizacion,
      }}
    >
      {children}

      {/**Esto simboliza que este context estará en lo más alto del árbol de componentes*/}
    </CotizadorContext.Provider>
  );
};

export { CotizadorProvider };
export default CotizadorContext;
