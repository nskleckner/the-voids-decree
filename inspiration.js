// --- CONFIGURATION ---
const CURRENT_LEAGUE = "keepers"; 

// 1. Open the Config Modal
function openSearchConfig() {
    const modal = document.getElementById('search-modal');
    const ascName = document.getElementById('res-asc-name').innerText;
    const skillName = document.getElementById('res-skill-name').innerText;
    
    if(ascName === "?" || skillName === "?") return;

    document.getElementById('chk-asc').checked = true;
    document.getElementById('chk-skill').checked = true;
    
    const noKeysMsg = document.getElementById('no-keystones');
    const chkKey = document.getElementById('chk-keystone');
    const rowKey = document.getElementById('row-keystone');
    
    if (noKeysMsg && noKeysMsg.style.display !== 'none') {
        chkKey.disabled = true;
        chkKey.checked = false;
        rowKey.style.opacity = '0.5';
        rowKey.style.pointerEvents = 'none';
    } else {
        chkKey.disabled = false;
        chkKey.checked = true;
        rowKey.style.opacity = '1';
        rowKey.style.pointerEvents = 'auto';
    }

    modal.classList.remove('hidden');
    requestAnimationFrame(() => {
        modal.classList.add('visible');
    });
}

function closeSearchConfig() {
    const modal = document.getElementById('search-modal');
    modal.classList.remove('visible');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

function executePoeNinjaSearch() {
    const ascName = document.getElementById('res-asc-name').innerText;
    const skillName = document.getElementById('res-skill-name').innerText;

    let ninjaUrl = `https://poe.ninja/poe1/builds/${CURRENT_LEAGUE}`;
    let params = [];

    if (document.getElementById('chk-asc').checked) {
        params.push(`class=${encodeURIComponent(ascName)}`);
    }

    if (document.getElementById('chk-skill').checked) {
        params.push(`skills=${encodeURIComponent(skillName)}`);
    }

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

    if (params.length > 0) {
        ninjaUrl += `?${params.join('&')}`;
    }

    window.open(ninjaUrl, '_blank');
    closeSearchConfig();
}

window.onclick = function(event) {
    const modal = document.getElementById('search-modal');
    if (event.target === modal) {
        closeSearchConfig();
    }
}