import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => {
    setMenuActive(!menuActive);
  };

  // FUNGSI BARU: Buat nutup menu otomatis
  const closeMenu = () => {
    setMenuActive(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  const navLinkClass = ({ isActive }) => 
    `font-medium transition-colors duration-300 hover:text-[#38b5ff] active:text-[#38b5ff] ${isActive ? "text-[#38b5ff] font-bold" : "text-stone-900"}`;

  return (
    <>
      <div className={`navbar fixed w-full bg-white z-50 transition-all duration-300 ${scrolled ? "border-b-2 border-stone-100 shadow-sm py-2" : "py-4"}`}>
        <div className="container mx-auto px-2">
          <div className="navbar-box flex items-center justify-between">
            
            {/* LOGO */}
            <div className="logo">
              <h1 className="text-2xl md:text-3xl font-bold hover:opacity-80 transition-opacity">
                {/* Logo boleh pake reloadDocument biar fresh reset kalau diklik */}
                <NavLink to={"/"} className="text-stone-900" onClick={closeMenu} reloadDocument>
                  Hermando <span className="text-[#38b5ff]">Insights</span>
                </NavLink>
              </h1>
            </div>

            {/* MENU */}
            <div className={`menu flex gap-4 md:gap-8 items-center absolute md:static left-1/2 -translate-x-1/2 md:left-0 md:-translate-x-0 flex-col md:flex-row w-[90%] md:w-auto text-center rounded-xl md:rounded-none border md:border-none border-stone-100 shadow-xl md:shadow-none bg-white p-8 md:p-0 transition-all duration-300 ease-in-out ${menuActive ? "top-24 opacity-100 visible" : "-top-[500px] opacity-0 invisible md:visible md:opacity-100 md:static"}`}>
              
              {/* PERUBAHAN PENTING DI SINI: */}
              {/* 1. Tambah onClick={closeMenu} di setiap NavLink */}
              {/* 2. Hapus reloadDocument biar pindah halamannya INSTAN (SPA) */}
              
              <NavLink to={"/"} className={navLinkClass} onClick={closeMenu}>
                Beranda
              </NavLink>

              <NavLink to={"career-page"} className={navLinkClass} onClick={closeMenu}>
                Timeline Karir
              </NavLink>

              <NavLink to={"hubungi-saya"} className={navLinkClass} onClick={closeMenu}>
                Hubungi Saya
              </NavLink>

              <NavLink 
                to={"ayo-belajar"} 
                onClick={closeMenu}
                className="bg-[#38b5ff] text-white px-6 py-2 rounded-full italic font-bold shadow-lg shadow-blue-200 hover:bg-blue-600 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
              >
                Ayo Belajar! <i className="ri-rocket-line"></i>
              </NavLink>

            </div>

            {/* HAMBURGER MENU (MOBILE) */}
            <div className="menu-btn md:hidden block cursor-pointer" onClick={handleClick}>
              <i className="ri-menu-3-line ri-2x text-stone-900"></i>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;