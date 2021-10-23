import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
/* COMPONENTES */
import Form from "./components/Form";
import Card from "./components/Card";
import EditForm from "./components/EditForm";
import { useEffect, useState } from "react";
export default function App() {
  /* variable para obtener los datos al storage */
  let initialValues = JSON.parse(localStorage.getItem("values"));
  if (!initialValues) {
    initialValues = [];
  }

  /* State para almacenar datos */
  const [values, setValues] = useState(initialValues);

  //usseEfect para cargar en el storage
  useEffect(() => {
    let initialValues = JSON.parse(localStorage.getItem("values"));
    if (initialValues) {
      localStorage.setItem("values", JSON.stringify(values));
    } else {
      localStorage.setItem("values", JSON.stringify([]));
    }
  }, [values]);


  /* Funcion para agregar datos al componente Card */
  const addData = (value) => {
    setValues([...values, value]);
  };

  //Funcion para borrar los items
  const deleteData = (id) => {
    const newDate = values.filter((values) => values.id !== id);
    setValues(newDate);
  };


  /* Funcion y state para editar formulario */
  const [editing, setEditing] = useState(false);

  const initialUser = { id: null, name: "", email: "" };

  const [currentUser, setCurrentUser] = useState(initialUser);

  const editValues = (id,values) => {
    setEditing(true);
    setCurrentUser(values);
  };

  const updateUser = (newValues) => {
    setValues(
      values.map((values) => (values.id === currentUser.id ? newValues:values))
    );
    setCurrentUser(initialUser);
    setEditing(false);
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
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditForm
                currentUser={currentUser}
                setEditing={setEditing}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <Form addData={addData} />
            </div>
          )}

          </div>
          <div className="col-md-8">
            <h1>Datos</h1>
            <Card dataForm={values} deleteData={deleteData} editValues={editValues}/>
          </div>
        </div>
      </div>
    </>
  );
}
