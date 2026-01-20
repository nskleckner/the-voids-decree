// --- CONFIGURATION ---
const CURRENT_LEAGUE = "keepers"; 

// 1. Open the Config Modal
function openSearchConfig() {
    const modal = document.getElementById('search-modal');
    const ascName = document.getElementById('res-asc-name').innerText;
    const skillName = document.getElementById('res-skill-name').innerText;
    
    // Safety check
    if(ascName === "?" || skillName === "?") return;

    // Reset checkboxes to checked state by default
    document.getElementById('chk-asc').checked = true;
    document.getElementById('chk-skill').checked = true;
    
    // Handle Keystone Checkbox logic
    const noKeysMsg = document.getElementById('no-keystones');
    const chkKey = document.getElementById('chk-keystone');
    const rowKey = document.getElementById('row-keystone');
    
    // Check if the "No Keystones" message is visible
    if (noKeysMsg && noKeysMsg.style.display !== 'none') {
        // No keystones exist
        chkKey.disabled = true;
        chkKey.checked = false;
        rowKey.style.opacity = '0.5';
        rowKey.style.pointerEvents = 'none';
    } else {
        // Keystones exist
        chkKey.disabled = false;
        chkKey.checked = true;
        rowKey.style.opacity = '1';
        rowKey.style.pointerEvents = 'auto';
    }

    // Show the modal
    modal.classList.remove('hidden');
    // Small delay to allow display:flex to apply before opacity transition
    requestAnimationFrame(() => {
        modal.classList.add('visible');
    });
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

    // Add Class if checked
    if (document.getElementById('chk-asc').checked) {
        params.push(`class=${encodeURIComponent(ascName)}`);
    }

    // Add Skill if checked
    if (document.getElementById('chk-skill').checked) {
        params.push(`skills=${encodeURIComponent(skillName)}`);
    }

    // Add Keystones if checked and valid
    if (document.getElementById('chk-keystone').checked) {
        let keystones = [];
        
        const k1Link = document.getElementById('link-key1');
        const k1Text = document.getElementById('res-key1-name').innerText;
        // Only add if visible
        if (k1Link.style.display !== 'none' && k1Text !== "?") {
            keystones.push(k1Text);
        }
        
        const k2Link = document.getElementById('link-key2');
        const k2Text = document.getElementById('res-key2-name').innerText;
        // Only add if visible
        if (k2Link.style.display !== 'none' && k2Text !== "?") {
            keystones.push(k2Text);
        }

        if (keystones.length > 0) {
            // Join with comma for poe.ninja format
            params.push(`keystones=${keystones.map(k => encodeURIComponent(k)).join(',')}`);
        }
    }

    // Construct final URL
    if (params.length > 0) {
        ninjaUrl += `?${params.join('&')}`;
    }

    // Open in new tab
    window.open(ninjaUrl, '_blank');
    closeSearchConfig();
}

// Close modal if clicking outside content
window.onclick = function(event) {
    const modal = document.getElementById('search-modal');
    if (event.target === modal) {
        closeSearchConfig();
    }
}