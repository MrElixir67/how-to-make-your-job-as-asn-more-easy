/**
 * Isi Rencana Aksi — Auto-Fill Action Plan
 *
 * Bookmarklet: Paste into browser console on the rencana aksi page.
 *
 * How to use:
 * 1. Open e-Kinerja rencana aksi page
 * 2. Open browser console (F12 > Console)
 * 3. Paste this script and press Enter
 *
 * Note: Customize TUGAS value before running!
 */

(async function () {
  const delay = (ms) => new Promise((r) => setTimeout(r, ms));

  // --- CONFIGURATION ---
  const TUGAS = 'Uraian tugas pejabat/ASN di sini';
  const KUANTITAS = 1;
  const SATUAN = 'kegiatan';
  const KUALITAS = 100;
  // --------------------

  // Fill text inputs / textareas for task description
  const textInputs = [...document.querySelectorAll('input[type="text"], textarea')];
  for (const input of textInputs) {
    if (!input.value) {
      input.value = TUGAS;
      input.dispatchEvent(new Event('input', { bubbles: true }));
      await delay(150);
      console.log('Tugas terisi');
      break;
    }
  }

  // Fill number inputs (kuantitas, kualitas)
  const numberInputs = [...document.querySelectorAll('input[type="number"]')];
  let idx = 0;
  for (const input of numberInputs) {
    if (idx === 0 && !input.value) input.value = KUANTITAS;
    if (idx === 1 && !input.value) input.value = KUALITAS;
    idx++;
    input.dispatchEvent(new Event('input', { bubbles: true }));
    await delay(100);
  }
  console.log('Target kuantitas & kualitas terisi');

  console.log('Form rencana aksi berhasil diisi!');
  console.log('Review dulu sebelum submit ya Bos!');
})();
