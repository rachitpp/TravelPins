function Spinner() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-24 h-24 rounded-full bg-[conic-gradient(#0000_10%,var(--color-light--2))] [mask:radial-gradient(farthest-side,#0000_calc(100%-8px),#000_0)] animate-spin-slow"></div>
    </div>
  );
}

export default Spinner;
