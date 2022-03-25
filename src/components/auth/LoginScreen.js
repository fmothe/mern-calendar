import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "../../helpers/useForm";
import { startLogin } from "../../redux/actions/authAction";
import "../../styles/login.css";

export const LoginScreen = () => {
    const dispatch = useDispatch();
    const [values, handleInputChange] = useForm({
        email: "",
        password: "",
    });

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLogin(values.email, values.password));
    };
    return (
        <div className="container login-container">
            <div className="row justify-content-center">
                <div className="col-md-6 login-form-1">
                    <h3>Login</h3>
                    <form onSubmit={handleLogin}>
                        <div className="form-group mb-2">
                            <input
                                type="text"
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
                                type="submit"
                                className="btnSubmit"
                                value="Login"
                            />
                        </div>
                        <Link to="/register">Create an account</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};
