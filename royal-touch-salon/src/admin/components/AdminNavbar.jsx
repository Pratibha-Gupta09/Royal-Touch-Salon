import { Bell, Menu } from "lucide-react";

const AdminNavbar = ({ setMobileOpen }) => {
  const storedAdmin = localStorage.getItem("admin");

  let admin = null;

  try {
    admin = storedAdmin ? JSON.parse(storedAdmin) : null;
  } catch {
    admin = null;
  }

  return (
    <header className="sticky top-0 z-30 flex h-[76px] items-center justify-between border-b border-gray-200/80 bg-white/95 px-4 backdrop-blur-md sm:px-6 lg:px-8">
      {/* Left */}
      <div className="flex items-center gap-3">
        {/* Mobile Menu */}
        <button
          onClick={() => setMobileOpen(true)}
          className="rounded-xl p-2.5 text-gray-600 transition hover:bg-gray-100 md:hidden"
        >
          <Menu size={22} />
        </button>

        <div>
          <p className="text-[11px] font-medium uppercase tracking-[1.5px] text-gray-400">
            Welcome back
          </p>

          <h2 className="mt-0.5 text-base font-semibold text-[#121212]">
            {admin?.name || "Admin"}
          </h2>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <button className="relative rounded-xl p-2.5 text-gray-500 transition hover:bg-gray-100 hover:text-[#B76E79]">
          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#B76E79] ring-2 ring-white" />
        </button>

        {/* Avatar */}
        <div className="hidden h-9 w-9 items-center justify-center rounded-full bg-[#B76E79]/10 text-sm font-semibold text-[#B76E79] sm:flex">
          {admin?.name?.charAt(0)?.toUpperCase() || "A"}
        </div>
      </div>
    </header>
  );
};

export default AdminNavbar;
