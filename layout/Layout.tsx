import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./navbar/Navbar";
import WhatsAppButton from "@/components/common/WhatsAppButton";

interface IMainLayout {
  children: ReactNode;
}

export default function Layout(props: IMainLayout) {
  return (
    <>
      <Navbar />
      <>{props.children}</>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
