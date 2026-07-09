window.confirm = () => true;

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

  async function isiRating(tombolUbah, nilaiRating) {
    tombolUbah.click();
    await delay(1000);
    const modal = document.querySelector('.modal.show');
    if (!modal) return;
    const select = modal.querySelector('select');
    if (select) {
      select.value = nilaiRating;
      select.dispatchEvent(new Event('change', {bubbles:true}));
    }
    await delay(300);
    const ok = [...modal.querySelectorAll('button')].find(b => b.textContent.trim() === 'OK');
    if (ok) ok.click();
    await delay(1000);
  }

  const tambahBtns = [...document.querySelectorAll('button')].filter(b => b.textContent.trim() === 'Tambah');
  console.log('Total Tambah:', tambahBtns.length);

  for (const btn of tambahBtns) {
    const tr = btn.closest('tr');
    if (!tr) continue;
    const cells = [...tr.querySelectorAll('td')];
    const n = cells.length;
    let feedbackTeks = '';

    if (n === 10) {
      feedbackTeks = `${cells[5]?.innerText?.trim()}, sesuai ekspetasi`;
    } else if (n === 6) {
      feedbackTeks = `${cells[1]?.innerText?.trim()}, sesuai ekspetasi`;
    } else if (n === 3) {
      feedbackTeks = `Sudah ${cells[1]?.innerText?.trim()}`;
    } else {
      feedbackTeks = 'sesuai ekspetasi';
    }

    console.log(`[${n}] → ${feedbackTeks.substring(0, 60)}`);

    btn.scrollIntoView({block: 'center'});
    await delay(500);
    btn.click();
    await delay(1500);

    const modal = document.querySelector('.modal.show');
    if (!modal) { console.log('❌ modal gak muncul'); continue; }

    // Klik jempol 3x DULU sebelum isi teks
    const modalBtns = [...modal.querySelectorAll('button')];
    const jempol = modalBtns.find(b => b.textContent.includes('👍'));
    if (jempol) {
      jempol.click(); await delay(250);
      jempol.click(); await delay(250);
      jempol.click(); await delay(250);
    }

    await delay(300);

    // Ambil input setelah klik jempol, lalu timpa dengan teks lengkap
    const input = modal.querySelector('input[name="feedback"]');
    if (input) {
      // Ambil emoji yang sudah ada (👍👍👍)
      const emoji = input.value; 
      // Timpa dengan teks + emoji di akhir
      await ketikTeks(input, feedbackTeks + ' ' + emoji);
      await delay(300);
    }

    const ok = modalBtns.find(b => b.textContent.trim() === 'OK');
    if (ok) { ok.click(); console.log('✅ OK'); }
    await delay(1500);
  }

  console.log('✅ Feedback selesai! Isi rating...');
  await delay(1000);

  const ubahBtns = [...document.querySelectorAll('button')].filter(b => b.textContent.trim() === 'Ubah');
  console.log('Tombol Ubah:', ubahBtns.length);
  for (const btn of ubahBtns) {
    await isiRating(btn, 'sesuai');
    console.log('✅ Rating sesuai');
  }

  console.log('🎉 SEMUA SELESAI!');
})();
