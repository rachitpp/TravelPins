import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";

function User() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleClick() {
    logout();
    navigate("/");
  }

  return (
    <div className="absolute top-[4.2rem] right-[4.2rem] bg-[var(--color-dark--1)] p-4 px-6 rounded-lg z-[999] shadow-lg text-base font-semibold flex items-center gap-6">
      <img src={user.avatar} alt={user.name} className="rounded-full h-16" />
      <span>Welcome, {user.name}</span>
      <button 
        onClick={handleClick}
        className="bg-[var(--color-dark--2)] rounded-lg border-none py-1.5 px-5 text-inherit font-inherit text-xs font-bold uppercase cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
}

export default User;

/*
CHALLENGE

1) Add `AuthProvider` to `App.jsx`
2) In the `Login.jsx` page, call `login()` from context
3) Inside an effect, check whether `isAuthenticated === true`. If so, programatically navigate to `/app`
4) In `User.js`, read and display logged in user from context (`user` object). Then include this component in `AppLayout.js`
5) Handle logout button by calling `logout()` and navigating back to `/`
*/
