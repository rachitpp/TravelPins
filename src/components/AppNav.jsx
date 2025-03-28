import { NavLink } from "react-router-dom";

function AppNav() {
  return (
    <nav className="mt-8 mb-8 w-full">
      <ul className="flex list-none bg-[var(--color-dark--2)] rounded-lg shadow-md overflow-hidden">
        <li className="flex-1">
          <NavLink 
            to="cities" 
            className={({ isActive }) => 
              `block text-center text-inherit no-underline uppercase text-sm font-bold py-3 px-8 transition-all duration-300 ease-in-out ${
                isActive 
                  ? "bg-[var(--color-brand--2)] text-[var(--color-dark--1)]" 
                  : "hover:bg-[var(--color-dark--1)] hover:text-[var(--color-light--1)]"
              }`
            }
          >
            Cities
          </NavLink>
        </li>
        <li className="flex-1">
          <NavLink 
            to="countries" 
            className={({ isActive }) => 
              `block text-center text-inherit no-underline uppercase text-sm font-bold py-3 px-8 transition-all duration-300 ease-in-out ${
                isActive 
                  ? "bg-[var(--color-brand--2)] text-[var(--color-dark--1)]" 
                  : "hover:bg-[var(--color-dark--1)] hover:text-[var(--color-light--1)]"
              }`
            }
          >
            Countries
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
