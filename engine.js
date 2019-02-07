// important engine data + cvar list
var engine = new Object()
engine.version = String
engine.build = String
engine.stage = String
engine.version = 1.0
engine.build = 3
engine.stage = "Alpha"
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
render.state = game // game status for FPS renderer
render.activeState = 0 // misc variable for various render settings
var cl = new Object()
cl.showfps = 0 // shows fps counter
cl.showmap = 0 // shows map name
cl.rate = 10000000 // bytes per second maximum for multiplayer
cl.textenable = 1 // enables text-based meus
var sv = new Object()
server.cheats = 0 // single-player cheats enabled
server.cheatsMultiplayer = 0 // multi-player cheats enabled
var multiplayer = new Object()
var mat = new Object()
mat.matlist = "default.mat" // material type
mat.lwmat = 0 // low-res material
mat.wireframe = 0 // render in wire-frame
mat.Render2D = 0 // render in 2D, overrites mod settings
mat.VisibleWireframe // render wireframe thruough walls
