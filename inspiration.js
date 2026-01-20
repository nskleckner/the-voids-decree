// --- CONFIGURATION ---
const CURRENT_LEAGUE = "keepers"; 

function updatePoeNinjaLink(ascName, skillName) {
    const ninjaBtn = document.getElementById('inspireLink');
    
    // 1. Gather Keystones First
    let keystones = [];
    const k1Link = document.getElementById('link-key1');
    const k1Text = document.getElementById('res-key1-name').innerText;
    
    // Only add if visible and not the placeholder "?"
    if (k1Link.style.display !== 'none' && k1Text !== "?" && k1Text !== "No Keystones Allocated") {
        keystones.push(k1Text);
    }
    
    const k2Link = document.getElementById('link-key2');
    const k2Text = document.getElementById('res-key2-name').innerText;
    
    if (k2Link.style.display !== 'none' && k2Text !== "?" && k2Text !== "No Keystones Allocated") {
        keystones.push(k2Text);
    }

    // 2. Construct Base URL
    // Format: /poe1/builds/{league}?class={Class}&skills={Skill}
    let ninjaUrl = `https://poe.ninja/poe1/builds/${CURRENT_LEAGUE}?class=${encodeURIComponent(ascName)}&skills=${encodeURIComponent(skillName)}`;
    
    // 3. Append Keystones (Comma separated for the 'keystones' parameter)
    if (keystones.length > 0) {
        // Map to encoded strings, then join with comma
        // e.g. &keystones=Runebinder,Crimson%20Dance
        const keystoneString = keystones.map(k => encodeURIComponent(k)).join(',');
        ninjaUrl += `&keystones=${keystoneString}`;
    }

    // 4. Assign URL
    ninjaBtn.href = ninjaUrl;
    
    // 5. Reveal Logic (Timed to match Reset Button)
    // The button starts hidden. The CSS fade-in handles the smoothness once the class is removed.
    setTimeout(() => {
        ninjaBtn.classList.remove('hidden');
    }, 800); 
}

function hidePoeNinjaLink() {
    document.getElementById('inspireLink').classList.add('hidden');
}