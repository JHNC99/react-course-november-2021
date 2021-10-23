import { useState, useEffect } from "react";
export default function Form(props) {
  console.log(props);
  useEffect(() => {
    setValues(props.currentUser);
  }, [props]);

  const [values, setValues] = useState(props.currentUser);

  const { email, name } = values;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.name && values.email) props.updateUser(values);
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button className="btn btn-success m-2" type="submit">
        Editar Usuario
      </button>
      <button
        className="btn btn-danger"
        type="submit"
        onClick={() => props.setEditing(false)}
      >
        Cancelar
      </button>
    </form>
  );
}
