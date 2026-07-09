window.confirm = () => true;
(async function() {
  const delay = ms => new Promise(r => setTimeout(r, ms));
  const hapusBtns = [...document.querySelectorAll('button')].filter(b => b.textContent.trim() === 'Hapus');
  console.log('Hapus ditemukan:', hapusBtns.length);
  for (const btn of hapusBtns) { btn.click(); await delay(800); }
  console.log('Selesai hapus!');
})();
