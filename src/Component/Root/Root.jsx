import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div className="md:w-11/12 mx-auto">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};
