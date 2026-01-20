// --- DATABASE ---
const ASCENDANCIES = {
    standard: [
        { name: "Juggernaut", class: "Marauder" }, { name: "Berserker", class: "Marauder" }, { name: "Chieftain", class: "Marauder" },
        { name: "Slayer", class: "Duelist" }, { name: "Gladiator", class: "Duelist" }, { name: "Champion", class: "Duelist" },
        { name: "Deadeye", class: "Ranger" }, { name: "Raider", class: "Ranger" }, { name: "Pathfinder", class: "Ranger" },
        { name: "Assassin", class: "Shadow" }, { name: "Saboteur", class: "Shadow" }, { name: "Trickster", class: "Shadow" },
        { name: "Necromancer", class: "Witch" }, { name: "Occultist", class: "Witch" }, { name: "Elementalist", class: "Witch" },
        { name: "Inquisitor", class: "Templar" }, { name: "Hierophant", class: "Templar" }, { name: "Guardian", class: "Templar" },
        { name: "Ascendant", class: "Scion" }
    ],
    phrecia: [
        { name: "Antiquarian", class: "Marauder" }, { name: "Behemoth", class: "Marauder" }, { name: "Ancestral Commander", class: "Marauder" },
        { name: "Gambler", class: "Duelist" }, { name: "Paladin", class: "Duelist" }, { name: "Aristocrat", class: "Duelist" },
        { name: "Daughter of Oshabi", class: "Ranger" }, { name: "Whisperer", class: "Ranger" }, { name: "Wildspeaker", class: "Ranger" },
        { name: "Surfcaster", class: "Shadow" }, { name: "Servant of Arakaali", class: "Shadow" }, { name: "Blind Prophet", class: "Shadow" },
        { name: "Harbinger", class: "Witch" }, { name: "Herald", class: "Witch" }, { name: "Bog Shaman", class: "Witch" },
        { name: "Polytheist", class: "Templar" }, { name: "Scavenger", class: "Scion" }
    ]
};

const KEYSTONES = [
    "Acrobatics", "Ancestral Bond", "Arrow Dancing", "Arsenal of Vengeance", "Avatar of Fire", 
    "Blood Magic", "Bloodsoaked Blade", "Call to Arms", "Chaos Inoculation", "Conduit", 
    "Crimson Dance", "Divine Shield", "Eldritch Battery", "Elemental Equilibrium", "Elemental Overload", 
    "Eternal Youth", "Ghost Dance", "Ghost Reaver", "Glancing Blows", "Hex Master", 
    "Imbalanced Guard", "Iron Grip", "Iron Reflexes", "Iron Will", "Lethe Shade", 
    "Magebane", "Mind Over Matter", "Minion Instability", "Necromantic Aegis", "Pain Attunement", 
    "Perfect Agony", "Point Blank", "Precise Technique", "Resolute Technique", "Runebinder", 
    "Solipsism", "Supreme Ego", "The Agnostic", "The Impaler", "Unwavering Stance", 
    "Vaal Pact", "Versatile Combatant", "Wicked Ward", "Wind Dancer", "Worship the Blightheart", 
    "Zealot's Oath"
];

// FILENAME MAP: Validated against PoE Wiki Source
const KEYSTONE_FILENAME_MAP = {
    "Acrobatics": "KeystoneAcrobatics_passive_skill_icon",
    "Ancestral Bond": "Totemmax_passive_skill_icon",
    "Arrow Dancing": "KeystoneArrowDodging_passive_skill_icon",
    "Arsenal of Vengeance": "RetaliationKeystone_passive_skill_icon",
    "Avatar of Fire": "KeystoneAvatarOfFire_passive_skill_icon",
    "Blood Magic": "KeystoneBloodMagic_passive_skill_icon",
    "Bloodsoaked Blade": "TinctureKeystone1_passive_skill_icon",
    "Call to Arms": "CallToArms_passive_skill_icon",
    "Chaos Inoculation": "KeystoneChaosInoculation_passive_skill_icon", 
    "Conduit": "KeystoneConduit_passive_skill_icon",
    "Crimson Dance": "CrimsonDance_passive_skill_icon",
    "Divine Shield": "EnergisedFortress_passive_skill_icon",
    "Eldritch Battery": "KeystoneEldritchBattery_passive_skill_icon",
    "Elemental Equilibrium": "KeystoneElementalEquilibrium_passive_skill_icon",
    "Elemental Overload": "KeystoneElementalOverload_passive_skill_icon",
    "Eternal Youth": "EternalYouth_passive_skill_icon",
    "Ghost Dance": "AcrobaticWillpower_%28Trickster%29_passive_skill_icon",
    "Ghost Reaver": "Ghostreaver_passive_skill_icon",
    "Glancing Blows": "GlancingBlows_passive_skill_icon",
    "Hex Master": "KeystoneHexMaster_passive_skill_icon",
    "Imbalanced Guard": "SacredBastionKeystone_passive_skill_icon",
    "Iron Grip": "KeystoneIronGrip_passive_skill_icon",
    "Iron Reflexes": "KeystoneIronReflexes_passive_skill_icon",
    "Iron Will": "KeystoneIronWill_passive_skill_icon",
    "Lethe Shade": "MomentofRespite_passive_skill_icon",
    "Magebane": "Deaden_passive_skill_icon",
    "Mind Over Matter": "Heroicspirit_passive_skill_icon",
    "Minion Instability": "KeystoneMinionInstability_passive_skill_icon",
    "Necromantic Aegis": "KeystoneNecromanticAegis_passive_skill_icon",
    "Pain Attunement": "KeystonePainAttunement_passive_skill_icon",
    "Perfect Agony": "CritAilments_passive_skill_icon",
    "Point Blank": "KeystonePointBlank_passive_skill_icon",
    "Precise Technique": "PreciseTechnique_passive_skill_icon",
    "Resolute Technique": "KeystoneResoluteTechnique_passive_skill_icon",
    "Runebinder": "BrandKeystone_passive_skill_icon",
    "Solipsism": "Resilience_passive_skill_icon",
    "Supreme Ego": "SupremeEgo_passive_skill_icon",
    "The Agnostic": "MiracleMaker_passive_skill_icon",
    "The Impaler": "ImpaleKeystone_passive_skill_icon",
    "Unwavering Stance": "KeystoneUnwaveringStance_passive_skill_icon",
    "Vaal Pact": "Vaalpact_passive_skill_icon",
    "Versatile Combatant": "VersatileCombatant_passive_skill_icon",
    "Wicked Ward": "EldrichBarrier_%28Occultist%29_passive_skill_icon",
    "Wind Dancer": "WindDancer_passive_skill_icon",
    "Worship the Blightheart": "AnointOnlyKeystone_passive_skill_icon",
    "Zealot's Oath": "Liferegentoenergyshield_passive_skill_icon"
};

const SKILLS_DB = {
    "Absolution": ["of Inspiring"], "Arc": ["of Oscillating", "of Surging"], "Artillery Ballista": ["of Crossfire", "of Focus"],
    "Ball Lightning": ["of Orbiting", "of Static"], "Bane": ["of Condemnation"], "Barrage": ["of Volley Fire"],
    "Blade Blast": ["of Dagger Detonation", "of Unloading"], "Blade Flurry": ["of Incision"], "Blade Trap": ["of Greatswords", "of Laceration"],
    "Blade Vortex": ["of the Scythe"], "Bladefall": ["of Impaling", "of Volleys"], "Bladestorm": ["of Uncertainty"], "Blast Rain": [],
    "Blazing Salvo": [], "Blight": ["of Atrophy", "of Contagion"], "Blink Arrow": ["of Bombarding Clones", "of Prismatic Clones"], "Body Swap": [],
    "BoneShatter": ["of Carnage", "of Complex Trauma"], "Burning Arrow": ["of Vigour"], "Caustic Arrow": ["of Poison"], "Chain Hook": [],
    "Charged Dash": [], "Cleave": ["of Rage"], "Cobra Lash": [], "Cold Snap": ["of Power"], "Consecrated Path": ["of Endurance"],
    "Contagion": ["of Subsiding", "of Transference"], "Crackling Lance": ["of Branching", "of Disintegration"], "Creeping Frost": [],
    "Cremation": ["of Exhuming", "of the Volcano"], "Cyclone": ["of Tumult"], "Dark Pact": [], "Desecrate": [],
    "Detonate Dead": ["of Chain Reaction", "of Scavenging"], "Discharge": ["of Misery"], "Divine Ire": ["of Disintegration", "of Holy Lightning"],
    "Dominating Blow": ["of Inspiring"], "Double Strike": ["of Impaling", "of Momentum"], "Dual Strike": ["of Ambidexterity"],
    "Earthquake": ["of Amplification"], "Earthshatter": [], "Elemental Hit": ["of the Spectrum"], "Energy Blade": [],
    "Essence Drain": ["of Desperation", "of Wickedness"], "Ethereal Knives": ["of the Massacre", "of Lingering Blades"], "Explosive Arrow": [],
    "Explosive Concoction": ["of Destruction"], "Explosive Trap": ["of Magnitude", "of Shrapnel"], "Exsanguinate": ["of Transmission"],
    "Eye of Winter": ["of Finality", "of Transience"], "Fire Trap": ["of Blasting"], "Fireball": ["of Dragon's Breath"],
    "Firestorm": ["of Meteors", "of Pelting"], "Flame Dash": ["of Return"], "Flame Surge": ["of Combusting"], "Flame Wall": [],
    "Flameblast": ["of Celerity", "of Contraction"], "Flicker Strike": ["of Power"], "Forbidden Rite": ["of Soul Sacrifice"],
    "Freezing Pulse": [], "Frenzy": ["of Onslaught"], "Frost Blades": ["of Katabasis"], "Frost Bomb": ["of Forthcoming", "of Instability"],
    "Frost Wall": [], "Frostblink": ["of Wintry Blast"], "Frozen Legion": ["of Rallying"], "Galvanic Arrow": ["of Energy", "of Surging"],
    "Galvanic Field": ["of Intensity"], "General's Cry": [], "Glacial Cascade": ["of the Fissure"], "Glacial Hammer": ["of Shattering"],
    "Ground Slam": ["of Earthshaking"], "Heavy Strike": [], "Hexblast": ["of Contradiction", "of Havoc"], "Holy Flame Totem": ["of Ire"],
    "Ice Crash": ["of Cadence"], "Ice Nova": ["of Deep Freeze", "of Frostbolts"], "Ice Shot": ["of Penetration"], "Ice Spear": ["of Splitting"],
    "Ice Trap": ["of Hollowness"], "Icicle Mine": ["of Fanning", "of Sabotage"], "Incinerate": ["of Expanse", "of Venting"],
    "Infernal Blow": ["of Immolation"], "Kinetic Blast": ["of Clustering"], "Kinetic Bolt": ["of Fragmentation"],
    "Lacerate": ["of Butchering", "of Haemorrhage"], "Lancing Steel": ["of Spraying"], "Leap Slam": ["of Groundbreaking"],
    "Lightning Arrow": ["of Electrocution"], "Lightning Conduit": ["of the Heavens"], "Lightning Spire Trap": ["of Overloading", "of Zapping"],
    "Lightning Strike": ["of Arcing"], "Lightning Tendrils": ["of Eccentricity", "of Escalation"], "Lightning Trap": ["of Sparking"],
    "Lightning Warp": [], "Magma Orb": [], "Manabond": [], "Mirror Arrow": ["of Bombarding Clones", "of Prismatic Clones"], "Molten Shell": [],
    "Molten Strike": ["of the Zenith"], "Orb of Storms": [], "Penance Brand": ["of Conduction", "of Dissipation"],
    "Perforate": ["of Bloodshed", "of Duality"], "Pestilent Strike": [], "Power Siphon": ["of the Archmage"], "Puncture": [],
    "Purifying Flame": ["of Revelations"], "Pyroclast Mine": ["of Sabotage"], "Rage Vortex": ["of Berserking"],
    "Rain of Arrows": ["of Artillery", "of Saturation"], "Raise Spectre": ["of Transience"], "Raise Zombie": ["of Falling", "of Slamming"],
    "Reap": [], "Reave": ["of Refraction"], "Reckoning": [], "Righteous Fire": ["of Arcane Devotion"], "Riposte": [],
    "Rolling Magma": [], "Scorching Ray": ["of Immolation"], "Scourge Arrow": ["of Menace"], "Searing Bond": [],
    "Seismic Trap": ["of Swells"], "Shattering Steel": ["of Ammunition"], "Shield Charge": [], "Shield Crush": ["of the Chieftain"],
    "Shock Nova": [], "Shockwave Totem": [], "Shrapnel Ballista": ["of Steel"], "Siege Ballista": ["of Splintering"],
    "Smite": ["of Divine Judgement"], "Soulrend": ["of Reaping", "of the Spiral"], "Spark": ["of the Nova", "of Unpredictability"],
    "Spectral Helix": [], "Spectral Shield Throw": ["of Shattering"], "Spectral Throw": ["of Materialising"], "Split Arrow": ["of Splitting"],
    "Splitting Steel": ["of Ammunition"], "Static Strike": [], "Storm Brand": ["of Indecision"], "Storm Burst": [], "Storm Call": [],
    "Storm Rain": ["of the Conduit", "of the Fence"], "Stormbind": ["of Teleportation"], "Summon Carrion Golem": ["of Hordes", "of Scavenging"],
    "Summon Chaos Golem": ["of Hordes", "of the Maelstrom"], "Summon Flame Golem": ["of Hordes", "of the Meteor"],
    "Summon Holy Relic": ["of Conviction"], "Summon Ice Golem": ["of Hordes", "of Shattering"], "Summon Lightning Golem": ["of Hordes"],
    "Summon Raging Spirit": ["of Enormity"], "Summon Reaper": ["of Eviscerating", "of Revenants"], "Summon Skeletons": ["of Archers", "of Mages"],
    "Summon Stone Golem": ["of Hordes", "of Safeguarding"], "Sunder": ["of Earthbreaking"], "Sweep": [], "Tectonic Slam": ["of Cataclysm"],
    "Tempest Shield": [], "Tornado Shot": [], "Toxic Rain": ["of Sporeburst", "of Withering"], "Unearth": [], "Vengeance": [], "Venom Gyre": [],
    "Viper Strike": ["of the Mamba"], "Void Sphere": ["of Rending"], "Volatile Dead": ["of Confinement", "of Seething"],
    "Volcanic Fissure": ["of Snaking"], "Vortex": ["of Projection"], "Wave of Conviction": [], "Wild Strike": ["of Extremes"],
    "Winter Orb": [], "Wintertide Brand": []
};

// --- UTILITIES ---

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function flattenSkillDatabase() {
    let allSkills = [];
    for (const [baseName, variants] of Object.entries(SKILLS_DB)) {
        allSkills.push({ name: baseName, isTransfigured: false, imageName: `${baseName} inventory icon.png` });
        variants.forEach(variant => {
            const fullName = `${baseName} ${variant}`;
            allSkills.push({ name: fullName, isTransfigured: true, imageName: `${fullName} inventory icon.png` });
        });
    }
    return allSkills;
}

function getWikiImage(filename) {
    const safeName = filename.replace(/ /g, "_");
    return `https://www.poewiki.net/wiki/Special:FilePath/${safeName}`;
}

// LOOKUP FUNCTION
function getKeystoneImage(name) {
    let filename = KEYSTONE_FILENAME_MAP[name];
    if (filename) {
        return `https://www.poewiki.net/wiki/Special:FilePath/${filename}.png`;
    }
    // Fallback: Remove spaces
    filename = name.replace(/ /g, "_");
    return `https://www.poewiki.net/wiki/Special:FilePath/${filename}_passive_skill_icon.png`;
}

function getWikiLink(name) {
    const safeName = name.replace(/ /g, "_");
    return `https://www.poewiki.net/wiki/${safeName}`;
}

// --- LOGIC ---

function castFate() {
    const deck = document.getElementById('deck-container');
    const exchangeZone = document.querySelector('.exchange-zone');
    const resultCards = document.querySelectorAll('.fate-card');
    const resetBtn = document.getElementById('resetBtn');
    const inspireBtn = document.getElementById('inspireBtn');
    const keystoneContainer = document.getElementById('keystone-results');
    
    const usePhrecia = document.getElementById('phreciaToggle').checked;
    
    if (deck.classList.contains('dealing')) return;

    let numKeystones = 1;
    document.getElementsByName('keystoneCount').forEach(radio => {
        if(radio.checked) numKeystones = parseInt(radio.value);
    });

    deck.classList.add('dealing');

    setTimeout(() => {
        exchangeZone.classList.add('collapsed');

        // Logic
        let ascPool = usePhrecia ? [...ASCENDANCIES.phrecia] : [...ASCENDANCIES.standard];
        const chosenAsc = getRandom(ascPool);

        const allSkills = flattenSkillDatabase();
        const chosenSkill = getRandom(allSkills);

        let chosenKeys = [];
        let keyPool = [...KEYSTONES];
        for(let i=0; i<numKeystones; i++) {
            if(keyPool.length === 0) break;
            const k = getRandom(keyPool);
            chosenKeys.push(k);
            keyPool = keyPool.filter(item => item !== k);
        }

        // Render Ascendancy
        document.getElementById('res-asc-name').innerText = chosenAsc.name;
        document.getElementById('res-asc-class').innerText = chosenAsc.class;
        document.getElementById('link-asc').href = getWikiLink(chosenAsc.name);
        
        const ascImg = document.getElementById('img-asc');
        ascImg.classList.remove('loaded'); // Clear old state
        // Attach listener BEFORE src
        ascImg.onload = function() { this.classList.add('loaded'); };
        ascImg.src = getWikiImage(usePhrecia ? `${chosenAsc.class} avatar.png` : `${chosenAsc.name} avatar.png`);
        
        // Render Skill
        document.getElementById('res-skill-name').innerText = chosenSkill.name;
        document.getElementById('res-skill-type').innerText = chosenSkill.isTransfigured ? "Transfigured Gem" : "Standard Gem";
        document.getElementById('link-skill').href = getWikiLink(chosenSkill.name);
        
        const skillImg = document.getElementById('img-skill');
        skillImg.classList.remove('loaded');
        skillImg.onload = function() { this.classList.add('loaded'); };
        skillImg.src = getWikiImage(chosenSkill.imageName);

        // Render Keystones
        const k1El = document.getElementById('link-key1');
        const k2El = document.getElementById('link-key2');
        const noKeyEl = document.getElementById('no-keystones');
        
        k1El.style.display = 'none';
        k2El.style.display = 'none';
        noKeyEl.style.display = 'none';
        
        keystoneContainer.classList.remove('dual-mode');

        if(chosenKeys.length === 0) {
            noKeyEl.style.display = 'block';
        } else {
            // IF 2 KEYS, toggle layout mode
            if (chosenKeys.length > 1) {
                keystoneContainer.classList.add('dual-mode');
            }

            const setKey = (elId, nameId, imgId, keyName) => {
                document.getElementById(elId).style.display = 'flex';
                document.getElementById(nameId).innerText = keyName;
                document.getElementById(elId).href = getWikiLink(keyName);
                
                const img = document.getElementById(imgId);
                img.classList.remove('loaded');
                img.onload = function() { this.classList.add('loaded'); };
                img.src = getKeystoneImage(keyName);
            };
            if(chosenKeys[0]) setKey('link-key1', 'res-key1-name', 'img-key1', chosenKeys[0]);
            if(chosenKeys[1]) setKey('link-key2', 'res-key2-name', 'img-key2', chosenKeys[1]);
        }

        resultCards.forEach(card => card.classList.add('revealed'));

        setTimeout(() => {
            resetBtn.classList.remove('hidden');
            inspireBtn.classList.remove('hidden');
        }, 1200);

    }, 800);
}

function resetDeck() {
    const deck = document.getElementById('deck-container');
    const exchangeZone = document.querySelector('.exchange-zone');
    const resultCards = document.querySelectorAll('.fate-card');
    const resetBtn = document.getElementById('resetBtn');
    const inspireBtn = document.getElementById('inspireBtn');

    resultCards.forEach(card => card.classList.remove('revealed'));
    resetBtn.classList.add('hidden');
    inspireBtn.classList.add('hidden');

    setTimeout(() => {
        exchangeZone.classList.remove('collapsed');
        deck.classList.remove('dealing');
    }, 500);
}