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

  