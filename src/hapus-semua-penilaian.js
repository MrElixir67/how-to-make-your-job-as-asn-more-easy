/**
 * Hapus Semua Penilaian — Delete All Assessments
 * 
 * Bookmarklet: Copy this entire file and paste into browser console,
 * or use the bookmarklet generator in index.html
 * 
 * How to use:
 * 1. Open e-Kinerja assessment page
 * 2. Open browser console (F12 > Console)
 * 3. Paste this script and press Enter
 */

// Override confirm dialog to auto-accept
window.confirm = () => true;

(async function () {
  const delay = (ms) => new Promise((r) => setTimeout(r, ms));

  const hapusBtns = [...document.querySelectorAll('button')].filter(
    (b) => b.textContent.trim() === 'Hapus'
  );
  console.log('Tombol Hapus ditemukan:', hapusBtns.length);

  if (hapusBtns.length === 0) {
    console.log('Tidak ada tombol Hapus yang ditemukan.');
    return;
  }

  for (const btn of hapusBtns) {
    btn.click();
    await delay(800);
    console.log('Terhapus');
  }

  console.log('Semua penilaian berhasil dihapus!');
})();
