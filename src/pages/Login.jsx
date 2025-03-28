import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import PageNav from "../components/PageNav";
import { useAuth } from "../contexts/FakeAuthContext";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setAnimateIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    if (email && password) {
      setIsLoggingIn(true);
      // Simulate a loading state for better user experience
      setTimeout(() => {
        login(email, password);
        setIsLoggingIn(false);
      }, 800);
    }
  }

  useEffect(
    function () {
      if (isAuthenticated) navigate("/app", { replace: true });
    },
    [isAuthenticated, navigate]
  );

  return (
    <main className="h-[calc(100vh-5rem)] m-10 bg-[linear-gradient(rgba(36,42,46,0.8),rgba(36,42,46,0.8)),url('/bg.jpg')] bg-cover bg-center p-10 overflow-hidden">
      <PageNav />

      <section className="h-[85%] flex items-center justify-center">
        <form 
          className={`bg-[var(--color-dark--2)] rounded-lg p-10 flex flex-col gap-6 max-w-md w-full shadow-lg transition-all duration-700 ease-out transform ${
            animateIn ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
          }`}
          onSubmit={handleSubmit}
        >
          <div className="w-20 h-20 bg-[var(--color-brand--2)] rounded-full flex items-center justify-center 
                         mx-auto -mt-20 shadow-lg animate-spin-slow">
            <span className="text-4xl">🌍</span>
          </div>
          
          <h2 className={`text-3xl font-bold text-center text-[var(--color-brand--2)] mb-2 transition-all duration-500 ease-out ${
            animateIn ? 'opacity-100' : 'opacity-0'
          }`}
            style={{ transitionDelay: '200ms' }}
          >
            Login to WorldWise
          </h2>
          
          <div className={`flex flex-col gap-2 group transition-all duration-500 ease-out transform ${
            animateIn ? 'translate-x-0 opacity-100' : 'translate-x-[-30px] opacity-0'
          }`}
            style={{ transitionDelay: '400ms' }}
          >
            <label htmlFor="email" className="text-xl font-semibold text-[var(--color-light--2)] group-focus-within:text-[var(--color-brand--2)] transition-colors duration-300">
              Email address
            </label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="text-lg p-4 rounded-md bg-[var(--color-dark--1)] text-[var(--color-light--2)] 
                       border-2 border-transparent focus:border-[var(--color-brand--2)] 
                       focus:outline-none transition-all duration-300"
              disabled={isLoggingIn}
            />
          </div>

          <div className={`flex flex-col gap-2 group transition-all duration-500 ease-out transform ${
            animateIn ? 'translate-x-0 opacity-100' : 'translate-x-[30px] opacity-0'
          }`}
            style={{ transitionDelay: '600ms' }}
          >
            <label htmlFor="password" className="text-xl font-semibold text-[var(--color-light--2)] group-focus-within:text-[var(--color-brand--2)] transition-colors duration-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="text-lg p-4 rounded-md bg-[var(--color-dark--1)] text-[var(--color-light--2)] 
                       border-2 border-transparent focus:border-[var(--color-brand--2)] 
                       focus:outline-none transition-all duration-300"
              disabled={isLoggingIn}
            />
          </div>

          <div className={`mt-4 transition-all duration-500 ${
            animateIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
            style={{ transitionDelay: '800ms' }}
          >
            <Button 
              type="primary" 
              className={`w-full py-3 text-lg transform hover:scale-105 transition-transform duration-300 ${isLoggingIn ? 'opacity-80' : ''}`}
            >
              {isLoggingIn ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Logging in...
                </span>
              ) : 'Login'}
            </Button>
          </div>
          
          <p className={`text-sm text-center text-[var(--color-light--2)] opacity-80 mt-2 transition-all duration-500 ${
            animateIn ? 'opacity-80 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
            style={{ transitionDelay: '1000ms' }}
          >
            Don't have an account? <span className="text-[var(--color-brand--2)] cursor-pointer hover:text-[var(--color-brand--1)] transition-colors duration-300">Sign up</span>
          </p>
        </form>
      </section>
    </main>
  );
}
