import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function PageNav() {
  return (
    <nav className="flex items-center justify-between">
      <Logo />

      <ul className="list-none flex items-center gap-16">
        <li>
          <NavLink 
            to="/pricing" 
            className={({ isActive }) => 
              `no-underline text-[var(--color-light--2)] uppercase text-base font-semibold ${
                isActive ? "text-[var(--color-brand--2)]" : ""
              }`
            }
          >
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/product" 
            className={({ isActive }) => 
              `no-underline text-[var(--color-light--2)] uppercase text-base font-semibold ${
                isActive ? "text-[var(--color-brand--2)]" : ""
              }`
            }
          >
            Product
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/login" 
            className="bg-[var(--color-brand--2)] text-[var(--color-dark--0)] py-3 px-8 rounded-lg no-underline uppercase text-base font-semibold"
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
