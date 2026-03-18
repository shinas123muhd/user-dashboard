import { Link, useLocation } from 'react-router-dom';
import { Users, LayoutDashboard, Settings, LogOut } from 'lucide-react';

const navigation = [
  { name: 'Users', href: '/admin/users', icon: Users },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="flex h-full w-64 flex-col bg-slate-900 border-r border-slate-800">
      <div className="flex h-16 shrink-0 items-center px-6 border-b border-slate-800 bg-slate-900/50">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-indigo-500 flex items-center justify-center">
            <LayoutDashboard className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white tracking-tight">Admin<span className="text-indigo-400">Dash</span></span>
        </div>
      </div>
      
      <div className="flex flex-1 flex-col overflow-y-auto pt-6 px-3">
        <nav className="flex-1 space-y-1">
          {navigation.map((item) => {
            const isActive = location.pathname.startsWith(item.href);
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-indigo-500/10 text-indigo-400'
                    : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                }`}
              >
                <item.icon
                  className={`mr-3 h-5 w-5 flex-shrink-0 transition-colors duration-200 ${
                    isActive ? 'text-indigo-400' : 'text-slate-500 group-hover:text-slate-300'
                  }`}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="shrink-0 border-t border-slate-800 p-4">
        <button className="group flex w-full items-center px-3 py-2.5 text-sm font-medium text-slate-400 rounded-lg hover:bg-slate-800/50 hover:text-red-400 transition-colors duration-200">
          <LogOut className="mr-3 h-5 w-5 text-slate-500 group-hover:text-red-400 transition-colors duration-200" aria-hidden="true" />
          Log out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
