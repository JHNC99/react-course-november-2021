import { useState } from "react";

export default function useForm(initialState = {}) {
  
    /* State del formulario */
  const [values, setValues] = useState(initialState);
  
  /* Funcion para guardar los datos en el state */
  const handleChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };
  
  /* Funcion para validar formulario */
  const validateForm = (e) => {
    var valid = true;
    if (!values.email.length || ! values.name.length) {
      return valid;
    }}

  return [values, handleChange,validateForm];
}
