function CountryItem({ country }) {
  return (
    <li className="flex flex-col items-center gap-1 text-xl font-semibold bg-[var(--color-dark--2)] rounded-lg p-4 pl-8 border-l-4 border-[var(--color-brand--1)]">
      <span className="text-5xl leading-none">{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
