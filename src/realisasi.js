// ===== SETTING - UBAH SESUAI KEBUTUHAN =====
const BULAN = 4;                    // Bulan sekarang (April = 4)
const PERSEN_KUANTITAS = '8,34%';  // Realisasi Kuantitas
// ============================================

(async function() {
  const delay = ms => new Promise(r => setTimeout(r, ms));

  async function ketikTeks(input, teks) {
    input.value = '';
    input.dispatchEvent(new Event('focus', {bubbles:true}));
    for (const char of teks) {
      input.value += char;
      input.dispatchEvent(new Event('input', {bubbles:true}));
      input.dispatchEvent(new KeyboardEvent('keyup', {bubbles:true}));
    }
  }

  function hapusKataPertama(teks) {
    const kata = teks.trim().split(/\s+/);
    kata.shift();
    return kata.join(' ');
  }

  const editBtns = [...document.querySelectorAll('button')].filter(b => b.textContent.trim() === 'Edit');
  console.log('Tombol Edit ditemukan:', editBtns.length);

  for (const btn of editBtns) {
    const tr = btn.closest('tr');
    if (!tr) continue;
    const cells = [...tr.querySelectorAll('td')];
    const n = cells.length;

    let aspek = '', indikator = '';

    if (n === 10) {
      aspek = cells[4]?.innerText?.trim() || '';
      indikator = cells[5]?.innerText?.trim() || '';
    } else if (n === 6) {
      aspek = cells[0]?.innerText?.trim() || '';
      indikator = cells[1]?.innerText?.trim() || '';
    } else {
      console.log(`Skip - ${n} kolom`);
      continue;
    }

    const sumberData = hapusKataPertama(indikator);
    let realisasi = '';

    if (aspek === 'Kuantitas') {
      realisasi = PERSEN_KUANTITAS;
    } else if (aspek === 'Kualitas') {
      realisasi = '100%';
    } else if (aspek === 'Waktu') {
      realisasi = `${BULAN} bulan`;
    } else {
      console.log(`Skip aspek tidak dikenal: ${aspek}`);
      continue;
    }

    console.log(`[${aspek}] → ${realisasi} | ${sumberData.substring(0, 50)}`);

    btn.scrollIntoView({block: 'center'});
    await delay(500);
    btn.click();
    await delay(1500);

    const modal = document.querySelector('.modal.show');
    if (!modal) { console.log('❌ modal gak muncul'); continue; }

    const inputs = [...modal.querySelectorAll('input, textarea')];
    if (inputs[0]) await ketikTeks(inputs[0], realisasi);
    await delay(200);
    if (inputs[1]) await ketikTeks(inputs[1], sumberData);
    await delay(300);

    const ok = [...modal.querySelectorAll('button')].find(b => b.textContent.trim() === 'OK');
    if (ok) { ok.click(); console.log('✅ OK'); }

    await delay(1500);
  }

  console.log('🎉 SEMUA REALISASI SELESAI!');
})();
