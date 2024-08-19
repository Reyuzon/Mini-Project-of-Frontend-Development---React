import React from "react";
import { Route, Routes } from "react-router-dom";
import WithAuth from "./components/WithAuth";
import Login from "./pages/Login";
import Home from "./pages/Home";
import WithoutAuth from "./components/WithoutAuth";
import Register from "./pages/Register";
import Error from "./pages/Error";
import Detail from "./pages/Detail";

export default function Router() {
  return (
    <Routes>
      <Route index Component={WithAuth(Home)} />
      <Route path="/detail/:id" Component={WithAuth(Detail)} />
      <Route path="/login" Component={WithoutAuth(Login)} />
      <Route path="/register" Component={WithoutAuth(Register)} />
      <Route path="*" Component={Error} />
    </Routes>
  );
}
