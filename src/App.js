import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
/* COMPONENTES */
import Form from "./components/Form";
import Card from "./components/Card";
import { useState } from "react";
export default function App() {
  /* State para almacenar datos */
  const [values, setValues] = useState([]);

  /* Funcion para agregar datos al componente Card */
  const addData = (value) => {
    setValues([...values, value]);
  };

  return (
    <>
      <header className="navbar navbar-expand-lg bg-dark">
        <div className="container">
          <h2>logo</h2>
        </div>
      </header>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h1>Formulario</h1>
            <Form addData={addData} />
          </div>
          <div className="col-md-8">
            <h1>Datos</h1>
            <Card dataForm={values}/>
          </div>
        </div>
      </div>
    </>
  );
}
