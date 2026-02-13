import { Link } from "react-router-dom";
import { useEffect } from "react";

const Pythonpage = () => {
  // Scroll ke atas saat halaman dibuka
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-950 px-4 relative overflow-hidden">
      
      {/* Dekorasi Background (Lingkaran samar) */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#38b5ff] rounded-full blur-[150px] opacity-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600 rounded-full blur-[200px] opacity-10"></div>

      <div className="text-center relative z-10 max-w-2xl" data-aos="zoom-in" data-aos-duration="1000">
        
        {/* Ikon Animasi */}
        {/* Tambahan: active:scale-90 biar ikonnya mengecil pas disentuh */}
        <div className="mb-8 relative inline-block transition-transform duration-300 active:scale-90 cursor-pointer">
            {/* Lingkaran Luar Berputar */}
            <div className="w-32 h-32 border-4 border-dashed border-stone-800 rounded-full animate-spin-slow flex items-center justify-center absolute top-0 left-0"></div>
            
            {/* Ikon Tengah */}
            <div className="w-32 h-32 bg-stone-900 rounded-full flex items-center justify-center border border-stone-800 relative z-10 shadow-xl shadow-[#38b5ff]/10">
                <i className="ri-tools-fill text-5xl text-[#38b5ff] animate-pulse"></i>
            </div>
        </div>

        {/* Judul Besar */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          Masih <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38b5ff] to-blue-600">Proses</span>
        </h1>

        {/* Deskripsi Asik */}
        <p className="text-stone-400 text-lg md:text-xl mb-10 leading-relaxed">
          Sabar broo materinya lagi gua <b>racik</b> 🧑‍🍳 <br className="hidden md:block"/>
          Gua lagi siapin kontennya. Tunggu bentar lagi ya!
        </p>

        {/* Tombol Balik */}
        <div className="flex justify-center gap-4">
            <Link 
              to="/ayo-belajar" 
              // PERBAIKAN RESPONSIF HP:
              // active:scale-95 -> Efek tombol ditekan (mengecil)
              // active:bg-blue-700 -> Warna jadi lebih gelap pas ditekan
              // active:shadow-none -> Bayangan hilang pas ditekan (efek realistis)
              className="group flex items-center gap-2 bg-[#38b5ff] text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-blue-500/20 
              hover:bg-blue-600 hover:scale-105 
              active:scale-95 active:bg-blue-700 active:shadow-none
              transition-all duration-300"
            >
              {/* group-active:-translate-x-2 -> Panah gerak lebih jauh pas tombol ditekan */}
              <i className="ri-arrow-left-line group-hover:-translate-x-1 group-active:-translate-x-2 transition-transform"></i> 
              Cari Materi Lain
            </Link>
        </div>

      </div>
    </div>
  );
};

export default Pythonpage;