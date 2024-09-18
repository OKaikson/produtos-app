import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/Main'
import Repositorio from './pages/Repositorio'
import Visualizar from "./pages/Visualizar";

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Visualizar}/>
                <Route path="/visualizar" Component={Visualizar}/>
                {/* <Route path="/repositorio/:repositorio" Component={Repositorio}/> */}
            </Routes>
        </BrowserRouter>
    )
}