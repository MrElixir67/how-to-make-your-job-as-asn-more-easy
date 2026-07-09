# How to Make Your Job as ASN More Easy

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

A collection of JavaScript bookmarklets to automate repetitive tasks on e-Kinerja. Stop clicking the same buttons over and over.

## Table of Contents

- [Features](#features)
- [How to Use](#how-to-use)
- [Scripts](#scripts)
- [Warning](#warning)
- [License](#license)

## Features

| Script | Function |
|--------|----------|
| hapus-semua-penilaian | Delete all assessments at once |
| hapus-rencana-aksi | Delete all action plans at once |
| isi-penilaian | Auto-fill assessment form with maximum score |
| isi-realisasi | Auto-fill realization form (quantity, quality, status) |
| isi-rencana-aksi | Auto-fill action plan form |

## How to Use

1. Open the e-Kinerja page you want to automate.
2. Open browser developer tools:
   - Press **F12** on your keyboard.
   - If F12 does not work, press **Ctrl + Shift + I**.
3. Go to the **Console** tab.
4. If this is your first time using the console, type **"allow pasting"** and press Enter. This enables you to paste code into the console.
5. Open the script file you need from the `src` folder.
6. Copy the entire code.
7. Paste it into the browser console and press Enter.

Watch the automation do its work.

## Scripts

All scripts are located in the `src` folder. Each file is a standalone JavaScript that runs in the browser console.

File structure:

```
how-to-make-your-job-as-asn-more-easy/
  LICENSE
  README.md
  src/
    hapus-semua-penilaian.js
    hapus-rencana-aksi.js
    isi-penilaian.js
    isi-realisasi.js
    isi-rencana-aksi.js
```

## Warning

- These scripts interact directly with the e-Kinerja web interface. Review the results before submitting.
- The isi-rencana-aksi.js and isi-penilaian.js scripts use placeholder values. Change the configuration section at the top of the file before running.
- Use at your own risk. The author is not responsible for incorrect data submission.

## License

MIT License. See [LICENSE](LICENSE) for details.
