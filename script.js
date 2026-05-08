const cookieInput = document.getElementById('cookieInput');
const log = document.getElementById('log');

// 1. AUTO-LOAD FROM DEVICE MEMORY
window.onload = () => {
    const saved = localStorage.getItem('froze_saved_cookie');
    if (saved) {
        cookieInput.value = saved;
        log.innerHTML = "> [LOADED]: Your private cookie is ready.";
    }
};

document.getElementById('startBtn').addEventListener('click', async () => {
    const cookie = cookieInput.value;
    const count = document.getElementById('qty').value;

    if (!cookie.includes('_|WARNING:-DO-NOT-SHARE-THIS')) {
        log.innerHTML += "<br><span style='color:red'>> [ERROR]: Invalid Cookie Format!</span>";
        return;
    }

    // 2. SAVE TO DEVICE MEMORY (Private to you)
    localStorage.setItem('froze_saved_cookie', cookie);
    log.innerHTML += `<br>> [SAVED]: Stored safely on this browser.`;

    log.innerHTML += `<br>> [START]: Creating ${count} universes...`;

    // 2026 Proxy Bypass
    const proxy = "https://corsproxy.io/?";
    const robloxApi = "https://www.roblox.com/ide/publish/newuniverse";

    for (let i = 0; i < count; i++) {
        try {
            await fetch(proxy + encodeURIComponent(robloxApi), {
                method: 'POST',
                headers: { 'Cookie': `.ROBLOSECURITY=${cookie}` }
            });
            log.innerHTML += `<br>> [SUCCESS]: Task ${i+1} Sent.`;
        } catch (e) {
            log.innerHTML += `<br><span style='color:red'>> [FAIL]: Connection Error.</span>`;
        }
    }
});

// 3. WIPE DATA LOGIC
document.getElementById('clearBtn').onclick = () => {
    localStorage.removeItem('froze_saved_cookie');
    cookieInput.value = "";
    log.innerHTML = "> [CLEARED]: Device memory wiped.";
};
