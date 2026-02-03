import { useEffect } from "react";
import { Image } from "../data";
import Typewriter from "typewriter-effect";

const Kontakpage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="kontak-page pt-24 pb-10 bg-stone-100 min-h-screen flex items-center">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* WRAPPER UTAMA */}
        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden grid md:grid-cols-2 border border-stone-200" data-aos="fade-up" data-aos-duration="1000">

          {/* --- BAGIAN KIRI (FOTO & SOCIAL MEDIA) --- */}
          {/* REVISI PENTING DI SINI: */}
          {/* 'hidden': Hilang di HP */}
          {/* 'md:flex': Muncul Flexbox di Laptop */}
          <div className="hidden md:flex bg-stone-950 p-8 text-white flex-col items-center justify-center relative overflow-hidden text-center h-full">

            {/* Dekorasi Background */}
            <div className="absolute -top-20 -right-20 w-56 h-56 bg-[#38b5ff] rounded-full blur-[80px] opacity-20"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-purple-600 rounded-full blur-[60px] opacity-20"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

            <div className="relative z-10 flex flex-col items-center w-full mt-6">

              {/* WRAPPER FOTO & BUBBLE */}
              <div className="relative mb-6">

                {/* 1. TECH SPEECH BUBBLE */}
                <div
                  className="absolute -top-8 -right-28 z-20 bg-stone-900/90 backdrop-blur-md border border-[#38b5ff]/50 px-3 py-3 rounded-xl shadow-[0_0_15px_rgba(56,181,255,0.3)] transform rotate-2 w-[170px] animate-bounce-slow text-left"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#38b5ff]"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#38b5ff]"></div>

                  <p className="font-mono font-bold text-sm text-[#38b5ff] tracking-wide mb-1">
                    Hallo👋
                  </p>

                  <div className="text-[11px] text-stone-300 font-mono leading-tight h-8 overflow-hidden">
                    <Typewriter
                      options={{
                        strings: [
                          "Ada pertanyaan?",
                          "Isi aja formnya",
                          "Atau klik sosmed gua"
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 50,
                        deleteSpeed: 30,
                      }}
                    />
                  </div>

                  <div className="absolute bottom-3 -left-2 w-3 h-3 bg-stone-900 border-l border-b border-[#38b5ff]/50 transform rotate-45"></div>
                </div>

                {/* 2. FOTO PROFIL */}
                <div data-aos="zoom-in">
                  <img
                    src={Image.MeSketchRBG}
                    alt="David Marlon Hermando"
                    className="w-56 h-auto object-contain drop-shadow-[0_0_25px_rgba(56,181,255,0.5)] hover:drop-shadow-[0_0_40px_rgba(56,181,255,0.7)] transition-all duration-500"
                  />
                </div>
              </div>

              {/* 3. SOCIAL MEDIA ICONS */}
              <div className="flex flex-wrap justify-center gap-3 w-full max-w-md">
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

          {/* --- BAGIAN KANAN (FORM) --- */}
          {/* Ini akan otomatis jadi Full Width di HP karena bagian kirinya hidden */}
          <div className="p-8 md:p-10 bg-white flex flex-col justify-center h-full">
            <h2 className="text-3xl font-bold text-stone-900 mb-2">Kirim Pesan</h2>
            <p className="text-stone-500 mb-6">Silakan isi form di bawah ini.</p>

            <form action="https://formsubmit.co/dvdhermando@gmail.com" method="post" className="flex flex-col gap-4">

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-stone-600">Nama Lengkap</label>
                <input type="text" name="nama" placeholder="Siapa nama kamu?" className="p-3 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#38b5ff] focus:bg-white transition-all placeholder:text-stone-400" required />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-stone-600">Email</label>
                <input type="email" name="email" placeholder="email@contoh.com" className="p-3 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#38b5ff] focus:bg-white transition-all placeholder:text-stone-400" required />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-stone-600">Pesan / Pertanyaan</label>
                <textarea name="pesan" cols="30" rows="3" placeholder="Tulis pesanmu di sini..." className="p-3 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#38b5ff] focus:bg-white transition-all resize-none placeholder:text-stone-400" required></textarea>
              </div>

              <button type="submit" className="mt-2 bg-stone-900 text-white font-bold py-3 rounded-lg hover:bg-[#38b5ff] transition-all duration-300 flex items-center justify-center gap-2 text-sm shadow-lg hover:shadow-blue-200 active:scale-95">
                Kirim Sekarang <i className="ri-send-plane-fill"></i>
              </button>

            </form>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Kontakpage;