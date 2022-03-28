import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";
import { CalendarScreen } from "../components/calendar/CalendarScreen";
import { startChecking } from "../redux/actions/authAction";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const AppRouter = () => {
    const dispatch = useDispatch();
    const { checking, uid } = useSelector((state) => state.auth);
    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch,uid]);

    if (checking) {
        return (
            <div
                className="d-flex justify-content-center spinner-border"
                role="status"
            >
                <span className="sr-only">Loading...</span>
            </div>
        );
    } else {
        return (
            <>
                <Routes>
                    {!uid && <Route path="/login" element={<LoginScreen />} />}
                    {uid && (
                        <>
                            <Route path="/" element={<CalendarScreen />} />
                            <Route path="*" element={<CalendarScreen />} />
                        </>
                    )}
                    <Route path="/register" element={<RegisterScreen />} />
                </Routes>
            </>
        );
    }
};
