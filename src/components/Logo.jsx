import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <div className="flex items-center">
        <span className="text-4xl mr-2">📍</span>
        <h1 className="text-[2.8rem] font-bold tracking-wide">
          <span className="text-[var(--color-brand--2)]">Travel</span>
          <span className="text-white">Pins</span>
        </h1>
      </div>
    </Link>
  );
}

export default Logo;
