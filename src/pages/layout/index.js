import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { ContainerLayout } from "./styles";

function Layout({ children }) {
  return (
    <ContainerLayout>
      <Header />
      {children}
      <Footer />
    </ContainerLayout>
  );
}

export default Layout;
