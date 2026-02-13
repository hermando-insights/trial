import Typewriter from 'typewriter-effect';
import { Image, SekilasSaya } from '../data';
import { useState } from 'react';

const Homepage = () => {
  // State untuk melacak kartu mana yang aktif (biru)
  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className="homepage pt-23">
      <div className="container mx-auto px-4">
        
        {/* Hero Section */}
        <div className="hero grid md:grid-cols-2 items-center grid-cols-1 lg:pt-0 pt-16 pb-5">
          <div className="text-center md:text-left lg:pb-0 pb-16">
            
            {/* Quote Badge */}
            <div className="bg-stone-900 w-fit p-2 rounded flex items-center gap-2 mx-auto md:mx-0 mb-6 shadow-lg">
              <img src={Image.SalibBiru} alt="SalibBiru" className="lg:w-8 w-6" />
              <q className="text-white lg:text-sm text-xs font-bold tracking-widest uppercase">Proverbs 2:6</q>
            </div>

            <h1 className="xl:text-6xl/tight font-bold mb-4 lg:text-5xl/tight text-4xl/tight text-stone-900">
              Hello, I'm
              <span className="text-[#38b5ff] inline-block ml-3">
                <Typewriter
                  options={{
                    strings: ["David", "Marlon"],
                    autoStart: true,
                    loop: true,
                    delay: 60,
                    deleteSpeed: 50,
                  }}
                />
              </span>
            </h1>

            <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="https://drive.google.com/file/d/1RPwMJ17phrDOFj_Tdj6sCHiuAjiHzR7t/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="bg-stone-950 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#38b5ff] active:bg-[#38b5ff] active:scale-95 transition-all duration-300 shadow-md flex items-center gap-2 select-none"
              >
                Lihat Profil Saya <i className="ri-download-2-line"></i>
              </a>
            </div>
          </div>

          {/* Sketsa/Foto Profile */}
          <div className="flex justify-center md:justify-end">
            <img
              src={Image.MeSketch}
              alt="Sketsa Saya"
              className="w-full max-w-sm aspect-square object-cover rounded-full border-8 border-white shadow-2xl shadow-blue-200/50 md:block hidden"
            />
          </div>
        </div>
      </div>

      {/* Sekilas Tentang Website */}
      <div className="tentang bg-stone-950 py-28" id="about-me">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-white md:text-5xl/tight text-4xl/tight mb-8 font-semibold" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            Sekilas Tentang Saya
          </h1>

          <div className="max-w-4xl mx-auto">
            <p className="text-center text-white/75 md:text-xl/loose text-base/loose" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
              Selamat Datang di <span className="text-[#38b5ff] font-bold">Hermando Insight</span>.
              Di sini, gua akan dokumentasiin perjalanan belajar gua dalam mendalami
              <span className="text-white font-semibold"> Excel, Python, SQL</span>,
              hingga tantangan <span className="text-white font-semibold">soal-soal matematika</span>.
              Mari belajar dan bertumbuh bersama!
            </p>
          </div>

          <div className="mt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {SekilasSaya.map((acara) => {
              const isActive = activeCard === acara.id;

              return (
                // 1. WRAPPER LUAR (KHUSUS ANIMASI AOS)
                // Kita taruh AOS disini supaya dia tidak terganggu saat state di dalamnya berubah
                <div 
                  key={acara.id}
                  data-aos="fade-up" 
                  data-aos-duration="1000" 
                  data-aos-delay={acara.delay} 
                  data-aos-once="true"
                >
                  {/* 2. WRAPPER DALAM (KHUSUS KLIK & WARNA) */}
                  <div 
                    onClick={() => setActiveCard(acara.id)}
                    className={`text-center p-8 rounded-2xl border transition-all duration-300 cursor-pointer select-none group h-full
                      ${isActive 
                        ? "bg-[#38b5ff] border-[#38b5ff] scale-105 shadow-xl" 
                        : "bg-stone-900 border-white/5 hover:border-[#38b5ff]/50 hover:bg-[#38b5ff]"
                      }`} 
                  >
                    {/* Ikon */}
                    <i className={`${acara.icon} ri-3x transition-colors duration-300
                      ${isActive ? "text-white" : "text-[#38b5ff] group-hover:text-white"}`}>
                    </i>
                    
                    {/* Judul */}
                    <h1 className={`text-2xl font-bold my-4 uppercase tracking-wider transition-colors duration-300
                      ${isActive ? "text-white" : "text-white group-hover:text-white"}`}>
                      {acara.Judul}
                    </h1>
                    
                    {/* Deskripsi */}
                    <p className={`text-base leading-relaxed transition-colors duration-300
                      ${isActive ? "text-white" : "text-white/60 group-hover:text-white"}`}>
                      {acara.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Homepage;