function play() {
  
  alert("play");
  
  document.getElementById("homescreen_panel").remove();
  let playScreen = new Ingame();
  var playing = true;
  var score = 0;
  let playerObj = document.getElementById("paddle_movement_2");
  let botPlayer = document.getElementById("paddle_movement_1");
  let ball = document.getElementById("ball_movement");
  while (playing) {
    //ball initial movement logic
    var randBallStartMoveAng = Math.floor(Math.random() * 180);
    
    
    function findHeight(x) {
      const RadAng = x * Math.PI / 180;
      var tan = Math.sin(RadAng) / Math.cos(RadAng);
      return ball.right * tan
    }
    
    //counter
    var i;
    
    while (i < findHeight(randBallStartMoveAng)) {
      i++;
      ball.height -= 1;
    }
    
    //counter 
    var j;
    
    while (j < ball.right) {
      j++;
      ball.right -= 1;
    }
    
    document.onkeydown = function(e) {
      if (e.keyCode == 38) {
      // up arrow
        playerObj.style.top = "+10px"
      } 
      
      if (e.keyCode == 40) {
        // down arrow
        playerObj.style.top = "-10px"
      }
    
      function paddleContactTest(div1, div2){
        let ox = Math.abs(div1.x - div2.x) < (div1.x < div2.x ? div2.width : div1.width);
        let oy = Math.abs(div1.y - div2.y) < (div1.y < div2.y ? div2.height : div1.height);
        return ox && oy;
      }
    
      var playerPaddleContact = paddleContactTest(playerObj, ball);
    
      function bounceBall() {
      //bounce ball physics
      }
    
    // switch case block to bounce if ball hits walls or hits an object
    } */
}
