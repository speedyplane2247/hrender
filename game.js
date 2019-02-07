// --LOGIC-- //
// logic.js
// --LIBRARY-- //
// external libraries
var tabActive;

window.onfocus = function () { 
  tabActive = true; 
}; 

window.onblur = function () { 
  tabActive = false; 
}; 
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  
// --MOD-- //
// important engine data + cvar list
var engine = new Object()
engine.version = String
engine.build = String
engine.stage = String
engine.version = 1.0
engine.build = 9
engine.stage = "Alpha"
engine.misctoken = new Array
engine.type = "client" // client or server or server-m, for mp. and sv. issues. server-m is for any custom player. settings that can't be adjusted by client/server
var player = new Object()
player.pos = new Array()
player.pos[0] = 0 // x
player.pos[1] = 0 // y
player.health = 100
player.healthDamageScale = 1 // default damage scale
player.angle = new Array()
player.angle[0] = 0 // x
player.angle[1] = 0 // y
player.angle[2] = 0 // z
player.fov = 90 // default fov
var render = new Object()
render.maxFPS = 244 // max fps
render.maxFPSmenu = 120 // max fps in menu
render.maxFPS_timer = 4.0983 // translated FPS, engine run per second
render.engineSleeponIdle = 20 // 20ms per frame to save CPU
render.engineSleeponActive = 0 // 0ms per frame to save CPU (debug option to save CPU/GPU)
render.state = "game" // game status for FPS renderer
render.activeState = 0 // misc variable for various render settings
var cl = new Object()
cl.showfps = 2 // shows fps counter {0 = off, 1 = on, 2 = defaultoff}
cl.showmap = 2 // shows map name | same options as above
// note: setting these to 2 doesn't do anything, but setting it to off restarts the client. (SETTING TO 0 RESTARTS YOUR GAME!)
cl.rate = 10000000 // bytes per second maximum for multiplayer
cl.textenable = 1 // enables text-based meus
cl.restartgame = 0 // if non-zero, restart game (client-only) | see mp.restartgame
var sv = new Object()
sv.cheats = 0 // single-player cheats enabled
sv.cheatsMultiplayer = 0 // multi-player cheats enabled
var mp = new Object()
mp.map = "x_menu.vvk"
mp.restartgame = 0 // when non-zero restart engine of all clients
var mat = new Object()
mat.matlist = "default.mat" // material type
mat.lwmat = 0 // low-res material
mat.wireframe = 0 // render in wire-frame
mat.Render2D = 0 // render in 2D, overrites mod settings
mat.VisibleWireframe = 0 // render wireframe thruough walls
// --PARSE-- //
// parse.js, the Engine parser

// --CVAR PARSER-- //
setTimeout(function() {
    if (render.state == "game" && render.activeState == 1) {
        render.maxFPS_timer = 1000 / render.maxFPS 
        
     // dont translate FPS_timer when window is inactive
    if (tabActive == false) {
        render.activeState = 0
        render.maxFPS_timer = (1000 / render.maxFPS_menu) + render.engineSleeponIdle // limits fps
    }
    if (tabActive == true) {
        render.activeState = 0
        render.maxFPS_timer = (1000 / render.maxFPS_menu) + render.engineSleeponActive
    } // limits fps
    if (cl.showfps == 1 || cl.showfps == 2) {
        if (cl.showfps == 1) {
        showFPS() // calls renderer to show fps
        } else {
            // do nothing
        }
    } else {
        // if non-1/2
        notshowFPS()
    }
    if (cl.showmap == 1 || cl.showmap == 2) {
        if (cl.showmap == 1) {
        showMAP()
        } else {
            // do nothing
        }
    } else {
        notshowMAP()
        // restarts client
    }
    if (cl.textenable != 1) {
        // do nothing yet, will disable input once input is enabled
    }
    if (cl.restartgame != 0) {
        location.reload()
    }
    if (engine.type == "server" && sv.cheats == 1) {
        server.push("sv.cheats 1") // sv.cheats to clients
    }
    if (engine.type == "server-m" ) {
        serverM.push(player) // push [player].* to clients
    }
    if (sv.cheats == "1") {
        engine.misctoken[0] = "auth"
    }

    } else {
        render.maxFPS_timer = 1000 / render.maxFPSmenu
        render.state = "game" // not optimal but quick fix
    }
}
, render.MaxFPS_timer + render.engineSleeponactive) // default 244 fps + the engineSleeponIdle | cvar checker
// --GAME PARSER-- //
// --MOD PARSER-- //
// --ENGINE RENDER-- //
for (i = 0; i < -1; i++) {
    sleep(render.MaxFPS_timer)
}
// --RENDER-- //
 // render.js 
function showFPS() {
    options[0] = 1
}
function notshowFPS() { 
    options[0] = 0
}
function showMAP() {
    options[1] = 1
}
function notshowMAP() {
    options[1] = 0
}
var TempRender = new Object()

function drawFrame(map, player, health) {
    TempRender = render.maxFPS_render * 1000
    if (options[0] == 1 && options[1] == 1) {
        console.log(TempRender + " FPS | | engine.console\nXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\nX                                         X\nX                                         X\nX                                         X\nX                                          \nXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
    }
    if (options[0] == 1 && options[1] == 0) {
        console.log(TempRender + " FPS | engine.console\nXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\nX                                         X\nX                                         X\nX                                         X\nX                                          \nXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
    }
    if (options[1] == 0 && options[0] == 0) {
        console.log(" | engine.console\nXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\nX                                         X\nX                                         X\nX                                         X\nX                                          \nXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
    }
    if (options[0] == 0 && options[1] == 0) {
        console.log("engine.console\nXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\nX                                         X\nX                                         X\nX                                         X\nX                                          \nXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
    } else {
        console.log("engine.console\nXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\nX                                         X\nX                                         X\nX                                         X\nX                                          \nXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
    }
}
var options = new Array()
// Used Code


/* EXAMPLE RENDER | SOF
000 FPS | Map: xx_xxxxxx | engine.console
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
X New Game                                X
X Load Game                               X
X Options                                 X
X Quit                                    X
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/ // EXAMPLE RENDER | EOF