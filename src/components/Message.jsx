function Message({ message }) {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <p className="text-center text-2xl w-4/5 mx-auto font-semibold p-8 bg-[var(--color-dark--2)] rounded-lg shadow-lg transition-all duration-500 animate-fadeIn border-l-4 border-[var(--color-brand--2)]">
        <span role="img" className="text-4xl block mb-4 animate-bounce">👋</span> 
        {message}
      </p>
    </div>
  );
}

export default Message;
