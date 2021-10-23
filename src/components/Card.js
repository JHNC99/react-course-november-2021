import React from "react";

export default function Table({ dataForm, deleteData, editValues }) {
  return dataForm.map((data, idx) => {
    const { name, email, id } = data;
    return (
      <div className="card" key={idx}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{email}</p>
          <button className="btn btn-danger" onClick={() => deleteData(id)}>
            Borrar dato
          </button>
          <button
            className="btn btn-warning m-2"
            onClick={() => editValues(id, data)}
          >
            Editar
          </button>
        </div>
      </div>
    );
  });
}
