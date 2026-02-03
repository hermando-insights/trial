import { useEffect } from "react";
// 1. IMPORT DATA DARI FILE DATA.JS
import { careerPath } from "../data"; 

const CareerPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Helper untuk warna (Tetap di sini karena ini logika tampilan/UI)
  const getColorClasses = (theme) => {
    switch (theme) {
      case "red": return "bg-red-500 border-red-500 shadow-red-200";
      case "yellow": return "bg-yellow-400 border-yellow-400 shadow-yellow-200";
      case "green": return "bg-green-500 border-green-500 shadow-green-200";
      case "blue": return "bg-blue-600 border-blue-600 shadow-blue-200";
      default: return "bg-gray-500 border-gray-500 shadow-gray-200";
    }
  };

  return (
    <div className="career-page pt-32 pb-20 bg-stone-100 min-h-screen overflow-x-hidden">
      {/* REVISI 1: Container diperlebar jadi max-w-7xl (sebelumnya 4xl) */}
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* HEADER */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h1 className="text-5xl font-extrabold text-stone-900 mb-2 uppercase tracking-wide">
            Perjalanan Karir
          </h1>
        </div>

        {/* --- TIMELINE AREA --- */}
        <div className="relative flex flex-col gap-0">
          
          {/* Loop data yang di-import */}
          {careerPath.map((item, index) => {
            const isLast = index === careerPath.length - 1;
            const isLeft = item.align === "left";
            const colorClass = getColorClasses(item.theme);

            return (
              <div key={item.id} className="relative z-10">
                
                {/* 1. LAYOUT DESKTOP (ZIG-ZAG LEBAR) */}
                <div className={`hidden md:flex items-center w-full ${isLeft ? "justify-start" : "justify-end"} relative`}>
                   
                   {/* KARTU ITEM */}
                   {/* REVISI 2: Lebar kartu dinaikkan jadi w-[48%] supaya makin lebar */}
                   <div 
                     className={`w-[48%] bg-white rounded-[2rem] p-3 flex items-start shadow-xl border-2 border-white relative z-20 group hover:scale-[1.02] transition-transform duration-300
                     ${isLeft ? "flex-row" : "flex-row-reverse text-right"}
                     `}
                     data-aos={isLeft ? "fade-right" : "fade-left"}
                   >
                      {/* LINGKARAN NOMOR */}
                      {/* margin-top disesuaikan biar sejajar sama judul */}
                      <div className={`mt-2 w-20 h-20 flex-shrink-0 rounded-full ${colorClass} text-white flex items-center justify-center text-2xl font-bold shadow-lg border-4 border-white z-30`}>
                        {item.id}
                      </div>

                      {/* TEKS KONTEN */}
                      <div className={`flex-1 px-8 py-4`}>
                        <h3 className="text-2xl font-bold text-stone-900 leading-tight mb-1">{item.role}</h3>
                        <p className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-4">{item.company}</p>
                        
                         {/* Tag Tahun */}
                         <div className={`mt-4 inline-block px-4 py-1 rounded-full text-xs font-bold text-white ${colorClass.split(' ')[0]}`}>
                            {item.year}
                         </div>
                         
                        {/* Storytelling Text - Dibuat lebih renggang (relaxed) */}
                        <p className="text-stone-600 text-base leading-relaxed text-justify">
                          {item.desc}
                        </p>
                        
                      </div>
                   </div>

                   {/* KONEKTOR LENGKUNG (SNAKE LINE) */}
                   {!isLast && (
                     <div 
                        className={`absolute top-1/2 w-[52%] h-[100%] border-stone-800 -z-10 opacity-20
                        ${isLeft 
                            ? "right-0 border-r-[6px] border-t-[6px] rounded-tr-[3rem] rounded-br-[3rem]" 
                            : "left-0 border-l-[6px] border-t-[6px] rounded-tl-[3rem] rounded-bl-[3rem]" 
                        }
                        `}
                        style={{ transform: "translateY(50%)" }}
                     ></div>
                   )}

                   {/* TITIK PENGHUBUNG KECIL (DOT) */}
                   {!isLast && (
                     <div className={`absolute top-1/2 w-4 h-4 bg-stone-800 rounded-full opacity-40
                       ${isLeft ? "right-0 translate-x-[50%]" : "left-0 -translate-x-[50%]"}
                     `}></div>
                   )}
                </div>


                {/* 2. LAYOUT MOBILE (TETAP SAMA BIAR RAPI DI HP) */}
                <div className="md:hidden flex flex-col relative pl-8 pb-12 last:pb-0" data-aos="fade-up">
                    {!isLast && (
                      <div className="absolute left-[2.25rem] top-10 bottom-0 w-1 bg-stone-300"></div>
                    )}

                    <div className="bg-white rounded-2xl p-6 shadow-md border border-stone-100 relative ml-6">
                        <div className={`absolute -left-14 top-4 w-12 h-12 rounded-full ${colorClass} text-white flex items-center justify-center font-bold shadow-md border-2 border-white`}>
                           {item.id}
                        </div>

                        <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold text-white mb-2 ${colorClass.split(' ')[0]}`}>
                            {item.year}
                         </span>
                        <h3 className="text-lg font-bold text-stone-900">{item.role}</h3>
                        <p className="text-xs text-stone-400 font-semibold mb-2">{item.company}</p>
                        <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* FOOTER QUOTE */}
        <div className="text-center mt-20">
          <p className="text-stone-400 font-medium italic">
            "Foundation • Execution • Optimization • Growth"
          </p>
        </div>

      </div>
    </div>
  );
};

export default CareerPage;