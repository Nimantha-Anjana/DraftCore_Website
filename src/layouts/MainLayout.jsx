import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/footer/Footer";
import Cursor from "../components/animations/Cursor";

export default function MainLayout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Cursor />
      <Navbar />
      <main key={pathname} className="page-in">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
