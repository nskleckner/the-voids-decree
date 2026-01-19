// script.js

// --- UTILITIES ---

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Generates a flat list of every possible skill variant
function flattenSkillDatabase() {
    let allSkills = [];
    for (const [baseName, variants] of Object.entries(SKILLS_DB)) {
        // Add the base skill
        allSkills.push({
            name: baseName,
            isTransfigured: false,
            // Wiki images for base skills usually follow "Skill_Name_inventory_icon.png"
            imageName: `${baseName} inventory icon.png` 
        });

        // Add variants
        variants.forEach(variant => {
            const fullName = `${baseName} ${variant}`;
            allSkills.push({
                name: fullName,
                isTransfigured: true,
                // Transfigured gems also use inventory icons
                imageName: `${fullName} inventory icon.png`
            });
        });
    }
    return allSkills;
}

// Helper to construct Wiki Image URL
function getWikiImage(filename) {
    // We use Special:FilePath which redirects to the actual hashed image path
    // We must replace spaces with underscores
    const safeName = filename.replace(/ /g, "_");
    return `https://www.poewiki.net/wiki/Special:FilePath/${safeName}`;
}

// --- MAIN LOGIC ---

function castFate() {
    const btn = document.getElementById('rollBtn');
    const grid = document.getElementById('resultGrid');
    const usePhrecia = document.getElementById('phreciaToggle').checked;

    // UI Loading State
    grid.classList.remove('visible');
    btn.innerHTML = '<span class="btn-text">Consulting the Void...</span>';
    btn.classList.add('loading');
    
    setTimeout(() => {
        // 1. Pick Ascendancy
        let ascPool = [...ASCENDANCIES.standard];
        if (usePhrecia) {
            // If toggle is ON, we SWAP to the Phrecia pool (or add to it? Usually replaces in events)
            // The prompt implied a toggle FOR Phrecia, suggesting an alternative mode.
            // We will use ONLY Phrecia pool if checked, for maximum flavor.
            ascPool = [...ASCENDANCIES.phrecia];
        }
        
        const chosenAsc = getRandom(ascPool);

        // 2. Pick Skill
        const allSkills = flattenSkillDatabase();
        const chosenSkill = getRandom(allSkills);

        // 3. Pick Keystones (1 or 2)
        let keys = [];
        let keyPool = [...KEYSTONES];
        const k1 = getRandom(keyPool);
        keys.push(k1);
        keyPool = keyPool.filter(k => k !== k1);
        
        if (Math.random() > 0.4) { // 60% chance for a second keystone
            keys.push(getRandom(keyPool));
        }

        // --- RENDER TEXT ---
        document.getElementById('res-asc-name').innerText = chosenAsc.name;
        document.getElementById('res-asc-class').innerText = chosenAsc.class;
        
        document.getElementById('res-skill-name').innerText = chosenSkill.name;
        document.getElementById('res-skill-type').innerText = chosenSkill.isTransfigured ? "Transfigured Gem" : "Standard Gem";
        
        // Wiki Link
        const wikiUrl = `https://www.poewiki.net/wiki/${chosenSkill.name.replace(/ /g, "_")}`;
        document.getElementById('link-skill').href = wikiUrl;
        document.getElementById('link-skill').innerText = "Wiki Data ->";

        // Keystones Text
        document.getElementById('res-key1-name').innerText = keys[0];
        document.getElementById('res-key2-container').style.display = keys[1] ? "flex" : "none";
        if(keys[1]) document.getElementById('res-key2-name').innerText = keys[1];


        // --- RENDER IMAGES ---
        
        // 1. Skill Image
        const skillImg = document.getElementById('img-skill');
        skillImg.src = getWikiImage(chosenSkill.imageName);
        skillImg.onerror = function() { 
            this.src = "https://www.poewiki.net/wiki/Special:FilePath/Gem_inventory_icon.png"; // Fallback generic gem
        };

        // 2. Keystone Images
        // Keystone images on wiki are usually "Keystone_Name_passive_skill_icon.png"
        const k1Img = document.getElementById('img-key1');
        // Remove spaces for Keystone filenames (e.g. "VaalPact_passive_skill_icon.png") vs "Vaal_Pact..."
        // Wiki naming varies. Usually it is "Name_passive_skill_icon.png" WITH underscores.
        k1Img.src = getWikiImage(`${keys[0]} passive skill icon.png`);
        
        if(keys[1]) {
            const k2Img = document.getElementById('img-key2');
            k2Img.src = getWikiImage(`${keys[1]} passive skill icon.png`);
        }

        // 3. Ascendancy Image
        // Usually "AscendancyName_avatar.png" or "AscendancyName_ascendancy_class_icon.png"
        // Let's try "AscendancyName_avatar.png" first as it's the portrait.
        const ascImg = document.getElementById('img-asc');
        // Phrecia classes might not have avatars on the wiki yet. 
        // We try standard logic: "Class_avatar.png"
        ascImg.src = getWikiImage(`${chosenAsc.name} avatar.png`);
        ascImg.onerror = function() {
            // Fallback for Phrecia classes without art: Use the base class avatar
            this.src = getWikiImage(`${chosenAsc.class} avatar.png`);
        };


        // --- REVEAL ---
        grid.classList.add('visible');
        btn.innerHTML = '<span class="btn-text">Divinate Again</span>';
        btn.classList.remove('loading');

    }, 800);
}