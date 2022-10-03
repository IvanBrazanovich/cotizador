import React from "react";
import CotizadorContext from "../context/CotizadorProvider";
import { useContext } from "react";

const useCotizador = () => useContext(CotizadorContext);

export default useCotizador;
