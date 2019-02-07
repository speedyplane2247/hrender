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
