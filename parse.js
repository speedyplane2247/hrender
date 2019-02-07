// parse.js, the Engine parser

// --CVAR PARSER-- //
setTimeout(function() {
    if (render.state == "game" && render.activeState == 1) {
        render.maxFPS_timer = 1000 / render.maxFPS 
        
    } // dont translate FPS_timer when window is inactive
    if (tabActive == false) {
        render.activeState = 0
        render.maxFPS_timer = (1000 / render.maxFPS_menu) + render.engineSleeponIdle // limits fps
    }
    if (tabActive == true) {
        render.activeState = 0
        render.maxFPS_timer = (1000 / render.maxFPS_menu) + render.engineSleeponActive // limits fps
    } else {
        render.maxFPS_timer = 1000 / render.maxFPSmenu
        render.state = "game" // not optimal but quick fix
    }
}
, render.MaxFPS_timer + render.engineSleeponactive) // default 244 fps + the engineSleeponIdle | cvar checker
// --GAME PARSER-- //
// --MOD PARSER-- //
// --ENGINE RENDER-- //
