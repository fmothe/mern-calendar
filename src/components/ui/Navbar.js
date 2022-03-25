import React, { useReducer } from "react";
import { useSelector } from "react-redux";
import { FabButton } from "./FabButton";

export const Navbar = () => {
  const {name} = useSelector(state => state.auth);
  return (
    <div className="navbar navbar-dark bg-dark mb-4">
      <span className="navbar-brand ms-4">{name}</span>
      {/* <div className="justify-content-center">
        <FabButton />
      </div> */}
      <button className="btn btn-outline-danger">
        <i className="fas fa-sign-out"></i>
        <span> Salir</span>
      </button>
    </div>
  );
};
