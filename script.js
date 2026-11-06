// Navigation Routing Handler (Simulasi Pindah Halaman HTML)
function navigateTo(pageId) {
    // Hide all pages
    document.querySelectorAll('.page-section').forEach(page => {
        page.classList.remove('active');
    });

    // Show target page
    const targetPage = document.getElementById(`page-${pageId}`);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // Update Nav buttons styling
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('text-brand-cyan', 'bg-slate-800/60');
        btn.classList.add('text-slate-300');
    });

    const activeNavBtn = document.getElementById(`nav-${pageId}`);
    if (activeNavBtn) {
        activeNavBtn.classList.remove('text-slate-300');
        activeNavBtn.classList.add('text-brand-cyan', 'bg-slate-800/60');
    }

    // Scroll smoothly to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Toggle Mobile Drawer Menu
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Interactive Experiment 1: Prompt Injection Test
function runPromptTest() {
    const input = document.getElementById('prompt-input').value;
    const resultBox = document.getElementById('prompt-result');

    if (!input.trim()) {
        alert('Harap isi kolom prompt terlebih dahulu!');
        return;
    }

    resultBox.classList.remove('hidden');
    if (input.toLowerCase().includes('abaikan') || input.toLowerCase().includes('secret') || input.toLowerCase().includes('rahasia')) {
        resultBox.innerHTML = `
          <div class="text-red-400 font-bold mb-1"><i class="fa-solid fa-triangle-exclamation"></i> TERDETEKSI PROMPT INJECTION!</div>
          <div class="text-slate-300">Sistem mendeteksi percobaan instruksi manipulatif yang berisiko menembus pembatas keamanan model.</div>
        `;
    } else {
        resultBox.innerHTML = `
          <div class="text-emerald-400 font-bold mb-1"><i class="fa-solid fa-circle-check"></i> AMAN</div>
          <div class="text-slate-300">Prompt standar terverifikasi tanpa pola manipulasi instruksi yang berbahaya.</div>
        `;
    }
}

// Interactive Experiment 2: Sensitive Data Scanner
function scanSensitiveData() {
    const input = document.getElementById('sensitive-input').value;
    const resultBox = document.getElementById('sensitive-result');

    resultBox.classList.remove('hidden');

    let sanitized = input;
    // Mask Email
    sanitized = sanitized.replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, '[EMAIL_TERSEMBUNYI]');
    // Mask API Key
    sanitized = sanitized.replace(/API_KEY=[a-zA-Z0-9_]+/g, 'API_KEY=[KREDENSIAL_TERPROTEKSI]');

    resultBox.innerHTML = `
        <div class="text-brand-cyan font-bold mb-1"><i class="fa-solid fa-filter"></i> Hasil Sanitasi Teks:</div>
        <div class="bg-slate-950 p-2.5 rounded border border-slate-800 font-mono text-slate-300">${sanitized}</div>
      `;
}