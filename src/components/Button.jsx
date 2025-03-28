function Button({ children, onClick, type, className = "" }) {
  const styles = {
    primary: "font-bold bg-[var(--color-brand--2)] text-[var(--color-dark--1)] hover:bg-[var(--color-brand--1)] transition-colors duration-300",
    back: "font-semibold bg-transparent border border-current hover:bg-[var(--color-dark--1)] transition-colors duration-300",
    position: "font-bold absolute z-[1000] text-sm bottom-16 left-1/2 -translate-x-1/2 bg-[var(--color-brand--2)] text-[var(--color-dark--1)] shadow-lg hover:bg-[var(--color-brand--1)] transition-colors duration-300"
  };

  return (
    <button 
      onClick={onClick} 
      className={`text-inherit uppercase py-2 px-6 font-inherit text-base border-none rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--color-brand--2)] focus:ring-opacity-50 ${styles[type]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
