import React from "react";
import AppRoutes from "./routes";
import GlobalStyle from "./styles/global"
import Footer from "./pages/Components/footer";
import Header from "./pages/Components/header";

function App() {
  return (
    <>
      <GlobalStyle/>
      <AppRoutes/>

    </>
  );
}

export default App;
