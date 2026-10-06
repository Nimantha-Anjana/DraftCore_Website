import { Outlet } from "react-router-dom";

import Navbar from "../components/navigation/Navbar";
import Footer from "../components/footer/Footer";

function MainLayout() {
  return (
    <div className="app">
      <Navbar />

      <main className="main-content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;