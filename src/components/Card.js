import React from "react";

export default function Table({dataForm}) {
  return (
    dataForm.map((data)=>{
      const {name,email}=data
      return(
        <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            {email}
          </p>
        </div>
      </div>
      )
    })
  );
}
