import React, { Fragment, useState } from "react";
import Error from "./Error";

const PreguntaInicial = ({
  setRemainingBudget,
  setBudget,
  setShowInitialComponent,
}) => {
  // definir state

  const [saveBudget, setSaveBudget] = useState(0);
  const [error, setError] = useState(false);

  const definirPresupuesto = (event) => {
    setSaveBudget(parseInt(event.target.value), 10);
  };

  const agregarPresupuesto = (event) => {
    event.preventDefault();
    if (saveBudget < 1 || isNaN(saveBudget)) {
      setError(true);
      return;
    }
    setError(false);
    setBudget(saveBudget);
    setRemainingBudget(saveBudget);
    setShowInitialComponent(false);
  };

  return (
    <>
      <h2> Coloca tu presupuesto</h2>
      {error ? <Error mensaje="El presupuesto es Incorrecto." /> : null}
      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={definirPresupuesto}
        />
        <input type="submit" className="button-primary u-full-width" />
      </form>
    </>
  );
};

export default PreguntaInicial;
