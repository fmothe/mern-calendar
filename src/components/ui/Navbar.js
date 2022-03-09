import React from "react";
import { FabButton } from "./FabButton";

export const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark mb-4">
      <span className="navbar-brand">KKKK</span>
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
