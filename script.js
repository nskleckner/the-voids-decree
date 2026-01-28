// --- DATABASE ---
const SKILLS_DB = {
    "Absolution": ["of Inspiring"],
    "Animate Guardian": ["of Smiting"],
    "Animate Weapon": ["of Ranged Arms", "of Self Reflection"],
    "Arc": ["of Oscillating", "of Surging"],
    "Armageddon Brand": ["of Recalling", "of Volatility"],
    "Artillery Ballista": ["of Cross Strafe", "of Focus Fire"],
    "Ball Lightning": ["of Orbiting", "of Static"],
    "Bane": ["of Condemnation"],
    "Barrage": ["of Volley Fire"],
    "Blade Blast": ["of Dagger Detonation", "of Unloading"],
    "Blade Flurry": ["of Incision"],
    "Blade Trap": ["of Greatswords", "of Laceration"],
    "Blade Vortex": ["of the Scythe"],
    "Bladefall": ["of Impaling", "of Volleys", "of Trarthus"],
    "Bladestorm": ["of Uncertainty"],
    "Blast Rain": ["of Trarthus"],
    "Blazing Salvo": [],
    "Blight": ["of Atrophy", "of Contagion"],
    "Blink Arrow": ["of Bombarding Clones", "of Prismatic Clones"],
    "Bodyswap": ["of Sacrifice"],
    "Boneshatter": ["of Carnage", "of Complex Trauma"],
    "Burning Arrow": ["of Vigour"],
    "Caustic Arrow": ["of Poison"],
    "Chain Hook": ["of Trarthus"],
    "Charged Dash": [],
    "Cleave": ["of Rage"],
    "Cobra Lash": [],
    "Cold Snap": ["of Power"],
    "Conflagration": [],
    "Consecrated Path": ["of Endurance"],
    "Contagion": ["of Subsiding", "of Transference"],
    "Corrupting Fever": [],
    "Crackling Lance": ["of Branching", "of Disintegration"],
    "Creeping Frost": [],
    "Cremation": ["of Exhuming", "of the Volcano"],
    "Crushing Fist": [],
    "Cyclone": ["of Tumult"],
    "Dark Pact": ["of Trarthus"],
    "Desecrate": [],
    "Detonate Dead": ["of Chain Reaction", "of Scavenging"],
    "Discharge": ["of Misery"],
    "Divine Ire": ["of Disintegration", "of Holy Lightning"],
    "Divine Retribution": [],
    "Dominating Blow": ["of Inspiring"],
    "Double Strike": ["of Impaling", "of Momentum"],
    "Dual Strike": ["of Ambidexterity"],
    "Earthquake": ["of Amplification"],
    "Earthshatter": ["of Fragility", "of Prominence"],
    "Elemental Hit": ["of the Spectrum"],
    "Energy Blade": [],
    "Essence Drain": ["of Desperation", "of Wickedness"],
    "Ethereal Knives": ["of the Massacre", "of Lingering Blades"],
    "Eviscerate": [],
    "Explosive Arrow": [],
    "Explosive Concoction": ["of Destruction"],
    "Explosive Trap": ["of Magnitude", "of Shrapnel"],
    "Exsanguinate": ["of Transmission"],
    "Eye of Winter": ["of Finality", "of Transience"],
    "Fire Trap": ["of Blasting"],
    "Fireball": [],
    "Firestorm": ["of Meteors", "of Pelting"],
    "Flame Dash": ["of Return"],
    "Flame Surge": ["of Combusting"],
    "Flame Wall": [],
    "Flameblast": ["of Celerity", "of Contraction"],
    "Flamethrower Trap": [],
    "Flicker Strike": ["of Power"],
    "Forbidden Rite": ["of Soul Sacrifice"],
    "Freezing Pulse": [],
    "Frenzy": ["of Onslaught"],
    "Frost Blades": ["of Katabasis"],
    "Frost Bomb": ["of Forthcoming", "of Instability"],
    "Frost Wall": [],
    "Frostblink": ["of Wintry Blast"],
    "Frostbolt": [],
    "Frozen Legion": ["of Rallying"],
    "Galvanic Arrow": ["of Energy", "of Surging"],
    "Galvanic Field": ["of Intensity"],
    "General's Cry": [],
    "Glacial Cascade": ["of the Fissure"],
    "Glacial Hammer": ["of Shattering"],
    "Glacial Shield Swipe": [],
    "Ground Slam": ["of Earthshaking"],
    "Heavy Strike": ["of Trarthus"],
    "Hexblast": ["of Contradiction", "of Havoc"],
    "Holy Flame Totem": ["of Ire"],
    "Ice Crash": ["of Cadence"],
    "Ice Nova": ["of Deep Freeze", "of Frostbolts"],
    "Ice Shot": ["of Penetration"],
    "Ice Spear": ["of Splitting"],
    "Ice Trap": ["of Hollowness"],
    "Icicle Mine": ["of Fanning", "of Sabotage"],
    "Incinerate": ["of Expanse", "of Venting"],
    "Infernal Blow": ["of Immolation"],
    "Kinetic Blast": ["of Clustering"],
    "Kinetic Bolt": ["of Fragmentation"],
    "Kinetic Fusillade": [],
    "Kinetic Rain": ["of Impact"],
    "Lacerate": ["of Butchering", "of Haemorrhage"],
    "Lancing Steel": ["of Spraying"],
    "Leap Slam": ["of Groundbreaking"],
    "Lightning Arrow": ["of Electrocution"],
    "Lightning Conduit": ["of the Heavens"],
    "Lightning Spire Trap": ["of Overloading", "of Zapping"],
    "Lightning Strike": ["of Arcing"],
    "Lightning Tendrils": ["of Eccentricity", "of Escalation"],
    "Lightning Trap": ["of Sparking"],
    "Lightning Warp": [],
    "Manabond": [],
    "Mirror Arrow": ["of Bombarding Clones", "of Prismatic Clones"],
    "Molten Shell": [],
    "Molten Strike": ["of the Zenith"],
    "Orb of Storms": [],
    "Penance Brand": ["of Conduction", "of Dissipation"],
    "Perforate": ["of Bloodshed", "of Duality"],
    "Pestilent Strike": [],
    "Plague Bearer": [],
    "Poisonous Concoction": ["of Bouncing"],
    "Power Siphon": ["of the Archmage"],
    "Puncture": ["of Shanking"],
    "Purifying Flame": ["of Revelations"],
    "Pyroclast Mine": ["of Sabotage"],
    "Rage Vortex": ["of Berserking"],
    "Rain of Arrows": ["of Artillery", "of Saturation"],
    "Raise Spectre": ["of Transience"],
    "Raise Zombie": ["of Falling", "of Slamming"],
    "Reap": [],
    "Reave": ["of Refraction"],
    "Righteous Fire": ["of Arcane Devotion"],
    "Rolling Magma": [],
    "Scorching Ray": ["of Immolation"],
    "Scourge Arrow": ["of Menace"],
    "Searing Bond": [],
    "Seismic Trap": ["of Swells"],
    "Shattering Steel": ["of Ammunition"],
    "Shield Charge": [],
    "Shield Crush": ["of the Chieftain"],
    "Shock Nova": [],
    "Shockwave Totem": [],
    "Shrapnel Ballista": ["of Steel"],
    "Siege Ballista": ["of Splintering", "of Trarthus"],
    "Smite": ["of Divine Judgement"],
    "Somatic Shell": [],
    "Soulrend": ["of Reaping", "of the Spiral"],
    "Spark": ["of the Nova", "of Unpredictability"],
    "Spectral Helix": ["of Trarthus"],
    "Spectral Shield Throw": ["of Shattering", "of Trarthus"],
    "Spectral Throw": ["of Materialising", "of Trarthus"],
    "Split Arrow": ["of Splitting"],
    "Splitting Steel": ["of Ammunition"],
    "Static Strike": [],
    "Storm Brand": ["of Indecision"],
    "Storm Burst": [],
    "Storm Call": ["of Trarthus"],
    "Storm Rain": ["of the Conduit", "of the Fence"],
    "Stormbind": ["of Teleportation"],
    "Stormblast Mine": [],
    "Summon Carrion Golem": ["of Hordes", "of Scavenging"],
    "Summon Chaos Golem": ["of Hordes", "of the Maelström"],
    "Summon Flame Golem": ["of Hordes", "of the Meteor"],
    "Summon Holy Relic": ["of Conviction"],
    "Summon Ice Golem": ["of Hordes", "of Shattering"],
    "Summon Lightning Golem": ["of Hordes"],
    "Summon Raging Spirit": ["of Enormity"],
    "Summon Reaper": ["of Eviscerating", "of Revenants"],
    "Summon Skeletons": ["of Archers", "of Mages"],
    "Summon Stone Golem": ["of Hordes", "of Safeguarding"],
    "Sunder": ["of Earthbreaking", "of Trarthus"],
    "Sweep": [],
    "Swordstorm": [],
    "Tectonic Slam": ["of Cataclysm"],
    "Tempest Shield": [],
    "Thunderstorm": [],
    "Tornado": ["of Elemental Turbulence"],
    "Tornado Shot": [],
    "Toxic Rain": ["of Sporeburst", "of Withering"],
    "Unearth": [],
    "Vengeful Cry": [],
    "Venom Gyre": [],
    "Viper Strike": ["of the Mamba"],
    "Void Sphere": ["of Rending"],
    "Volatile Dead": ["of Confinement", "of Seething"],
    "Volcanic Fissure": ["of Snaking"],
    "Voltaxic Burst": [],
    "Vortex": ["of Projection"],
    "Wave of Conviction": ["of Trarthus"],
    "Whirling Blades": [],
    "Wild Strike": ["of Extremes"],
    "Winter Orb": [],
    "Wintertide Brand": []
};

const ASCENDANCIES = {
    standard: [
        { name: "Juggernaut", class: "Marauder" }, { name: "Berserker", class: "Marauder" }, { name: "Chieftain", class: "Marauder" },
        { name: "Slayer", class: "Duelist" }, { name: "Gladiator", class: "Duelist" }, { name: "Champion", class: "Duelist" },
        { name: "Deadeye", class: "Ranger" }, { name: "Warden", class: "Ranger" }, { name: "Pathfinder", class: "Ranger" },
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
    "Point Blank": "KeystonePointBlankArcher_passive_skill_icon",
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

// --- UTILITIES ---

let sessionHistory = [];
const HISTORY_LIMIT = 8; 

function getRandom(arr) {
    if (!arr || arr.length === 0) return null;
    return arr[Math.floor(Math.random() * arr.length)];
}

function flattenSkillDatabase(includeStd, includeTrans, includeTrarthan) {
    let allSkills = [];
    
    if (includeStd === undefined) includeStd = true;
    if (includeTrans === undefined) includeTrans = true;
    if (includeTrarthan === undefined) includeTrarthan = true;

    for (const [baseName, variants] of Object.entries(SKILLS_DB)) {
        if (includeStd) {
            allSkills.push({ 
                name: baseName, 
                type: "Standard Gem",
                imageName: `${baseName} inventory icon.png` 
            });
        }
        variants.forEach(variant => {
            const fullName = `${baseName} ${variant}`;
            const isTrarthan = variant === "of Trarthus";
            
            if (isTrarthan) {
                if (includeTrarthan) {
                    allSkills.push({ 
                        name: fullName, 
                        type: "Trarthan Gem",
                        imageName: `${fullName} inventory icon.png` 
                    });
                }
            } else {
                if (includeTrans) {
                    allSkills.push({ 
                        name: fullName, 
                        type: "Transfigured Gem",
                        imageName: `${fullName} inventory icon.png` 
                    });
                }
            }
        });
    }
    return allSkills;
}

function getWikiImage(filename) {
    const safeName = filename.replace(/ /g, "_");
    return `https://www.poewiki.net/wiki/Special:FilePath/${safeName}`;
}

function getWikiLink(name) {
    if (name === "Harbinger" || name === "Gambler" || name === "Herald" || name === "Scavenger") {
        return `https://www.poewiki.net/wiki/${name}_(ascendancy_class)`;
    }
    const safeName = name.replace(/ /g, "_");
    return `https://www.poewiki.net/wiki/${safeName}`;
}

function getKeystoneImage(name) {
    let filename = KEYSTONE_FILENAME_MAP[name];
    if (filename) {
        return `https://www.poewiki.net/wiki/Special:FilePath/${filename}.png`;
    }
    filename = name.replace(/ /g, "_");
    return `https://www.poewiki.net/wiki/Special:FilePath/${filename}_passive_skill_icon.png`;
}

// --- LOCKING LOGIC ---
function toggleFracture(cardId) {
    const card = document.getElementById(cardId);
    card.classList.toggle('fractured');
}

// --- STATE MANAGEMENT ---

function getCurrentState() {
    return {
        ascName: document.getElementById('res-asc-name').innerText,
        ascClass: document.getElementById('res-asc-class').innerText,
        skillName: document.getElementById('res-skill-name').innerText,
        skillType: document.getElementById('res-skill-type').innerText,
        keys: [
            document.getElementById('res-key1-name').innerText,
            document.getElementById('res-key2-name').innerText
        ],
        isPhrecia: document.getElementById('phreciaToggle').checked,
        pools: [
            document.getElementById('pool-std').checked,
            document.getElementById('pool-trans').checked,
            document.getElementById('pool-trarthan').checked
        ]
    };
}

function updateUrlState(state) {
    if (state.ascName === "?" || state.skillName === "?") return;
    
    const url = new URL(window.location.href);
    url.searchParams.set('asc', state.ascName);
    url.searchParams.set('class', state.ascClass);
    url.searchParams.set('skill', state.skillName);
    url.searchParams.set('type', state.skillType);
    url.searchParams.set('phrecia', state.isPhrecia);
    
    const pStr = state.pools.map(p => p ? '1' : '0').join(',');
    url.searchParams.set('pools', pStr);
    
    const validKeys = state.keys.filter(k => k && k !== "?");
    if(validKeys.length > 0) {
        url.searchParams.set('keys', validKeys.join(','));
    } else {
        url.searchParams.delete('keys');
    }

    window.history.replaceState({}, '', url);
}

function addToHistory(state) {
    if (state.ascName === "?" || state.skillName === "?") return;
    sessionHistory.unshift(state);
    if (sessionHistory.length > HISTORY_LIMIT) sessionHistory.pop();
    renderHistory();
}

function renderHistory() {
    const historyList = document.getElementById('history-list');
    const historySection = document.getElementById('history-section');
    
    if(!historyList || !historySection) return;
    historyList.innerHTML = '';

    if (sessionHistory.length === 0) {
        historySection.classList.add('hidden');
        return;
    }
    
    historySection.classList.remove('hidden');

    sessionHistory.forEach((item, index) => {
        const tab = document.createElement('div');
        tab.className = 'history-tab-item';
        tab.innerHTML = `
            <span class="h-tab-class">${item.ascName}</span>
            <span>|</span>
            <span class="h-tab-skill">${item.skillName}</span>
        `;
        tab.onclick = () => restoreState(index);
        historyList.appendChild(tab);
    });
}

function restoreState(index) {
    const state = sessionHistory[index];
    if (!state) return;

    renderCardData(state.ascName, state.ascClass, state.skillName, state.skillType, state.keys, state.isPhrecia, state.pools);
    
    updateUrlState(state);
    
    // Instant reveal for history restoration
    document.querySelectorAll('.fate-card').forEach(c => {
        c.classList.remove('instant-reveal'); 
        c.classList.add('revealed'); 
    });

    document.getElementById('resetBtn').closest('.btn-group-vertical').classList.remove('hidden');
    document.getElementById('inspireBtn').classList.remove('hidden');
}

function renderCardData(ascName, ascClass, skillName, skillType, keys, isPhrecia, pools) {
    document.getElementById('phreciaToggle').checked = isPhrecia;
    
    if (pools && pools.length === 3) {
        document.getElementById('pool-std').checked = pools[0];
        document.getElementById('pool-trans').checked = pools[1];
        document.getElementById('pool-trarthan').checked = pools[2];
    }

    document.getElementById('res-asc-name').innerText = ascName;
    document.getElementById('res-asc-class').innerText = ascClass;
    document.getElementById('link-asc').href = getWikiLink(ascName);
    const ascImg = document.getElementById('img-asc');
    ascImg.src = getWikiImage(isPhrecia ? `${ascClass} avatar.png` : `${ascName} avatar.png`);
    
    document.getElementById('res-skill-name').innerText = skillName;
    document.getElementById('res-skill-type').innerText = skillType;
    document.getElementById('link-skill').href = getWikiLink(skillName);
    const skillImg = document.getElementById('img-skill');
    skillImg.src = getWikiImage(`${skillName} inventory icon.png`); 
    
    const k1El = document.getElementById('link-key1');
    const k2El = document.getElementById('link-key2');
    const noKeyEl = document.getElementById('no-keystones');
    const keystoneContainer = document.getElementById('keystone-results');

    k1El.style.display = 'none';
    k2El.style.display = 'none';
    noKeyEl.style.display = 'none';
    keystoneContainer.classList.remove('dual-mode');

    const validKeys = keys.filter(k => k && k !== "?");
    
    if(validKeys.length === 0) {
        noKeyEl.style.display = 'block';
        document.getElementById('res-key1-name').innerText = "?";
        document.getElementById('res-key2-name').innerText = "?";
    } else {
        if(validKeys.length > 1) keystoneContainer.classList.add('dual-mode');
        
        if(validKeys[0]) {
            k1El.style.display = 'flex';
            document.getElementById('res-key1-name').innerText = validKeys[0];
            document.getElementById('link-key1').href = getWikiLink(validKeys[0]);
            document.getElementById('img-key1').src = getKeystoneImage(validKeys[0]);
        }
        if(validKeys[1]) {
            k2El.style.display = 'flex';
            document.getElementById('res-key2-name').innerText = validKeys[1];
            document.getElementById('link-key2').href = getWikiLink(validKeys[1]);
            document.getElementById('img-key2').src = getKeystoneImage(validKeys[1]);
        }
        if(!validKeys[1]) document.getElementById('res-key2-name').innerText = "?";
    }
}

function copyPermalink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        const toast = document.getElementById('toast');
        if(toast) {
            toast.classList.remove('hidden');
            setTimeout(() => {
                toast.classList.add('hidden');
            }, 2000);
        }
    });
}

function checkUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const asc = params.get('asc');
    const skill = params.get('skill');
    
    if (asc && skill) {
        const ascClass = params.get('class') || "Ascendancy";
        const skillType = params.get('type') || "Gem";
        const isPhrecia = params.get('phrecia') === 'true';
        
        let pools = [true, true, true]; 
        const pStr = params.get('pools');
        if (pStr) {
            const pArr = pStr.split(',');
            if(pArr.length === 3) {
                pools = pArr.map(v => v === '1');
            }
        }

        const keysParam = params.get('keys');
        const keys = keysParam ? keysParam.split(',') : [];

        const exchangeZone = document.querySelector('.exchange-zone');
        if(exchangeZone) exchangeZone.classList.add('collapsed');
        
        renderCardData(asc, ascClass, skill, skillType, keys, isPhrecia, pools);
        
        document.querySelectorAll('.fate-card').forEach(c => {
            c.classList.add('instant-reveal'); 
            c.classList.add('revealed');
        });
        
        document.getElementById('resetBtn').closest('.btn-group-vertical').classList.remove('hidden');
        document.getElementById('inspireBtn').classList.remove('hidden');
        
        addToHistory({
            ascName: asc, ascClass: ascClass,
            skillName: skill, skillType: skillType,
            keys: keys, isPhrecia: isPhrecia, pools: pools
        });
    }
}

// --- MAIN LOGIC ---

function castFate() {
    const deck = document.getElementById('deck-container');
    const exchangeZone = document.querySelector('.exchange-zone');
    const resultCards = document.querySelectorAll('.fate-card');
    
    const usePhrecia = document.getElementById('phreciaToggle').checked;
    
    const useStd = document.getElementById('pool-std').checked;
    const useTrans = document.getElementById('pool-trans').checked;
    const useTrarthan = document.getElementById('pool-trarthan').checked;

    const ascCard = document.getElementById('card-asc');
    const skillCard = document.getElementById('card-skill');
    const keyCard = document.getElementById('card-keystones');
    
    // Check Lock Status
    const ascLocked = ascCard ? ascCard.classList.contains('fractured') : false;
    const skillLocked = skillCard ? skillCard.classList.contains('fractured') : false;
    const keyLocked = keyCard ? keyCard.classList.contains('fractured') : false;

    if (deck.classList.contains('dealing')) return;

    let numKeystones = 1;
    document.getElementsByName('keystoneCount').forEach(radio => {
        if(radio.checked) numKeystones = parseInt(radio.value);
    });

    deck.classList.add('dealing');

    setTimeout(() => {
        exchangeZone.classList.add('collapsed');

        // Logic Generation
        if (!ascLocked) {
            let ascPool = usePhrecia ? [...ASCENDANCIES.phrecia] : [...ASCENDANCIES.standard];
            const chosenAsc = getRandom(ascPool);
            document.getElementById('res-asc-name').innerText = chosenAsc.name;
            document.getElementById('res-asc-class').innerText = chosenAsc.class;
            document.getElementById('link-asc').href = getWikiLink(chosenAsc.name);
            document.getElementById('img-asc').src = getWikiImage(usePhrecia ? `${chosenAsc.class} avatar.png` : `${chosenAsc.name} avatar.png`);
        }

        if (!skillLocked) {
            const allSkills = flattenSkillDatabase(useStd, useTrans, useTrarthan);
            let chosenSkill;
            if (allSkills.length === 0) {
                chosenSkill = { name: "Void Sphere", type: "Standard Gem", imageName: "Void Sphere inventory icon.png" };
                alert("You must select at least one gem pool. The Void has chosen for you.");
                document.getElementById('pool-std').checked = true;
            } else {
                chosenSkill = getRandom(allSkills);
            }
            document.getElementById('res-skill-name').innerText = chosenSkill.name;
            document.getElementById('res-skill-type').innerText = chosenSkill.type;
            document.getElementById('link-skill').href = getWikiLink(chosenSkill.name);
            document.getElementById('img-skill').src = getWikiImage(chosenSkill.imageName);
        }

        if (!keyLocked) {
            let chosenKeys = [];
            let keyPool = [...KEYSTONES];
            for(let i=0; i<numKeystones; i++) {
                if(keyPool.length === 0) break;
                const k = getRandom(keyPool);
                chosenKeys.push(k);
                keyPool = keyPool.filter(item => item !== k);
            }

            const k1El = document.getElementById('link-key1');
            const k2El = document.getElementById('link-key2');
            const noKeyEl = document.getElementById('no-keystones');
            const keystoneContainer = document.getElementById('keystone-results');
            
            k1El.style.display = 'none';
            k2El.style.display = 'none';
            noKeyEl.style.display = 'none';
            keystoneContainer.classList.remove('dual-mode');

            if(chosenKeys.length === 0) {
                noKeyEl.style.display = 'block';
                document.getElementById('res-key1-name').innerText = "?";
                document.getElementById('res-key2-name').innerText = "?";
            } else {
                if (chosenKeys.length > 1) {
                    keystoneContainer.classList.add('dual-mode');
                }
                const setKey = (elId, nameId, imgId, keyName) => {
                    document.getElementById(elId).style.display = 'flex';
                    document.getElementById(nameId).innerText = keyName;
                    document.getElementById(elId).href = getWikiLink(keyName);
                    document.getElementById(imgId).src = getKeystoneImage(keyName);
                };
                if(chosenKeys[0]) setKey('link-key1', 'res-key1-name', 'img-key1', chosenKeys[0]);
                if(chosenKeys[1]) setKey('link-key2', 'res-key2-name', 'img-key2', chosenKeys[1]);
                if(!chosenKeys[1]) document.getElementById('res-key2-name').innerText = "?";
            }
        }

        // --- DEALING ANIMATION LOGIC ---
        // Force sequential dealing for non-locked cards
        const cards = [
            { id: 'card-asc', locked: ascLocked },
            { id: 'card-skill', locked: skillLocked },
            { id: 'card-keystones', locked: keyLocked }
        ];

        let delayCounter = 100; // Start with small delay to allow reflow
        const STAGGER_MS = 400; // Time between cards

        cards.forEach(c => {
            const cardEl = document.getElementById(c.id);
            if (!c.locked) {
                // Remove class to reset animation state
                cardEl.classList.remove('revealed');
                cardEl.classList.remove('instant-reveal');
                
                // FORCE REFLOW: This is critical for the animation to restart
                void cardEl.offsetWidth; 
                
                setTimeout(() => {
                    cardEl.classList.add('revealed');
                }, delayCounter);
                
                delayCounter += STAGGER_MS;
            } else {
                // If locked, ensure it stays visible
                cardEl.classList.add('revealed');
                cardEl.classList.add('instant-reveal');
            }
        });

        // Update Ninja Link
        if(typeof updatePoeNinjaLink === "function") {
            updatePoeNinjaLink(
                document.getElementById('res-asc-name').innerText, 
                document.getElementById('res-skill-name').innerText
            );
        }

        // Show buttons after last card
        setTimeout(() => {
            document.getElementById('resetBtn').closest('.btn-group-vertical').classList.remove('hidden');
            document.getElementById('inspireBtn').classList.remove('hidden');
            
            const currentState = getCurrentState();
            updateUrlState(currentState);
            addToHistory(currentState);
            
        }, delayCounter + 200); 

    }, 300);
}

function resetDeck() {
    const deck = document.getElementById('deck-container');
    const exchangeZone = document.querySelector('.exchange-zone');
    const resultCards = document.querySelectorAll('.fate-card');
    const btnGroup = document.getElementById('resetBtn').closest('.btn-group-vertical');
    const inspireBtn = document.getElementById('inspireBtn');

    // HIDE only cards that are NOT locked
    resultCards.forEach(card => {
        if (!card.classList.contains('fractured')) {
            card.classList.remove('revealed');
            card.classList.remove('instant-reveal');
        }
    });

    btnGroup.classList.add('hidden');
    inspireBtn.classList.add('hidden');

    setTimeout(() => {
        exchangeZone.classList.remove('collapsed');
        deck.classList.remove('dealing');
    }, 400);
}

function rerollFate() {
    resetDeck();
    setTimeout(() => {
        castFate();
    }, 600); 
}

window.addEventListener('load', checkUrlParams);