import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => (
  <div className="min-h-screen bg-surface text-foreground font-body">
    <Navbar />
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-4 pb-24 pt-28 sm:px-6 lg:px-8">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default MainLayout;
