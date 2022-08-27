var player = {
    cHP: 10,
    mHP: 10,
    ATK: 1,
    DEF: 0,
    SPD: 5,
    PnE: {
        Precision: 100,
        Evasion: 100
    },
    inventory: {

    }
}

var world = {
    U:0,D:0,L:0,R:0
}

/** @type {HTMLCanvasElement} */
var worldCanvas = document.getElementById('wrldCvs')
const ctx = worldCanvas.getContext("2d")

worldCanvas.height = 350
worldCanvas.width = 500

function drawWorld() {
    for (i = 1;i<26;i++) {
        ctx.beginPath();
        ctx.moveTo(50*i,0);
        ctx.lineTo(50*i,500);
        ctx.stroke();
    }
}

function begin() {
    tab("character");
}

function tab(tab) {
    document.getElementById("Character").style.display = "none"
    document.getElementById("Setting").style.display = "none"
    document.getElementById("World").style.display = "none"
    document.getElementById("Tab 4").style.display = "none"
    document.getElementById(tab).style.display = "inline-block"
}

function update() {
    document.getElementById("printCharacter").innerHTML = 
    "HP: " + player.cHP + "/" + player.mHP + "<br />" + "ATK: " + player.ATK + "<br />" + "DEF: " + player.DEF + "<br />" + "SPD: " +player.SPD + "<br />" + "Precision: " + player.PnE.Precision + "<br />" + "Evasion: " + player.PnE.Evasion + "<br />"
}

var Loop = window.setInterval (function() {
    update();
    drawWorld();
},500)
