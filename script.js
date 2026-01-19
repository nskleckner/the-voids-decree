// script.js

// --- UTILITIES ---
function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function flattenSkillDatabase() {
    let allSkills = [];
    for (const [baseName, variants] of Object.entries(SKILLS_DB)) {
        allSkills.push({
            name: baseName,
            isTransfigured: false,
            imageName: `${baseName} inventory icon.png` 
        });
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
    const safeName = filename.replace(/ /g, "_");
    return `https://www.poewiki.net/wiki/Special:FilePath/${safeName}`;
}

function getWikiLink(name) {
    const safeName = name.replace(/ /g, "_");
    return `https://www.poewiki.net/wiki/${safeName}`;
}

// --- FATE LOGIC ---

function castFate() {
    const deck = document.getElementById('deck-container');
    const exchangeZone = document.querySelector('.exchange-zone');
    const resultCards = document.querySelectorAll('.fate-card');
    const resetBtn = document.getElementById('resetBtn');
    
    const usePhrecia = document.getElementById('phreciaToggle').checked;
    
    // Get Keystone Count
    const keystoneRadios = document.getElementsByName('keystoneCount');
    let numKeystones = 1;
    for (const radio of keystoneRadios) {
        if (radio.checked) numKeystones = parseInt(radio.value);
    }

    // 1. TRIGGER ANIMATION
    deck.classList.add('dealing');

    // 2. WAIT FOR ANIMATION TO FINISH (600ms), THEN CALCULATE & REVEAL
    setTimeout(() => {
        // Hide Deck Area
        exchangeZone.classList.add('collapsed');

        // --- CALCULATION ---
        
        // Ascendancy
        let ascPool = usePhrecia ? [...ASCENDANCIES.phrecia] : [...ASCENDANCIES.standard];
        const chosenAsc = getRandom(ascPool);

        // Skill
        const allSkills = flattenSkillDatabase();
        const chosenSkill = getRandom(allSkills);

        // Keystones
        let chosenKeys = [];
        let keyPool = [...KEYSTONES];
        for(let i=0; i<numKeystones; i++) {
            if(keyPool.length === 0) break;
            const k = getRandom(keyPool);
            chosenKeys.push(k);
            keyPool = keyPool.filter(item => item !== k);
        }

        // --- DOM UPDATES ---
        
        // Ascendancy
        document.getElementById('res-asc-name').innerText = chosenAsc.name;
        document.getElementById('res-asc-class').innerText = chosenAsc.class;
        document.getElementById('link-asc').href = getWikiLink(chosenAsc.name);
        
        const ascImg = document.getElementById('img-asc');
        if (usePhrecia) {
            ascImg.src = getWikiImage(`${chosenAsc.class} avatar.png`);
        } else {
            ascImg.src = getWikiImage(`${chosenAsc.name} avatar.png`);
        }
        ascImg.onerror = function() { this.src = "https://www.poewiki.net/wiki/Special:FilePath/Ascendant_avatar.png"; };

        // Skill
        document.getElementById('res-skill-name').innerText = chosenSkill.name;
        document.getElementById('res-skill-type').innerText = chosenSkill.isTransfigured ? "Transfigured Gem" : "Standard Gem";
        document.getElementById('link-skill').href = getWikiLink(chosenSkill.name);
        
        const skillImg = document.getElementById('img-skill');
        skillImg.src = getWikiImage(chosenSkill.imageName);
        skillImg.onerror = function() { this.src = "https://www.poewiki.net/wiki/Special:FilePath/Gem_inventory_icon.png"; };

        // Keystones
        const k1El = document.getElementById('link-key1');
        const k2El = document.getElementById('link-key2');
        const noKeyEl = document.getElementById('no-keystones');
        
        k1El.style.display = 'none';
        k2El.style.display = 'none';
        noKeyEl.style.display = 'none';

        if(chosenKeys.length === 0) {
            noKeyEl.style.display = 'block';
        } else {
            // Helper
            const setKey = (elId, nameId, imgId, keyName) => {
                document.getElementById(elId).style.display = 'flex';
                document.getElementById(nameId).innerText = keyName;
                document.getElementById(elId).href = getWikiLink(keyName);
                const img = document.getElementById(imgId);
                img.src = getWikiImage(`${keyName} passive skill icon.png`);
                img.onerror = function() { this.src = "https://www.poewiki.net/wiki/Special:FilePath/Keystone_passive_node_icon.png"; };
            };

            if(chosenKeys[0]) setKey('link-key1', 'res-key1-name', 'img-key1', chosenKeys[0]);
            if(chosenKeys[1]) setKey('link-key2', 'res-key2-name', 'img-key2', chosenKeys[1]);
        }

        // --- REVEAL CARDS ---
        resultCards.forEach(card => {
            card.classList.add('revealed');
        });

        // Show Reset Button
        setTimeout(() => {
            resetBtn.classList.remove('hidden');
        }, 1000);

    }, 600); // Wait for the 'shake-and-fade' animation to complete
}

function resetDeck() {
    const deck = document.getElementById('deck-container');
    const exchangeZone = document.querySelector('.exchange-zone');
    const resultCards = document.querySelectorAll('.fate-card');
    const resetBtn = document.getElementById('resetBtn');

    // 1. Hide results
    resultCards.forEach(card => {
        card.classList.remove('revealed');
    });
    resetBtn.classList.add('hidden');

    // 2. Bring back the deck
    setTimeout(() => {
        deck.classList.remove('dealing');
        exchangeZone.classList.remove('collapsed');
    }, 500);
}