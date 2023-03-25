import { ReactNode } from "react";
import Footer from "./Footer";
import NavBar from "./navBar/NavBar";

interface IMainLayout {
  children: ReactNode;
}

export default function MainLayout(props: IMainLayout) {
  return (
    <>
      <NavBar />
      <>{props.children}</>
      <Footer />
    </>
  );
}
