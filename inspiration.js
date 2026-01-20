// --- CONFIGURATION ---
const CURRENT_LEAGUE = "keepers"; 

// 1. Open the Config Modal
function openSearchConfig() {
    const modal = document.getElementById('search-modal');
    const ascName = document.getElementById('res-asc-name').innerText;
    const skillName = document.getElementById('res-skill-name').innerText;
    
    if(ascName === "?" || skillName === "?") return;

    // Reset checkboxes to checked state
    document.getElementById('chk-asc').checked = true;
    document.getElementById('chk-skill').checked = true;
    document.getElementById('chk-keystone').checked = true;

    // Check if Keystones exist to disable option if empty
    const noKeys = document.getElementById('no-keystones').style.display !== 'none';
    const chkKey = document.getElementById('chk-keystone');
    const rowKey = document.getElementById('row-keystone');
    
    if (noKeys) {
        chkKey.disabled = true;
        chkKey.checked = false;
        rowKey.style.opacity = '0.5';
    } else {
        chkKey.disabled = false;
        chkKey.checked = true;
        rowKey.style.opacity = '1';
    }

    modal.classList.remove('hidden');
    modal.classList.add('visible');
}

// 2. Close Modal
function closeSearchConfig() {
    const modal = document.getElementById('search-modal');
    modal.classList.remove('visible');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

// 3. Execute Search (The Logic)
function executePoeNinjaSearch() {
    const ascName = document.getElementById('res-asc-name').innerText;
    const skillName = document.getElementById('res-skill-name').innerText;

    // Base URL
    let ninjaUrl = `https://poe.ninja/poe1/builds/${CURRENT_LEAGUE}`;
    let params = [];

    // Add Class
    if (document.getElementById('chk-asc').checked) {
        params.push(`class=${encodeURIComponent(ascName)}`);
    }

    // Add Skill
    if (document.getElementById('chk-skill').checked) {
        params.push(`skills=${encodeURIComponent(skillName)}`);
    }

    // Add Keystones
    if (document.getElementById('chk-keystone').checked) {
        let keystones = [];
        const k1Link = document.getElementById('link-key1');
        const k1Text = document.getElementById('res-key1-name').innerText;
        if (k1Link.style.display !== 'none' && k1Text !== "?") keystones.push(k1Text);
        
        const k2Link = document.getElementById('link-key2');
        const k2Text = document.getElementById('res-key2-name').innerText;
        if (k2Link.style.display !== 'none' && k2Text !== "?") keystones.push(k2Text);

        if (keystones.length > 0) {
            params.push(`keystones=${keystones.map(k => encodeURIComponent(k)).join(',')}`);
        }
    }

    // Combine
    if (params.length > 0) {
        ninjaUrl += `?${params.join('&')}`;
    }

    // Open
    window.open(ninjaUrl, '_blank');
    closeSearchConfig();
}

// Close modal if clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('search-modal');
    if (event.target === modal) {
        closeSearchConfig();
    }
}