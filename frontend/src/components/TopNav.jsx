import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/";

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="relative">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="rounded p-2 text-gray-200 hover:bg-white/10 md:hidden"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="legal-menu"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          {!isHome && (
            <Link
              to="/"
              onClick={closeMenu}
              className="hidden text-sm font-semibold uppercase tracking-wide text-gray-200 hover:text-white md:inline"
            >
              Home
            </Link>
          )}
        </div>

        <div className="flex items-center gap-3">
          {!isHome && (
            <Link
              to="/"
              onClick={closeMenu}
              className="text-sm font-semibold uppercase tracking-wide text-gray-200 hover:text-white md:hidden"
            >
              Home
            </Link>
          )}
          <div className="hidden items-center gap-3 text-sm font-semibold uppercase tracking-wide text-gray-300 md:flex">
            <NavLink
              to="/tos"
              className={({ isActive }) =>
                `rounded px-2 py-1 hover:text-white ${
                  isActive ? "bg-white/10 text-white" : ""
                }`
              }
            >
              Terms of Service
            </NavLink>
            <NavLink
              to="/privacy"
              className={({ isActive }) =>
                `rounded px-2 py-1 hover:text-white ${
                  isActive ? "bg-white/10 text-white" : ""
                }`
              }
            >
              Privacy Policy
            </NavLink>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
        aria-hidden={!menuOpen}
      />
      <aside
        id="legal-menu"
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900/95 p-5 text-sm text-gray-200 shadow-xl transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="mb-6 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">
            Menu
          </span>
          <button
            type="button"
            onClick={closeMenu}
            className="rounded bg-white/10 px-2 py-1 text-xs text-gray-200 hover:bg-white/20"
            aria-label="Close menu"
          >
            Close
          </button>
        </div>
        <div className="flex flex-col gap-2">
          {!isHome && (
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) =>
                `rounded px-3 py-2 hover:text-white ${
                  isActive ? "bg-white/10 text-white" : ""
                }`
              }
            >
              Home
            </NavLink>
          )}
          <NavLink
            to="/tos"
            onClick={closeMenu}
            className={({ isActive }) =>
              `rounded px-3 py-2 hover:text-white ${
                isActive ? "bg-white/10 text-white" : ""
              }`
            }
          >
            Terms of Service
          </NavLink>
          <NavLink
            to="/privacy"
            onClick={closeMenu}
            className={({ isActive }) =>
              `rounded px-3 py-2 hover:text-white ${
                isActive ? "bg-white/10 text-white" : ""
              }`
            }
          >
            Privacy Policy
          </NavLink>
        </div>
      </aside>
    </nav>
  );
}

export default TopNav;
