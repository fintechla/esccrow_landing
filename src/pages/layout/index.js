import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { ContainerLayout } from "./styles";

function Layout({ children, theme, onChangeTheme }) {
  return (
    <ContainerLayout>
      <Header theme={theme} onChangeTheme={onChangeTheme} />
      {children}
      <Footer />
    </ContainerLayout>
  );
}

export default Layout;
