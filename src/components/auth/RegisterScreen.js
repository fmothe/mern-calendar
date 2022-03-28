import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useForm } from "../../helpers/useForm";
import { startRegister } from "../../redux/actions/authAction";
import "../../styles/login.css";

export const RegisterScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [values, handleInputChange] = useForm({
        name: "",
        email: "",
        password: "",
        repeatPassword: "",
    });

    const { name, email, password, repeatPassword } = values;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== repeatPassword) {
            return Swal.fire({
                icon: "error",
                title: "Passwords do not match",
                showConfirmButton: false,
                timer: 1500,
            });
        }
        dispatch(startRegister(email, password, name));
        navigate('/login')

    };
    return (
        <div className="container login-container">
            <div className="row justify-content-center">
                <div className="col-md-6 login-form-2">
                    <h3>Register</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                name="name"
                                value={values.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                name="email"
                                value={values.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                name="password"
                                value={values.password}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repeat Password"
                                name="repeatPassword"
                                value={values.repeatPassword}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Crear cuenta"
                            />
                        </div>
                        <Link to="/login" className="already-account">Already have an account ?</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};
