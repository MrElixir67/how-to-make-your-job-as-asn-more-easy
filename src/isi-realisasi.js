/**
 * Isi Realisasi — Auto-Fill Realization / Target Achievement
 *
 * Bookmarklet: Paste into browser console on the realisasi page.
 *
 * How to use:
 * 1. Open e-Kinerja realisasi page
 * 2. Open browser console (F12 > Console)
 * 3. Paste this script and press Enter
 *
 * Note: Adjust KUANTITAS, KUALITAS, and WAKTU values as needed.
 */

(async function () {
  const delay = (ms) => new Promise((r) => setTimeout(r, ms));

  // --- CONFIGURATION ---
  const KUANTITAS = 100; // Percentage of target quantity achieved
  const KUALITAS = 100; // Quality score
  const STATUS_SELESAI = true; // true = selesai, false = sedang dikerjakan
  // --------------------

  // Fill number inputs (kuantitas, kualitas, waktu)
  const numberInputs = [...document.querySelectorAll('input[type="number"]')];
  let idx = 0;

  for (const input of numberInputs) {
    if (idx === 0) input.value = KUANTITAS; // Kuantitas
    else if (idx === 1) input.value = KUALITAS; // Kualitas
    idx++;
    input.dispatchEvent(new Event('input', { bubbles: true }));
    await delay(150);
  }
  console.log('Kuantitas & Kualitas terisi');

  // Find radio buttons or checkboxes for status
  if (STATUS_SELESAI) {
    const selesaiRadio = [...document.querySelectorAll('input[type="radio"], input[type="checkbox"]')].find(
      (el) => el.value && el.value.toLowerCase().includes('selesai')
    );
    if (selesaiRadio) {
      selesaiRadio.checked = true;
      selesaiRadio.dispatchEvent(new Event('change', { bubbles: true }));
      console.log('Status: Selesai');
    }
  }

  console.log('Form realisasi berhasil diisi!');
  console.log('Review dulu sebelum submit ya Bos!');
})();
