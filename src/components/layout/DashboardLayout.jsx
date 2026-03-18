import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const DashboardLayout = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-slate-50">
      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex flex-col flex-1 md:pl-64 w-full h-full overflow-hidden">
        {/* Mobile header (Optional: could add a hamburger menu here later) */}
        <div className="sticky top-0 z-10 md:hidden flex h-16 flex-shrink-0 items-center gap-x-4 border-b border-slate-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
          <div className="font-bold text-slate-900 text-lg">AdminDash</div>
        </div>

        {/* Scrollable page content */}
        <main className="flex-1 relative overflow-y-auto focus:outline-none w-full h-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
