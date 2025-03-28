import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";

function Sidebar() {
  return (
    <div className="w-[56rem] min-w-[30rem] max-w-[30%] bg-[var(--color-dark--1)] py-8 px-20 flex flex-col items-center justify-between h-screen">
      <div className="flex flex-col items-center">
        <Logo />
        <AppNav />
      </div>

      <div className="w-full flex-grow flex items-center justify-center overflow-auto my-4">
        <Outlet />
      </div>

      <footer className="w-full mb-4">
        <p className="text-xs text-[var(--color-light--1)] text-center">
          &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
