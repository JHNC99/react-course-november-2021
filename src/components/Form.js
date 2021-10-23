import useForm from "../hooks/useForm";

export default function Form({ addData }) {
 
  /* custom hooks del formulario */
  const [formValues, handleChange, validateForm] = useForm({
    email: "",
    name: "",
  });

  /* Funcion para  renderizar los datos*/
   const addFormData= (e) => {
     e.preventDefault();
      addData(formValues);
  }

  /* Destructuring  del state */
  const { email, name } = formValues;
  return (
    <form onSubmit={addFormData}>
      <div className="mb-3">
        <label className="form-label">CORREO</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">NOMBRE</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        disabled={validateForm()}
      >
        Submit
      </button>
    </form>
  );
}
