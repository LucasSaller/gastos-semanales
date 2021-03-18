import "./App.css";
import PreguntaInicial from "./components/PreguntaInicial";
import { useState, useEffect } from "react";
import Form from "./components/Form";
import List from "./components/List";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {
  const [budget, setBudget] = useState(0);
  const [remainingBudget, setRemainingBudget] = useState(0);
  const [showInitialComponent, setShowInitialComponent] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [crearGasto, setCrearGasto] = useState(false);

  useEffect(() => {
    if (crearGasto) {
      setGastos([...gastos, gasto]);
      const presupuestoRestante = remainingBudget - gasto.cantidadGasto;
      setRemainingBudget(presupuestoRestante);
      setCrearGasto(false);
    }
  }, [gasto, crearGasto, gastos, remainingBudget]);

  return (
    <div className="container">
      <header>
        <h1> Gasto Semanal</h1>
        <div className="contenido-principal contenido ">
          {showInitialComponent ? (
            <PreguntaInicial
              setRemainingBudget={setRemainingBudget}
              setBudget={setBudget}
              setShowInitialComponent={setShowInitialComponent}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form setGasto={setGasto} setCrearGasto={setCrearGasto} />
              </div>
              <div className="one-half column">
                <List gastos={gastos} />
                <ControlPresupuesto
                  presupuesto={budget}
                  restante={remainingBudget}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
