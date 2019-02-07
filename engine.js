// important engine data + cvar list
var engine = new Object()
engine.version = String
engine.build = String
engine.stage = String
engine.version = 1.0
engine.build = 5
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
mat.VisibleWireframe // render wireframe thruough walls
