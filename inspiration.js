// --- CONFIGURATION ---
const CURRENT_LEAGUE = "settlers"; 

function openInspirationModal() {
    const modal = document.getElementById('inspiration-modal');
    const ascName = document.getElementById('res-asc-name').innerText;
    const skillName = document.getElementById('res-skill-name').innerText;

    // Safety: Don't open if cards aren't dealt
    if (ascName === "?" || skillName === "?") return;

    // 1. Gather Data
    let keystones = [];
    const k1Link = document.getElementById('link-key1');
    const k1Text = document.getElementById('res-key1-name').innerText;
    if (k1Link.style.display !== 'none' && k1Text !== "?") {
        keystones.push(k1Text);
    }
    const k2Link = document.getElementById('link-key2');
    const k2Text = document.getElementById('res-key2-name').innerText;
    if (k2Link.style.display !== 'none' && k2Text !== "?") {
        keystones.push(k2Text);
    }

    // 2. Generate URLs
    
    // -- Poe.Ninja --
    let ninjaUrl = `https://poe.ninja/builds/${CURRENT_LEAGUE}?class=${encodeURIComponent(ascName)}&skill=${encodeURIComponent(skillName)}`;
    if (keystones.length > 0) {
        keystones.forEach(k => {
            ninjaUrl += `&keystone=${encodeURIComponent(k)}`;
        });
    }

    // -- YouTube --
    const ytQuery = `Path of Exile 3.25 ${ascName} ${skillName} Build`;
    const ytUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(ytQuery)}`;

    // -- Google --
    const googleQuery = `site:reddit.com/r/pathofexile OR site:pathofexile.com/forum "${skillName}" "${ascName}" build guide`;
    const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(googleQuery)}`;

    // 3. Assign URLs to Buttons
    document.getElementById('btn-ninja').href = ninjaUrl;
    document.getElementById('btn-youtube').href = ytUrl;
    document.getElementById('btn-google').href = googleUrl;

    // 4. Update Summary Text
    document.getElementById('modal-build-summary').innerText = `${ascName} + ${skillName}`;

    // 5. Show Modal
    modal.classList.remove('hidden');
    modal.classList.add('visible');
}

function closeInspirationModal() {
    const modal = document.getElementById('inspiration-modal');
    modal.classList.remove('visible');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

// Close modal if clicking outside the content box
window.onclick = function(event) {
    const modal = document.getElementById('inspiration-modal');
    if (event.target === modal) {
        closeInspirationModal();
    }
}