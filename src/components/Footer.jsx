const Footer = () => {
  return (
    <div className="bg-white py-6 border-t border-stone-200">
      <div className="container mx-auto px-2 flex justify-between items-center md:flex-row flex-col md:gap-0 gap-2">

        {/* Teks Copyright */}
        <p className="text-stone-950 text-base/loose">
          &copy; Copyright by <span className="font-bold">David Marlon</span> 2026
        </p>

        {/* Bagian Social Media */}
        <div className="flex items-center md:gap-4 gap-1">
          <p className="text-stone-950 text-base/loose">Social Media</p>
          <span className="text-stone-950 hidden md:block">-</span>

          {/* 1. EMAIL */}
          <a href="mailto:dvdhermando@gmail.com" target="_blank" rel="noreferrer">
            <i className="ri-mail-fill text-stone-950 ri-2x hover:text-[#38b5ff] transition-colors duration-300"></i>
          </a>

          {/* 2. GITHUB */}
          <a href="https://github.com/hermando-insights" target="_blank" rel="noreferrer">
            <i className="ri-github-fill text-stone-950 ri-2x hover:text-[#38b5ff] transition-colors duration-300"></i>
          </a>
          
          {/* 3. LINKEDIN */}
          <a href="https://linkedin.com/in/dvdhermando" target="_blank" rel="noreferrer">
            <i className="ri-linkedin-fill text-stone-950 ri-2x hover:text-[#38b5ff] transition-colors duration-300"></i>
          </a>
          
          {/* 4. INSTAGRAM */}
          <a href="https://www.instagram.com/davidhermando/" target="_blank" rel="noreferrer">
            <i className="ri-instagram-fill text-stone-950 ri-2x hover:text-[#38b5ff] transition-colors duration-300"></i>
          </a>
          
          {/* 5. YOUTUBE */}
          <a href="https://youtube.com/@AkunGabut-z9f" target="_blank" rel="noreferrer">
            <i className="ri-youtube-fill text-stone-950 ri-2x hover:text-[#38b5ff] transition-colors duration-300"></i>
          </a>

          {/* 6. TIKTOK */}
          <a href="https://tiktok.com/@gabut_ah15" target="_blank" rel="noreferrer">
            <i className="ri-tiktok-fill text-stone-950 ri-2x hover:text-[#38b5ff] transition-colors duration-300"></i>
          </a>

        </div>
      </div>
    </div>
  );
};

export default Footer;