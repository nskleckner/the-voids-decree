// --- CONFIGURATION ---
const CURRENT_LEAGUE = "keepers"; 

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

    // 2. Generate poe.ninja URL
    let ninjaUrl = `https://poe.ninja/builds/${CURRENT_LEAGUE}?class=${encodeURIComponent(ascName)}&skill=${encodeURIComponent(skillName)}`;
    if (keystones.length > 0) {
        keystones.forEach(k => {
            ninjaUrl += `&keystone=${encodeURIComponent(k)}`;
        });
    }

    // 3. Assign URL to Button
    document.getElementById('btn-ninja').href = ninjaUrl;

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