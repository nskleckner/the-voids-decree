// --- CONFIGURATION ---
const CURRENT_LEAGUE = "keepers"; 

function updatePoeNinjaLink(ascName, skillName) {
    const ninjaBtn = document.getElementById('inspireLink');
    
    // Base URL
    let ninjaUrl = `https://poe.ninja/builds/${CURRENT_LEAGUE}?class=${encodeURIComponent(ascName)}&skill=${encodeURIComponent(skillName)}`;
    
    // Check Active Keystones
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

    // Append Keystones to URL
    if (keystones.length > 0) {
        keystones.forEach(k => {
            ninjaUrl += `&keystone=${encodeURIComponent(k)}`;
        });
    }

    // Set href
    ninjaBtn.href = ninjaUrl;
    
    // Show button
    ninjaBtn.classList.remove('hidden');
}

function hidePoeNinjaLink() {
    document.getElementById('inspireLink').classList.add('hidden');
}