import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutPropsTypes {
  children: ReactNode;
}

const Layout = ({ children }: LayoutPropsTypes) => {
  return (
    <div className='layout'>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
