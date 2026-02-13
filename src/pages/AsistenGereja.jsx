import React, { useState } from 'react';

const AsistenGereja = () => {
  const [slides, setSlides] = useState([{ layout_idx: 0, judul: '', isi: '' }]);

  // Fungsi untuk update data di tiap slide
  const handleInputChange = (index, field, value) => {
    const newSlides = [...slides];
    newSlides[index][field] = value;
    setSlides(newSlides);
  };

  // Fungsi tambah slide baru
  const tambahSlide = () => {
    setSlides([...slides, { layout_idx: 0, judul: '', isi: '' }]);
  };

  // Fungsi hapus slide tertentu
  const hapusSlide = (index) => {
    if (slides.length > 1) {
      const newSlides = slides.filter((_, i) => i !== index);
      setSlides(newSlides);
    } else {
      alert("Minimal harus ada satu slide.");
    }
  };

  // Fungsi kirim data ke Backend Flask
  const generatePPT = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/generate-ppt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slides: slides }),
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = "Ibadah_Minggu.pptx";
        document.body.appendChild(a);
        a.click();
        a.remove();
        alert("Selesai! PPT berhasil dibuat.");
      } else {
        alert("Gagal membuat PPT. Cek terminal Python.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Koneksi gagal! Pastikan App.py sudah dijalankan.");
    }
  };

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', color: '#333', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#007bff', textAlign: 'center' }}>Asisten PPT Ibadah</h1>
      <p style={{ textAlign: 'center', color: '#666' }}>Otomatisasi pembuatan slide untuk pelayanan minggu.</p>
      <hr style={{ margin: '30px 0' }} />
      
      {slides.map((slide, index) => (
        <div key={index} style={{ 
          background: '#f8f9fa', 
          padding: '25px', 
          borderRadius: '12px', 
          marginBottom: '25px',
          border: '1px solid #dee2e6',
          position: 'relative',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
          {/* Tombol Hapus Slide di pojok kanan atas kartu */}
          <button 
            onClick={() => hapusSlide(index)}
            style={{
              position: 'absolute',
              top: '15px',
              right: '15px',
              background: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              padding: '5px 10px'
            }}
          >
            Hapus
          </button>

          <h3 style={{ marginTop: 0 }}>Slide #{index + 1}</h3>
          
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Pilih Layout:</label>
            <select 
              value={slide.layout_idx} 
              onChange={(e) => handleInputChange(index, 'layout_idx', e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ced4da' }}
            >
              <option value="0">Kosongan</option>
              <option value="1">Umat Duduk</option>
              <option value="2">Umat Berdiri</option>
              <option value="3">Judul</option>
              <option value="4">Judul Bacaan Alkitab</option>
              <option value="5">Isi Ayat Alkitab</option>
              <option value="6">Bacaan Penatua</option>
              <option value="7">Bacaan PF</option>
              <option value="8">Bacaan Liturgos</option>
              <option value="9">Bacaan Umat</option>
              <option value="10">Bacaan L + U</option>
              <option value="11">Bacaan PF + U</option>
              <option value="12">Judul Lagu-Only</option>
              <option value="13">Judul Dengan Bait & Isi Lagu</option>
            </select>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Judul Slide:</label>
            <input 
              type="text" 
              placeholder="Contoh: Nyanyian Pembukaan" 
              value={slide.judul}
              onChange={(e) => handleInputChange(index, 'judul', e.target.value)}
              style={{ width: '100%', padding: '12px', boxSizing: 'border-box', borderRadius: '8px', border: '1px solid #ced4da' }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Isi / Lirik:</label>
            <textarea 
              placeholder="Masukkan lirik atau ayat... (Gunakan Enter untuk baris baru)" 
              value={slide.isi}
              onChange={(e) => handleInputChange(index, 'isi', e.target.value)}
              style={{ width: '100%', height: '120px', padding: '12px', boxSizing: 'border-box', borderRadius: '8px', border: '1px solid #ced4da', resize: 'vertical' }}
            />
          </div>
        </div>
      ))}

      <div style={{ marginTop: '30px', display: 'flex', gap: '15px', justifyContent: 'center' }}>
        <button 
          onClick={tambahSlide} 
          style={{ 
            padding: '12px 25px', 
            cursor: 'pointer', 
            borderRadius: '8px', 
            border: '1px solid #6c757d',
            background: 'white',
            fontWeight: 'bold'
          }}
        >
          + Tambah Slide Baru
        </button>
        <button 
          onClick={generatePPT} 
          style={{ 
            padding: '12px 25px', 
            background: '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '8px', 
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 4px 6px rgba(0,123,255,0.2)'
          }}
        >
          Generate PowerPoint (.pptx)
        </button>
      </div>
      
      <footer style={{ marginTop: '50px', textAlign: 'center', fontSize: '12px', color: '#999' }}>
        © 2026 David Marlon - Hermando Insights
      </footer>
    </div>
  );
};

export default AsistenGereja;