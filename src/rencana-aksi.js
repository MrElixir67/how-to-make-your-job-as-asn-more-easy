// # Sesuaikan dengan jam pembelajaran yang didapat masing-masing
const JP = 4;

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

  const tambahBtns = [...document.querySelectorAll('button')].filter(b => b.textContent.trim() === 'Tambah');
  console.log('Tombol Tambah ditemukan:', tambahBtns.length);

  for (const btn of tambahBtns) {
    const tr = btn.closest('tr') || btn.closest('td')?.closest('tr');
    const cells = [...(tr?.querySelectorAll('td') || [])];
    const nomor = cells[0]?.innerText?.trim().split('\n')[0] || '';
    const kolom = cells[1];

    // Gabungkan semua text node sebelum ketemu span/br pertama
    let rencanaAksi = '';
    for (const node of kolom?.childNodes || []) {
      if (node.nodeType === Node.TEXT_NODE) {
        rencanaAksi += node.textContent;
      } else {
        // Berhenti saat ketemu elemen (span Organisasi, br, dll)
        break;
      }
    }
    rencanaAksi = rencanaAksi.trim().replace(/\s+/g, ' ');

    const isPenugasan = rencanaAksi.toLowerCase().includes('penugasan direktif');
    const target = isPenugasan ? `100%,${JP}JP` : '1 laporan';

    console.log(`[${nomor}] Aksi: ${rencanaAksi} | Target: ${target}`);

    btn.scrollIntoView({block: 'center'});
    await delay(500);
    btn.click();
    await delay(1500);

    const modal = document.querySelector('.modal.show');
    if (!modal) { console.log('modal gak muncul, skip'); continue; }

    const inputAksi = modal.querySelector('input[name="deskripsi"]');
    const inputTarget = modal.querySelector('input[name="target"]');

    if (inputAksi) await ketikTeks(inputAksi, rencanaAksi);
    await delay(200);
    if (inputTarget) await ketikTeks(inputTarget, target);
    await delay(300);

    const ok = [...modal.querySelectorAll('button')].find(b => b.textContent.trim() === 'OK');
    if (ok) { ok.click(); console.log('OK'); }

    await delay(1500);
  }

  console.log('Selesai!');
})();
