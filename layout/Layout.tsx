import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./navBar/NavBar";

interface IMainLayout {
  children: ReactNode;
}

export default function Layout(props: IMainLayout) {
  return (
    <>
      <Navbar />
      <>{props.children}</>
      <Footer />
    </>
  );
}
