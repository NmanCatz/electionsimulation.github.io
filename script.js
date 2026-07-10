const statesData = {
    "Alabama": { ev: 9, probRed: 0.95, turnout: 2200000 }, "Alaska": { ev: 3, probRed: 0.59, turnout: 350000 },
    "Arizona": { ev: 11, probRed: 0.51, turnout: 3300000 }, "Arkansas": { ev: 6, probRed: 0.95, turnout: 1200000 },
    "California": { ev: 54, probRed: 0.05, turnout: 15300000 }, "Colorado": { ev: 10, probRed: 0.41, turnout: 3200000 },
    "Connecticut": { ev: 7, probRed: 0.05, turnout: 1800000 }, "Delaware": { ev: 3, probRed: 0.05, turnout: 500000 },
    "District of Columbia": { ev: 3, probRed: 0.01, turnout: 300000 }, "Florida": { ev: 30, probRed: 0.56, turnout: 10600000 },
    "Georgia": { ev: 16, probRed: 0.51, turnout: 4900000 }, "Hawaii": { ev: 4, probRed: 0.05, turnout: 550000 },
    "Idaho": { ev: 4, probRed: 0.95, turnout: 850000 }, "Illinois": { ev: 19, probRed: 0.10, turnout: 5500000 },
    "Indiana": { ev: 11, probRed: 0.80, turnout: 3000000 }, "Iowa": { ev: 6, probRed: 0.57, turnout: 1600000 },
    "Kansas": { ev: 6, probRed: 0.80, turnout: 1300000 }, "Kentucky": { ev: 8, probRed: 0.95, turnout: 2100000 },
    "Louisiana": { ev: 8, probRed: 0.95, turnout: 2000000 }, "Maine": { ev: 4, probRed: 0.42, turnout: 800000 },
    "Maryland": { ev: 10, probRed: 0.05, turnout: 3000000 }, "Massachusetts": { ev: 11, probRed: 0.05, turnout: 3600000 },
    "Michigan": { ev: 15, probRed: 0.48, turnout: 5400000 }, "Minnesota": { ev: 10, probRed: 0.44, turnout: 3200000 },
    "Mississippi": { ev: 6, probRed: 0.85, turnout: 1200000 }, "Missouri": { ev: 10, probRed: 0.80, turnout: 3000000 },
    "Montana": { ev: 4, probRed: 0.80, turnout: 600000 }, "Nebraska": { ev: 5, probRed: 0.80, turnout: 950000 },
    "Nevada": { ev: 6, probRed: 0.50, turnout: 1400000 }, "New Hampshire": { ev: 4, probRed: 0.46, turnout: 800000 },
    "New Jersey": { ev: 14, probRed: 0.18, turnout: 4100000 }, "New Mexico": { ev: 5, probRed: 0.42, turnout: 900000 },
    "New York": { ev: 28, probRed: 0.12, turnout: 8000000 }, "North Carolina": { ev: 16, probRed: 0.53, turnout: 5400000 },
    "North Dakota": { ev: 3, probRed: 0.95, turnout: 350000 }, "Ohio": { ev: 17, probRed: 0.58, turnout: 5500000 },
    "Oklahoma": { ev: 7, probRed: 0.95, turnout: 1500000 }, "Oregon": { ev: 8, probRed: 0.15, turnout: 2300000 },
    "Pennsylvania": { ev: 19, probRed: 0.51, turnout: 6800000 }, "Rhode Island": { ev: 4, probRed: 0.05, turnout: 500000 },
    "South Carolina": { ev: 9, probRed: 0.80, turnout: 2500000 }, "South Dakota": { ev: 3, probRed: 0.95, turnout: 400000 },
    "Tennessee": { ev: 11, probRed: 0.95, turnout: 3000000 }, "Texas": { ev: 40, probRed: 0.55, turnout: 11200000 },
    "Utah": { ev: 6, probRed: 0.85, turnout: 1400000 }, "Vermont": { ev: 3, probRed: 0.02, turnout: 350000 },
    "Virginia": { ev: 13, probRed: 0.45, turnout: 4300000 }, "Washington": { ev: 12, probRed: 0.10, turnout: 4000000 },
    "West Virginia": { ev: 4, probRed: 0.95, turnout: 750000 }, "Wisconsin": { ev: 10, probRed: 0.49, turnout: 3400000 },
    "Wyoming": { ev: 3, probRed: 0.95, turnout: 270000 }
};

// --- DYNAMIC TICKER COMMENTARY PHRASE MATRIX ---
const tickerCommentary = {
    safeWin: [
        "⚡ <strong>[State] ([EV] EV)</strong> holds the line for the [Candidate]. No surprises here.",
        "⚡ Network consensus: <strong>[State] ([EV] EV)</strong> is a lock for the [Candidate] as expected.",
        "⚡ Projection: <strong>[State] ([EV] EV)</strong> safely lands in the [Candidate] column."
    ],
    battlegroundWin: [
        "🔥 <strong>BATTLEGROUND ALERT:</strong> The [Candidate] pulls off a narrow victory in <strong>[State] ([EV] EV)</strong>!",
        "🔥 Crucial call: <strong>[State] ([EV] EV)</strong> breaks for the [Candidate] after a fierce battle!",
        "🔥 A massive sigh of relief at [Candidate] HQ as <strong>[State] ([EV] EV)</strong> is officially declared!"
    ],
    historicUpset: [
        "🚨 <strong>POLITICAL EARTHQUAKE:</strong> <strong>[State] ([EV] EV)</strong> completely flips to the [Candidate]! An absolute shocker!",
        "🚨 Unbelievable scenes on the map: The [Candidate] has shattered the baseline expectations in <strong>[State] ([EV] EV)</strong>!",
        "🚨 Stop the presses! <strong>[State] ([EV] EV)</strong> pulls off a historic dynamic upset for the [Candidate]!"
    ],
    thirdPartyUpset: [
        "🟨 <strong>BREAKING THE DUOPOLY:</strong> <strong>[State] ([EV] EV)</strong> completely rejects both major parties and breaks for [Candidate]!",
        "🟨 Historic multi-party shift! <strong>[State] ([EV] EV)</strong>'s electoral votes are heading to [Candidate]!"
    ],
    recountEvent: [
        "⚠️ <strong>PHOTO FINISH & RECOUNT:</strong> <strong>[State] ([EV] EV)</strong> triggered an automated recount at [Margin]%! After audit, [Candidate] pulls through!",
        "⚠️ <strong>RECOUNT FLIP:</strong> Breathless drama in <strong>[State] ([EV] EV)</strong>! A mandatory recount has altered the raw margins, swinging the state to [Candidate]!",
        "⚠️ <strong>AUDIT CONCLUDED:</strong> Retallying wraps up in <strong>[State] ([EV] EV)</strong>. [Candidate] secures the razor-thin certified victory!"
    ]
};

let uncalledStates = [];
let stateManualStatus = {}; 
let demTotal = 0, repTotal = 0, thirdTotal = 0;
let demPopVotes = 0, repPopVotes = 0, thirdPopVotes = 0;
let simInterval = null, isRunning = false, winnerAlerted = null;

const demInput = document.getElementById("demNameInput");
const repInput = document.getElementById("repNameInput");
const thirdInput = document.getElementById("thirdNameInput");

const width = 960, height = 480;
const svg = d3.select("#map-container").append("svg").attr("viewBox", `0 0 ${width} ${height}`).attr("width", "100%").attr("height", "100%");
const projection = d3.geoAlbersUsa().translate([width / 2, height / 2]).scale(1000);
const path = d3.geoPath().projection(projection);
const tooltip = d3.select("#tooltip");

d3.json("https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json").then(us => {
    const geoStates = topojson.feature(us, us.objects.states).features;
    svg.selectAll(".state").data(geoStates).enter().append("path").attr("class", "state").attr("d", path).attr("fill", "#242436")
        .on("mouseover touchstart", function(e, d) {
            const name = d.properties.name, info = statesData[name];
            if(info) {
                let lockStatus = "Status: Will Be Simulated";
                if (stateManualStatus[name] === 'blue') lockStatus = "Status: Locked Blue 🔵";
                if (stateManualStatus[name] === 'third') lockStatus = "Status: Locked Third Party 🟡";
                if (stateManualStatus[name] === 'red') lockStatus = "Status: Locked Red 🔴";
                tooltip.style("opacity", 1).html(`<strong>${name} (${info.ev} EV)</strong><br><span style="color:#a78bfa">${lockStatus}</span>`);
            }
        })
        .on("mousemove", function(e) {
            const coords = d3.pointer(e, d3.select("#map-container").node());
            tooltip.style("left", (coords[0] + 12) + "px").style("top", (coords[1] - 15) + "px");
        })
        .on("mouseleave touchend", () => tooltip.style("opacity", 0))
        .on("click", function(e, d) {
            if (isRunning) return;
            const name = d.properties.name; if (!statesData[name]) return;
            const isThirdAllowed = thirdInput.value.trim() !== "";

            if (!stateManualStatus[name]) {
                stateManualStatus[name] = 'blue'; d3.select(this).attr("fill", "#3b82f6");
            } else if (stateManualStatus[name] === 'blue' && isThirdAllowed) {
                stateManualStatus[name] = 'third'; d3.select(this).attr("fill", "#eab308");
            } else if (stateManualStatus[name] === 'blue' || stateManualStatus[name] === 'third') {
                stateManualStatus[name] = 'red'; d3.select(this).attr("fill", "#ef4444");
            } else {
                stateManualStatus[name] = null; d3.select(this).attr("fill", "#242436");
            }
            syncSystemConfigurations();
        });
    resetSimulation();
});

function evaluateThirdPartyPresence() {
    const activeName = thirdInput.value.trim();
    const thirdBlock = document.getElementById("thirdHero");
    const thirdCard = document.getElementById("thirdSliderCard");
    
    if (activeName !== "") {
        thirdBlock.style.display = "flex";
        thirdCard.style.opacity = "1";
        thirdCard.style.pointerEvents = "auto";
        document.getElementById("thirdLabelName").innerText = activeName;
    } else {
        thirdBlock.style.display = "none";
        thirdCard.style.opacity = "0.3";
        thirdCard.style.pointerEvents = "none";
        Object.keys(stateManualStatus).forEach(k => { if(stateManualStatus[k]==='third') stateManualStatus[k]=null; });
    }
    if(!isRunning) syncSystemConfigurations();
}

thirdInput.addEventListener("input", evaluateThirdPartyPresence);
demInput.addEventListener("input", () => document.getElementById("demLabelName").innerText = demInput.value);
repInput.addEventListener("input", () => document.getElementById("repLabelName").innerText = repInput.value);

// Sliders and descriptive formatting logic
document.getElementById("partisanTilt").addEventListener("input", (e) => {
    const v = parseInt(e.target.value);
    let t = "Balanced";
    if (v > 20) t = "Red Lean"; if (v > 50) t = "Red Wave"; if (v > 80) t = "Red Landslide";
    if (v < -20) t = "Blue Lean"; if (v < -50) t = "Blue Wave"; if (v < -80) t = "Blue Landslide";
    document.getElementById("tiltLabel").innerText = `National Slant: ${t} (${v}%)`;
});
document.getElementById("swingTilt").addEventListener("input", (e) => {
    const v = parseInt(e.target.value);
    let t = "Balanced";
    if (v > 20) t = "Swing Red"; if (v > 70) t = "Swing Max Red";
    if (v < -20) t = "Swing Blue"; if (v < -70) t = "Swing Max Blue";
    document.getElementById("swingLabel").innerText = `Swing Push: ${t} (${v}%)`;
});
document.getElementById("chaosFactor").addEventListener("input", (e) => {
    const v = parseInt(e.target.value);
    let t = "Low"; if (v > 30) t = "Moderate"; if (v > 65) t = "High"; if (v > 90) t = "Total Chaos Chaos 🔥";
    document.getElementById("chaosLabel").innerText = `Chaos / Volatility: ${t} (${v}%)`;
});
document.getElementById("thirdStrength").addEventListener("input", (e) => document.getElementById("thirdLabel").innerText = `Third Party Appeal: ${e.target.value}%`);
document.getElementById("simSpeed").addEventListener("input", (e) => {
    document.getElementById("speedLabel").innerText = `Speed: (${e.target.value}ms)`;
    if (isRunning) { clearInterval(simInterval); simInterval = setInterval(processNextState, parseInt(e.target.value)); }
});

function syncSystemConfigurations() {
    demTotal = 0; repTotal = 0; thirdTotal = 0;
    demPopVotes = 0; repPopVotes = 0; thirdPopVotes = 0;
    
    let safeStates = [];
    let battlegroundStates = [];

    Object.keys(statesData).forEach(name => {
        const info = statesData[name];
        if (stateManualStatus[name] === 'blue') {
            demTotal += info.ev; demPopVotes += Math.round(info.turnout * 0.75); repPopVotes += Math.round(info.turnout * 0.25);
        } else if (stateManualStatus[name] === 'red') {
            repTotal += info.ev; repPopVotes += Math.round(info.turnout * 0.75); demPopVotes += Math.round(info.turnout * 0.25);
        } else if (stateManualStatus[name] === 'third' && thirdInput.value.trim() !== "") {
            thirdTotal += info.ev; thirdPopVotes += Math.round(info.turnout * 0.75); demPopVotes += Math.round(info.turnout * 0.12); repPopVotes += Math.round(info.turnout * 0.12);
        } else {
            // Sort by base competitive metrics (40% to 60% probability range)
            if (info.probRed >= 0.40 && info.probRed <= 0.60) {
                battlegroundStates.push(name);
            } else {
                safeStates.push(name);
            }
        }
    });

    // Array shuffle utility
    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    // Stack array so safe states sit at the end and get popped off first
    uncalledStates = [...shuffle(battlegroundStates), ...shuffle(safeStates)];
    updateInterfaceMetrics();
}

function processNextState() {
    if (uncalledStates.length === 0) {
        clearInterval(simInterval); isRunning = false; updateButtons(); finalizeBoard(); return;
    }

    const activeThirdName = thirdInput.value.trim();
    const isThirdActive = activeThirdName !== "";

    // Pluck the next state cleanly off the pre-sorted stack
    const stateName = uncalledStates.pop();
    const stateInfo = statesData[stateName];

    const slant = parseInt(document.getElementById("partisanTilt").value); 
    const swing = parseInt(document.getElementById("swingTilt").value);   
    const chaos = parseInt(document.getElementById("chaosFactor").value);   
    const thirdStrength = parseInt(document.getElementById("thirdStrength").value);

    let redBaseShare = stateInfo.probRed; 
    redBaseShare += (slant / 120); 

    const isSwingState = (stateInfo.probRed >= 0.40 && stateInfo.probRed <= 0.60);

    if (isSwingState) {
        redBaseShare += (swing / 80); 
    }

    if (chaos > 0) {
        const noise = (Math.random() - 0.5) * (chaos / 250); 
        redBaseShare += noise;
    }

    redBaseShare = Math.max(0.02, Math.min(0.98, redBaseShare));

    let finalBlueShare = 1.0 - redBaseShare;
    let finalRedShare = redBaseShare;
    let finalThirdShare = 0;

    if (isThirdActive && thirdStrength > 0) {
        const pullFactor = thirdStrength / 115; 
        finalThirdShare = pullFactor * (1.0 - Math.abs(0.5 - redBaseShare) * 0.4);
        
        const sliceRemainder = 1.0 - finalThirdShare;
        finalRedShare *= sliceRemainder;
        finalBlueShare *= sliceRemainder;
    }

    let initialMargin = Math.abs(finalRedShare - finalBlueShare);
    let isRecount = initialMargin < 0.015 && finalThirdShare < finalRedShare && finalThirdShare < finalBlueShare;
    
    if (isRecount) {
        const recountAuditShift = (Math.random() - 0.5) * 0.003; 
        finalRedShare = Math.max(0, finalRedShare + recountAuditShift);
        finalBlueShare = Math.max(0, finalBlueShare - recountAuditShift);
    }

    let stateWinner = 'blue', finalColor = "#3b82f6";
    if (finalRedShare > finalBlueShare && finalRedShare > finalThirdShare) {
        stateWinner = 'red'; finalColor = "#ef4444";
    } else if (finalThirdShare > finalBlueShare && finalThirdShare > finalRedShare) {
        stateWinner = 'third'; finalColor = "#eab308";
    }

    repPopVotes += Math.round(stateInfo.turnout * finalRedShare);
    demPopVotes += Math.round(stateInfo.turnout * finalBlueShare);
    thirdPopVotes += Math.round(stateInfo.turnout * finalThirdShare);

    if (stateWinner === 'red') repTotal += stateInfo.ev;
    else if (stateWinner === 'blue') demTotal += stateInfo.ev;
    else thirdTotal += stateInfo.ev;

    svg.selectAll(".state").filter(d => d.properties.name === stateName).transition().duration(180).attr("fill", finalColor);
    
    const partyNameMap = {
        'blue': demInput.value || "Democrats",
        'red': repInput.value || "Republicans",
        'third': activeThirdName || "Third Party"
    };
    const partyShareMap = {
        'blue': finalBlueShare,
        'red': finalRedShare,
        'third': finalThirdShare
    };

    let labelDisplayMap = partyNameMap[stateWinner];
    let winningPercentage = (partyShareMap[stateWinner] * 100).toFixed(1);
    const isUpset = (stateWinner === 'red' && stateInfo.probRed <= 0.20) || (stateWinner === 'blue' && stateInfo.probRed >= 0.80);

    let phrasePool = [];
    if (isRecount) {
        phrasePool = tickerCommentary.recountEvent;
    } else if (stateWinner === 'third') {
        phrasePool = tickerCommentary.thirdPartyUpset;
    } else if (isUpset) {
        phrasePool = tickerCommentary.historicUpset;
    } else if (isSwingState) {
        phrasePool = tickerCommentary.battlegroundWin;
    } else {
        phrasePool = tickerCommentary.safeWin;
    }

    let rawPhrase = phrasePool[Math.floor(Math.random() * phrasePool.length)];
    let dynamicCommentary = rawPhrase
        .replace("[State]", stateName)
        .replace("[EV]", stateInfo.ev)
        .replace("[Margin]", (initialMargin * 100).toFixed(2))
        .replace("[Candidate]", `<span style="color:${finalColor}; font-weight:bold;">${labelDisplayMap.toUpperCase()} (${winningPercentage}%)</span>`);

    document.getElementById("ticker").innerHTML = dynamicCommentary;
    
    updateInterfaceMetrics();
    evaluateThresholdCrossing();
}

function updateInterfaceMetrics() {
    document.getElementById("demScore").innerText = demTotal;
    document.getElementById("repScore").innerText = repTotal;
    document.getElementById("thirdScore").innerText = thirdTotal;
    document.getElementById("neutralScore").innerText = `${538 - (demTotal + repTotal + thirdTotal)} REMAINING`;

    const grandSum = demPopVotes + repPopVotes + thirdPopVotes;
    const dPct = grandSum > 0 ? ((demPopVotes / grandSum) * 100).toFixed(1) : "0.0";
    const rPct = grandSum > 0 ? ((repPopVotes / grandSum) * 100).toFixed(1) : "0.0";
    const tPct = grandSum > 0 ? ((thirdPopVotes / grandSum) * 100).toFixed(1) : "0.0";

    document.getElementById("demPopDisplay").innerText = `${demPopVotes.toLocaleString()} (${dPct}%)`;
    document.getElementById("repPopDisplay").innerText = `${repPopVotes.toLocaleString()} (${rPct}%)`;
    document.getElementById("thirdPopDisplay").innerText = `${thirdPopVotes.toLocaleString()} (${tPct}%)`;

    document.getElementById("blueBar").style.width = `${(demTotal / 538) * 100}%`;
    document.getElementById("redBar").style.width = `${(repTotal / 538) * 100}%`;
    document.getElementById("thirdBar").style.width = `${(thirdTotal / 538) * 100}%`;
}

function evaluateThresholdCrossing() {
    if (winnerAlerted === null) {
        if (demTotal >= 270) {
            winnerAlerted = 'blue'; document.getElementById("demHero").classList.add("winner-crown");
            document.getElementById("victoryBanner").innerText = `${demInput.value.toUpperCase()} CROSS 270`;
            document.getElementById("victoryBanner").style.color = "#3b82f6";
        } else if (repTotal >= 270) {
            winnerAlerted = 'red'; document.getElementById("repHero").classList.add("winner-crown");
            document.getElementById("victoryBanner").innerText = `${repInput.value.toUpperCase()} CROSS 270`;
            document.getElementById("victoryBanner").style.color = "#ef4444";
        } else if (thirdTotal >= 270) {
            winnerAlerted = 'third'; document.getElementById("thirdHero").classList.add("winner-crown");
            document.getElementById("victoryBanner").innerText = `${thirdInput.value.toUpperCase()} CROSS 270`;
            document.getElementById("victoryBanner").style.color = "#eab308";
        }
    }
}

function finalizeBoard() {
    let txt = "Simulation Finished: ";
    if(demTotal > repTotal && demTotal > thirdTotal) txt += `${demInput.value} win plural majority!`;
    else if(repTotal > demTotal && repTotal > thirdTotal) txt += `${repInput.value} win plural majority!`;
    else if(thirdTotal > demTotal && thirdTotal > repTotal) txt += `${thirdInput.value.trim()} secure absolute upset!`;
    else txt += "Contested / No Majority reached inside Electoral College.";
    document.getElementById("ticker").innerHTML = `🏁 <strong>${txt.toUpperCase()}</strong>`;
}

function updateButtons() {
    const b = document.getElementById("playBtn");
    if(isRunning) { b.innerText = "Pause Sim Loops"; b.className = "paused"; }
    else { b.innerText = uncalledStates.length > 0 && uncalledStates.length < 51 ? "Resume Sim" : "Run Election Simulation"; b.className = ""; }
}

function resetSimulation() {
    clearInterval(simInterval); isRunning = false; winnerAlerted = null;
    document.getElementById("demHero").className = "hero-block dem-brand dem-c";
    document.getElementById("repHero").className = "hero-block rep-brand rep-c";
    document.getElementById("thirdHero").className = "hero-block center-third third-brand third-c";
    document.getElementById("victoryBanner").innerText = "LIVE TRACKING";
    document.getElementById("victoryBanner").style.color = "";
    
    svg.selectAll(".state").transition().duration(150).attr("fill", d => {
        const n = d.properties.name;
        if(stateManualStatus[n] === 'blue') return "#3b82f6";
        if(stateManualStatus[n] === 'red') return "#ef4444";
        if(stateManualStatus[n] === 'third' && thirdInput.value.trim() !== "") return "#eab308";
        return "#242436";
    });
    
    evaluateThirdPartyPresence();
    document.getElementById("ticker").innerText = "Configure variables and tap run to execute tracking loops...";
    updateButtons();
}

document.getElementById("playBtn").addEventListener("click", () => {
    if (uncalledStates.length === 0) resetSimulation();
    if (isRunning) { clearInterval(simInterval); isRunning = false; }
    else { 
        isRunning = true; 
        document.getElementById("demLabelName").innerText = demInput.value;
        document.getElementById("repLabelName").innerText = repInput.value;
        simInterval = setInterval(processNextState, parseInt(document.getElementById("simSpeed").value)); 
    }
    updateButtons();
});
document.getElementById("resetBtn").addEventListener("click", () => { stateManualStatus = {}; resetSimulation(); });