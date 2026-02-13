const Footer = () => {
  return (
    <div className="bg-white py-6 border-t border-stone-200">
      <div className="container mx-auto px-4 flex justify-between items-center md:flex-row flex-col gap-4 md:gap-0">

        {/* Teks Copyright */}
        <p className="text-stone-950 text-sm md:text-base text-center md:text-left">
          &copy; Copyright by <span className="font-bold">David Marlon</span> 2026
        </p>

        {/* Bagian Social Media */}
        <div className="flex items-center gap-3 md:gap-4">
          <p className="text-stone-950 text-sm md:text-base font-medium hidden md:block">Social Media</p>
          <span className="text-stone-950 hidden md:block">-</span>

          {/* 1. EMAIL (Gmail Red) */}
          <a href="mailto:dvdhermando@gmail.com" target="_blank" rel="noreferrer">
            <i className="ri-mail-fill text-stone-950 text-2xl hover:text-[#EA4335] active:text-[#EA4335] transition-colors duration-300"></i>
          </a>

          {/* 2. GITHUB (Theme Blue - karena logo aslinya hitam, biar kelihatan beda pas di-hover) */}
          <a href="https://github.com/hermando-insights" target="_blank" rel="noreferrer">
            <i className="ri-github-fill text-stone-950 text-2xl hover:text-[#38b5ff] active:text-[#38b5ff] transition-colors duration-300"></i>
          </a>
          
          {/* 3. LINKEDIN (LinkedIn Blue) */}
          <a href="https://linkedin.com/in/dvdhermando" target="_blank" rel="noreferrer">
            <i className="ri-linkedin-fill text-stone-950 text-2xl hover:text-[#0077b5] active:text-[#0077b5] transition-colors duration-300"></i>
          </a>
          
          {/* 4. INSTAGRAM (IG Pink/Purple) */}
          <a href="https://www.instagram.com/davidhermando/" target="_blank" rel="noreferrer">
            <i className="ri-instagram-fill text-stone-950 text-2xl hover:text-[#E1306C] active:text-[#E1306C] transition-colors duration-300"></i>
          </a>
          
          {/* 5. YOUTUBE (YouTube Red) */}
          <a href="https://youtube.com/@AkunGabut-z9f" target="_blank" rel="noreferrer">
            <i className="ri-youtube-fill text-stone-950 text-2xl hover:text-[#FF0000] active:text-[#FF0000] transition-colors duration-300"></i>
          </a>

          {/* 6. TIKTOK (Theme Blue - biar ada feedback visual karena logo aslinya hitam) */}
          <a href="https://tiktok.com/@gabut_ah15" target="_blank" rel="noreferrer">
            <i className="ri-tiktok-fill text-stone-950 text-2xl hover:text-[#38b5ff] active:text-[#38b5ff] transition-colors duration-300"></i>
          </a>

        </div>
      </div>
    </div>
  );
};

export default Footer;