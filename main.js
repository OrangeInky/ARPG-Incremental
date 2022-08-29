function RNG(min,max) {
    return min + Math.floor((max - min + 1) * Math.random())
}

class Entity {
    constructor(mHP, ATK, DEF, SPD, Precision, Evasion, Inventory, Type) {
        this.Position = {x:0,y:0};
        this.Type = Type;
        this.mHP = mHP;
        this.cHP = this.getcHP()
        this.ATK = ATK;
        this.DEF = DEF;
        this.SPD = SPD;
        this.Precision = Precision;
        this.Evasion = Evasion;
        this.Inventory = Inventory;
    }
    getcHP() {
        return this.mHP;
    }
    drawCharacter(x,y) {
        ctx.beginPath();
        ctx.arc(275+x*50, 275+y*50, 20, 0, 2* Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();
    }
    move(cardinal) {
        if (cardinal == "left") {
            this.erase(player.Position.x,player.Position.y)
            this.Position.x -=1;
        }
        if (cardinal == "right") {
            this.erase(player.Position.x,player.Position.y)
            this.Position.x +=1;
        }
        if (cardinal == "up") {
            this.erase(player.Position.x,player.Position.y)
            this.Position.y -=1;
        }
        if (cardinal == "down") {
            this.erase(player.Position.x,player.Position.y)
            this.Position.y +=1;
        }
    }
    erase(x,y) {
        ctx.beginPath();
        ctx.arc(275+x*50, 275+y*50, 21, 0, 2* Math.PI);
        ctx.fillStyle = "white";
        ctx.fill();
    }
}
class Tiles {
    constructor(x,y,type) {
        this.x = x;
        this.y = y;
        this.type = type;
    }
    create() {
        if (this.type === "border") {
            ctx.strokeStyle = "black";
        }
        ctx.strokeRect(this.x,this.y,50,50)
    }
}

const player = new Entity(10,1,0,5,100,100,{},"Player")
const tiles = [];

/** @type {HTMLCanvasElement} */
var worldCanvas = document.getElementById('wrldCvs')
const ctx = worldCanvas.getContext("2d")

worldCanvas.height = 550
worldCanvas.width = 550


function drawWorld() {
    let y = 0;
    let x = 0;
    for (i=1;i<122;i++) {
        x++;
        if (i % 11 === 0) {
            y+=1
            x=0;
        }
        tiles.push(new Tiles(50*x,50*(y),"border"))
    }
    for (i=0;i<tiles.length;i++) {
        tiles[i].create();
    }
}

drawWorld();

//onload function
function begin() {
    tab("World");
}

//tabs
function tab(tab) {
    document.getElementById("Character").style.display = "none"
    document.getElementById("Setting").style.display = "none"
    document.getElementById("World").style.display = "none"
    document.getElementById("Tab 4").style.display = "none"
    document.getElementById(tab).style.display = "inline-block"
}

//update
function update() {
    document.getElementById("printCharacter").innerHTML = 
    "HP: " + player.cHP + "/" + player.mHP + "<br />" + "ATK: " + player.ATK + "<br />" + "DEF: " + player.DEF + "<br />" + "SPD: " +player.SPD + "<br />" + "Precision: " + player.Precision + "<br />" + "Evasion: " + player.Evasion + "<br />"
}

// Main loop
var Loop = window.setInterval (function() {
    update();
    player.drawCharacter(player.Position.x,player.Position.y);
},100)

// key binds
document.addEventListener('keydown', (event) => {
    if (event.key == "ArrowUp") {
        player.move('up')
    }
    if (event.key == "ArrowDown") {
        player.move('down')
    }
    if (event.key == "ArrowLeft") {
        player.move('left')
    }
    if (event.key == "ArrowRight") {
        player.move('right')
    }
  }, false);

function gay() {
    ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
var fillRect = false;
ctx.rect(20, 20, 150, 100);
if (fillRect) {
  ctx.fill();
}
ctx.stroke();
}