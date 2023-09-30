import { ReactNode } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="layout">
      <Sidebar />
      <main>
        <Header />
        {children}
      </main>
    </div>
  );
};

export default Layout;
