import React, { useReducer } from "react";
import { navigate } from "react-big-calendar/lib/utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { startLogoutAction } from "../../redux/actions/authAction";
import { FabButton } from "./FabButton";

export const Navbar = () => {
    const { name } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logout = () => {
        dispatch(startLogoutAction());
        navigate("/login");
    };
    return (
        <div className="navbar navbar-dark bg-dark mb-4">
            <span className="navbar-brand ms-4">{name}</span>
            {/* <div className="justify-content-center">
        <FabButton />
      </div> */}
            <button className="btn btn-outline-danger" onClick={logout}>
                <i className="fas fa-sign-out"></i>
                <span> Salir</span>
            </button>
        </div>
    );
};
