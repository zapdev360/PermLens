import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  FileText,
  Shield,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";

function Sidebar({ children }) {
  const [collapsed, setCollapsed] = useState(() => {
    const saved = localStorage.getItem("sidebar-collapsed");
    return saved === "true";
  });

  return (
    <div className="hidden md:flex min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div
        className={`relative transition-all duration-300 ${
          collapsed ? "w-20" : "w-64"
        }`}
      >
        <aside className="h-full bg-white/5 px-4 py-6">
          <div
            className={`flex items-center mb-8 ${
              collapsed ? "justify-center" : "justify-between"
            }`}
          >
            {!collapsed && (
              <span className="text-sm font-semibold tracking-wide text-gray-300">
                PermLens
              </span>
            )}

            <button
              onClick={() => {
                const next = !collapsed;
                setCollapsed(next);
                localStorage.setItem("sidebar-collapsed", next);
              }}
              className="rounded-md bg-white/10 p-2 text-gray-300 hover:bg-white/20 hover:text-white transition"
            >
              {collapsed ? (
                <PanelLeftOpen size={18} strokeWidth={1.8} />
              ) : (
                <PanelLeftClose size={18} strokeWidth={1.8} />
              )}
            </button>
          </div>

          <nav className="flex flex-col gap-3 text-sm font-semibold tracking-wide">
            <NavLink to="/" end>
              {({ isActive }) => (
                <div
                  className={`group relative flex items-center ${
                    collapsed ? "justify-center" : ""
                  } rounded px-3 py-2 transition ${
                    isActive
                      ? "text-white"
                      : "text-gray-400 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span
                    className={`absolute left-0 top-0 h-full w-1 rounded-r bg-white transition-all duration-200 ease-out ${
                      isActive
                        ? "opacity-100 scale-y-100"
                        : "opacity-0 scale-y-50"
                    }`}
                    style={{ transformOrigin: "top" }}
                  />

                  <span className="transition-transform duration-200 group-hover:scale-110">
                    <Home size={20} strokeWidth={1.6} />
                  </span>

                  {!collapsed && (
                    <span className="ml-3 transition-opacity duration-200">
                      Home
                    </span>
                  )}

                  {collapsed && (
                    <span className="absolute left-full ml-3 whitespace-nowrap rounded bg-black/80 px-2 py-1 text-xs opacity-0 shadow transition-opacity group-hover:opacity-100">
                      Home
                    </span>
                  )}
                </div>
              )}
            </NavLink>

            <NavLink to="/tos">
              {({ isActive }) => (
                <div
                  className={`group relative flex items-center ${
                    collapsed ? "justify-center" : ""
                  } rounded px-3 py-2 transition ${
                    isActive
                      ? "text-white"
                      : "text-gray-400 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span
                    className={`absolute left-0 top-0 h-full w-1 rounded-r bg-white transition-all duration-200 ease-out ${
                      isActive
                        ? "opacity-100 scale-y-100"
                        : "opacity-0 scale-y-50"
                    }`}
                    style={{ transformOrigin: "top" }}
                  />

                  <span className="transition-transform duration-200 group-hover:scale-110">
                    <FileText size={20} strokeWidth={1.6} />
                  </span>

                  {!collapsed && (
                    <span className="ml-3 transition-opacity duration-200">
                      Terms of Service
                    </span>
                  )}

                  {collapsed && (
                    <span className="absolute left-full ml-3 whitespace-nowrap rounded bg-black/80 px-2 py-1 text-xs opacity-0 shadow transition-opacity group-hover:opacity-100">
                      Terms of Service
                    </span>
                  )}
                </div>
              )}
            </NavLink>

            <NavLink to="/privacy">
              {({ isActive }) => (
                <div
                  className={`group relative flex items-center ${
                    collapsed ? "justify-center" : ""
                  } rounded px-3 py-2 transition ${
                    isActive
                      ? "text-white"
                      : "text-gray-400 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span
                    className={`absolute left-0 top-0 h-full w-1 rounded-r bg-white transition-all duration-200 ease-out ${
                      isActive
                        ? "opacity-100 scale-y-100"
                        : "opacity-0 scale-y-50"
                    }`}
                    style={{ transformOrigin: "top" }}
                  />

                  <span className="transition-transform duration-200 group-hover:scale-110">
                    <Shield size={20} strokeWidth={1.6} />
                  </span>

                  {!collapsed && (
                    <span className="ml-3 transition-opacity duration-200">
                      Privacy Policy
                    </span>
                  )}

                  {collapsed && (
                    <span className="absolute left-full ml-3 whitespace-nowrap rounded bg-black/80 px-2 py-1 text-xs opacity-0 shadow transition-opacity group-hover:opacity-100">
                      Privacy Policy
                    </span>
                  )}
                </div>
              )}
            </NavLink>
          </nav>
        </aside>
      </div>

      <div className="w-px bg-white/10" />

      <div className="flex-1">
        <div className="mx-auto max-w-3xl px-8 py-10">{children}</div>
      </div>
    </div>
  );
}

export default Sidebar;
