import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "@/contexts/AuthProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="*" element={<App />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
