import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";
import { CalendarScreen } from "../components/calendar/CalendarScreen";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CalendarScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen/>}/>

        {/* Si no encuentra el link ingresado */}
        <Route path="*" element={<CalendarScreen />} />
      </Routes>
    </>
  );
};
