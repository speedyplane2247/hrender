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
