import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import User from "../components/User";

function AppLayout() {
  return (
    <div className="h-screen p-0 overscroll-none flex relative">
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
