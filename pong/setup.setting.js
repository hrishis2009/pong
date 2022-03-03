class PreGame {
  static backdrop() {
    document.body.style = "background-color: #000000";
  }

  static homePanel() {
    let homescreenPanel = document.createElement("div");
    homescreenPanel.setAttribute("id", "homescreen_panel");
    document.body.appendChild(homescreenPanel);
  }

  static homePanelBtn(id) {
    let button = document.createElement("button");
    button.setAttribute("id", id);
    switch (id) {
      case "home":
        button.innerHTML = '<i class="fas fa-home"></i>';
        button.setAttribute("onclick", "home();");
        break;
      case "play":
        button.innerHTML = '<i class="fas fa-play"></i>Play';
        button.setAttribute("onclick", "play();");
        break;
      case "info":
        button.innerHTML = '<i class="fas fa-question"></i>';
        button.setAttribute("onclick", "openInfo();");
        break;
      case "stats":
        button.innerHTML = '<i class="fas fa-list-ol"></i>';
        button.setAttribute("onclick", "openStats();");
        break;
    }
    document.getElementById("homescreen_panel").appendChild(button);
    // margin-bottom: 1.625vh; for lower row
    // margin-bottom: 15.75 vh for middle row
  }
  
  static secondaryPanel(type) {
    let thisPanel = document.createElement("div");
    thisPanel.setAttribute("id", "secondary_panel");
    let txttemplate = document.getElementById(type);
    let txt = txttemplate.content.cloneNode(true);
    thisPanel.appendChild(txt);
  }
  
  constructor() {
    this.backdrop();
    this.homePanel();
    this.homePanelBtn("home");
    this.homePanelBtn("play");
    this.homePanelBtn("stats");
    this.homePanelBtn("info");
  }
}

class Postgame {

  static playfields() {
    let playfieldLeft = document.creatElement("div");
    playfieldLeft.setAttribute("id", "playfield_left");
    let playfieldRight = document.createElement("div");
    playfieldRight.setAttribute("id", "playfield_right");
    playfieldLeft.style = "position: absolute;background-color: #000000;margin-right: 50%;width: 50%;border-style: none dashed none none;border-color: #ffffff;";
    playfieldRight.style = "position: absolute;background-color: #000000;margin-left: 50%;width: 50%;border-style: none none none dashed;border-color: #ffffff;";
  }

  static ingamenav() {}

  static ball() {
    let ballMovement = document.createElement("div");
    ballMovement.setAttribute("id", "ball_movement");
    let ballContainer = document.createElement("div");
    ballContainer.setAttribute("id", "ball");
    let ball = document.createElement("svg");
    ball.setAttribute("cx", 50);
    ball.setAttribute("cy", 50);
    ball.setAttribute("r", 40);
    ball.setAttribute("stroke-width", 4);
    ball.setAttribute("fill", "#ffffff");
    ball.style.display = "block";
    ballContainer.appendChild(ball);
    ballMovement.appendChild(ballContainer);
  }

  static paddle(loc) {
    let paddleMovement = document.createElement("div");
    paddleMovement.id = "paddle_movement_" + loc;
    let paddleContainer = document.createElement("div");
    paddleContainer.id = "paddle_" + loc;
    var svgns = "http://www.w3.org/2000/svg";
    var svgDocument = evt.target.ownerDocument;
    var shape = svgDocument.createElementNS(svgns, "rect");
    shape.setAttributeNS(null, "width", 50);
    shape.setAttributeNS(null, "height", 225);
    shape.setAttributeNS(null, "stroke", "#000000");
    shape.setAttributeNS(null, "stroke-width", 4);
    shape.setAttributesNS(null, "fill", "#ffffff");
    paddleContainer.appendChild(shape);
    paddleMovement.appendChild(paddleContainer);
  }
  
}

