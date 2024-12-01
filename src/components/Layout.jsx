import {
  Music,
  Home,
  TrendingUp,
  Library,
  Compass,
  Settings,
  LogOut,
} from "lucide-react";
import { Link } from "react-router-dom"; // Ensure react-router-dom is installed
import { cn } from "../lib/utils"; // Replace with a `classnames` utility if unavailable
import logo from "../assets/image copy 4.png";

function NavItem({ href, icon, label, isActive }) {
  return (
    <Link
      to={href} // Correct routing property for react-router-dom
      className={cn(
        "flex items-center gap-3 px-4 py-3 text-sm rounded-lg transition-colors",
        isActive ? "bg-black text-red-500" : "hover:bg-gray-800 text-gray-300"
      )}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </Link>
  );
}

export function Layout({ children }) {
  return (
    <div className="flex h-screen bg-black text-white">
      {/* Sidebar */}
      <aside className="w-[280px] flex flex-col bg-black border-r border-gray-800">
        {/* Logo Section */}
        <div className="p-6">
          <div className="flex items-center gap-2 text-2xl font-semibold">
            <img src={logo} alt="Dream Music Logo" className="h-10 w-10" />
            <span className="text-red-500">
              Dream<span className="text-white">Music</span>
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-4">
          {/* Menu Section */}
          <div className="ml-9">
            <p className="px-2 py-2 text-xs font-bold text-gray-500 tracking-wider">
              MENU
            </p>
            <NavItem
              href="/"
              icon={<Home className="h-5 w-5 text-red-500" />}
              label="Home"
            />
            <NavItem
              href="/trends"
              icon={<TrendingUp className="h-5 w-5 text-red-500" />}
              label="Trends"
            />
            <NavItem
              href="/library"
              icon={<Library className="h-5 w-5 text-red-500" />}
              label="Library"
            />
            <NavItem
              href="/discover"
              icon={<Compass className="h-5 w-5 text-red-500" />}
              label="Discover"
            />
          </div>
        </nav>
        {/* General Section */}
        <div className="mb-16 ml-9">
          <p className="px-2 py-2 text-xs font-bold text-gray-500 tracking-wider">
            GENERAL
          </p>
          <NavItem
            href="/settings"
            icon={<Settings className="h-5 w-5 text-red-500" />}
            label="Settings"
          />
          <NavItem
            href="/logout"
            icon={<LogOut className="h-5 w-5 text-red-500" />}
            label="Log Out"
          />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
