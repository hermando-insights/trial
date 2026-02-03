import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; 

const Belajarpage = () => {
  const navigate = useNavigate(); 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { 
      name: "Microsoft Excel", 
      icon: "ri-file-excel-2-fill", 
      color: "text-green-600",
      path: "/excel-page" 
    },
    { 
      name: "Python", 
      icon: "ri-code-s-slash-line", 
      color: "text-yellow-500",
      path: "/python-page" 
    },
    { 
      name: "SQL", 
      icon: "ri-database-2-fill", 
      color: "text-blue-500",
      path: "/sql-page"    
    },
    { 
      name: "Soal Matematika", 
      icon: "ri-function-line", 
      color: "text-red-500",
      path: "/mtk-page"    
    },
  ];

  return (
    <div className="belajar-page pt-32 pb-20 bg-stone-950 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16" data-aos="fade-down" data-aos-duration="1000">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Ayo Belajar!
          </h1>
          <p className="text-stone-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Di sini gua share semua materi yang udah gua pelajarin dan praktekin sendiri. 
            Lu bebas pilih topik yang lu butuhin, mulai dari olah data sampai logika matematika. 
            Gak usah ragu, langsung aja pilih menunya dan <span className="text-[#38b5ff] font-bold">Ayo Belajar!</span>
          </p>
        </div>

        {/* --- MENU KATEGORI --- */}
        <div className="grid md:grid-cols-2 gap-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          {categories.map((cat, index) => (
            <div 
              key={index}
              onClick={() => navigate(cat.path)} 
              // PERBAIKAN DISINI: Tidak ada lagi logika activeCategory, murni style biasa
              className="p-6 rounded-2xl border transition-all duration-300 cursor-pointer group flex items-center gap-4 bg-white border-transparent hover:border-[#38b5ff] hover:translate-y-[-5px]"
            >
              <div className={`w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center text-3xl ${cat.color} group-hover:scale-110 transition-transform`}>
                <i className={cat.icon}></i>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900 group-hover:text-[#38b5ff] transition-colors">
                  {cat.name}
                </h3>
                <p className="text-sm text-stone-500">
                  Klik untuk lihat materi
                </p>
              </div>

              <div className="ml-auto">
                <i className="ri-arrow-right-line text-2xl text-stone-300 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all"></i>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Belajarpage;