/**
 * Isi Penilaian — Auto-Fill Assessment Form
 *
 * Bookmarklet: Paste into browser console on the penilaian page.
 *
 * How to use:
 * 1. Open e-Kinerja form penilaian page
 * 2. Open browser console (F12 > Console)
 * 3. Paste this script and press Enter
 *
 * Note: Adjust the nilai value (1-100) and the selectors
 * if the e-Kinerja UI uses different form elements.
 */

(async function () {
  const delay = (ms) => new Promise((r) => setTimeout(r, ms));

  // --- CONFIGURATION ---
  const NILAI = 100; // Default score
  const UNSUR_KATA_KUNCI = 'pilih'; // Placeholder or label text
  // --------------------

  // Find all select dropdowns
  const selects = [...document.querySelectorAll('select')];
  console.log('Form select ditemukan:', selects.length);

  for (const sel of selects) {
    const options = [...sel.options].filter((o) => o.value && o.value !== '');
    if (options.length > 0) {
      // Pick the highest value option (usually best score)
      const bestOption = options[options.length - 1];
      sel.value = bestOption.value;
      sel.dispatchEvent(new Event('change', { bubbles: true }));
      await delay(200);
      console.log('Terisi:', bestOption.textContent.trim());
    }
  }

  // Find all number input fields (for nilai)
  const numberInputs = [...document.querySelectorAll('input[type="number"]')];
  for (const input of numberInputs) {
    input.value = NILAI;
    input.dispatchEvent(new Event('input', { bubbles: true }));
    await delay(100);
    console.log('Nilai terisi:', NILAI);
  }

  console.log('Form penilaian berhasil diisi!');
  console.log('Review dulu sebelum submit ya Bos!');
})();
