import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";
import { CalendarScreen } from "../components/calendar/CalendarScreen";
import { startChecking } from "../redux/actions/authAction";

export const AppRouter = () => {
    const dispatch = useDispatch();
    const { checking } = useSelector((state) => state.auth);
    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch]);

    if (checking) {
        return (
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        );
    } else {
        return (
            <>
                <Routes>
                    <Route path="/" element={<CalendarScreen />} />
                    <Route path="/login" element={<LoginScreen />} />
                    <Route path="/register" element={<RegisterScreen />} />

                    {/* Si no encuentra el link ingresado */}
                    <Route path="*" element={<CalendarScreen />} />
                </Routes>
            </>
        );
    }
};
