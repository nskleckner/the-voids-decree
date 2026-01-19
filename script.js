// script.js

// --- UTILITIES ---

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function flattenSkillDatabase() {
    let allSkills = [];
    for (const [baseName, variants] of Object.entries(SKILLS_DB)) {
        // Base
        allSkills.push({
            name: baseName,
            isTransfigured: false,
            // Wiki: "Skill_Name_inventory_icon.png"
            imageName: `${baseName} inventory icon.png` 
        });
        // Variants
        variants.forEach(variant => {
            const fullName = `${baseName} ${variant}`;
            allSkills.push({
                name: fullName,
                isTransfigured: true,
                imageName: `${fullName} inventory icon.png`
            });
        });
    }
    return allSkills;
}

function getWikiImage(filename) {
    // Wiki uses underscores instead of spaces
    const safeName = filename.replace(/ /g, "_");
    // Standardize casing if needed, but Wiki usually auto-redirects
    return `https://www.poewiki.net/wiki/Special:FilePath/${safeName}`;
}

function getWikiLink(name) {
    const safeName = name.replace(/ /g, "_");
    return `https://www.poewiki.net/wiki/${safeName}`;
}

// --- MAIN LOGIC ---

function castFate() {
    const btn = document.getElementById('rollBtn');
    const grid = document.getElementById('resultGrid');
    const usePhrecia = document.getElementById('phreciaToggle').checked;
    
    // Get Keystone Count (0, 1, or 2)
    const keystoneRadios = document.getElementsByName('keystoneCount');
    let numKeystones = 1;
    for (const radio of keystoneRadios) {
        if (radio.checked) numKeystones = parseInt(radio.value);
    }

    // UI Loading
    grid.classList.remove('visible');
    btn.innerHTML = '<span class="btn-text">Rolling...</span>';
    
    setTimeout(() => {
        // 1. Pick Ascendancy
        let ascPool = [...ASCENDANCIES.standard];
        if (usePhrecia) {
            ascPool = [...ASCENDANCIES.phrecia];
        }
        const chosenAsc = getRandom(ascPool);

        // 2. Pick Skill
        const allSkills = flattenSkillDatabase();
        const chosenSkill = getRandom(allSkills);

        // 3. Pick Keystones
        let chosenKeys = [];
        let keyPool = [...KEYSTONES];
        for(let i=0; i<numKeystones; i++) {
            if(keyPool.length === 0) break;
            const k = getRandom(keyPool);
            chosenKeys.push(k);
            keyPool = keyPool.filter(item => item !== k);
        }

        // --- RENDER ---
        
        // Ascendancy Data
        document.getElementById('res-asc-name').innerText = chosenAsc.name;
        document.getElementById('res-asc-class').innerText = chosenAsc.class;
        document.getElementById('link-asc').href = getWikiLink(chosenAsc.name);
        
        // Ascendancy Image Logic
        const ascImg = document.getElementById('img-asc');
        // Try specific avatar first. 
        // Phrecia fallback: If it's a Phrecia class, use the BASE CLASS avatar to guarantee image.
        if (usePhrecia) {
             ascImg.src = getWikiImage(`${chosenAsc.class} avatar.png`);
        } else {
             // Standard classes usually have "Ascendancy_avatar.png"
             ascImg.src = getWikiImage(`${chosenAsc.name} avatar.png`);
        }
        // General fallback on error
        ascImg.onerror = function() {
            this.src = getWikiImage(`${chosenAsc.class} avatar.png`);
        };


        // Skill Data
        document.getElementById('res-skill-name').innerText = chosenSkill.name;
        document.getElementById('res-skill-type').innerText = chosenSkill.isTransfigured ? "Transfigured Gem" : "Standard Gem";
        document.getElementById('link-skill').href = getWikiLink(chosenSkill.name);
        
        // Skill Image
        const skillImg = document.getElementById('img-skill');
        skillImg.src = getWikiImage(chosenSkill.imageName);
        skillImg.onerror = function() { 
            this.src = "https://www.poewiki.net/wiki/Special:FilePath/Gem_inventory_icon.png"; 
        };

        // Keystone Data
        const k1El = document.getElementById('link-key1');
        const k2El = document.getElementById('link-key2');
        const noKeyEl = document.getElementById('no-keystones');
        
        k1El.style.display = 'none';
        k2El.style.display = 'none';
        noKeyEl.style.display = 'none';

        if(chosenKeys.length === 0) {
            noKeyEl.style.display = 'block';
        } else {
            // Render Key 1
            if(chosenKeys[0]) {
                k1El.style.display = 'flex';
                document.getElementById('res-key1-name').innerText = chosenKeys[0];
                document.getElementById('link-key1').href = getWikiLink(chosenKeys[0]);
                document.getElementById('img-key1').src = getWikiImage(`${chosenKeys[0]} passive skill icon.png`);
            }
            // Render Key 2
            if(chosenKeys[1]) {
                k2El.style.display = 'flex';
                document.getElementById('res-key2-name').innerText = chosenKeys[1];
                document.getElementById('link-key2').href = getWikiLink(chosenKeys[1]);
                document.getElementById('img-key2').src = getWikiImage(`${chosenKeys[1]} passive skill icon.png`);
            }
        }

        // --- REVEAL ---
        grid.classList.add('visible');
        btn.innerHTML = '<span class="btn-text">Roll Again</span>';

    }, 400); // Faster animation (400ms)
}