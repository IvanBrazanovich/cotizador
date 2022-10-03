import { useState } from "react";
import AppSeguros from "./components/AppSeguros";
import { CotizadorProvider } from "./context/CotizadorProvider";

function App() {
  return (
    <CotizadorProvider>
      <AppSeguros />
    </CotizadorProvider>
  );
}

export default App;
