function play() {
  let playScreen = new Ingame();
  document.getElementById("homescreen_panel").remove();
  var playing = true;
  var score = 0;
  let playerObj = document.getElementById("paddle_movement_2");
  document.onkeydown = function(e) {
    if (e.keyCode == 38) {
      // up arrow
      playerObj.style.top = "+10px"
    } 
    if (e.keyCode == 40) {
      // down arrow
      playerObj.style.top = "-10px"
    }
}
