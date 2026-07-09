// Override confirm supaya otomatis jawab OK
window.confirm = () => true;

// Langsung hapus semua
(async function() {
  const delay = ms => new Promise(r => setTimeout(r, ms));
  
  const hapusBtns = [...document.querySelectorAll('button')].filter(b => b.textContent.trim() === 'Hapus');
  console.log('Tombol Hapus ditemukan:', hapusBtns.length);
  
  for (const btn of hapusBtns) {
    btn.click();
    await delay(800);
    console.log('✅ Terhapus');
  }
  
  console.log('🎉 Semua feedback berhasil dihapus!');
})();
