var playing = false;

class PreGame {
  backdrop() {
    document.body.style = "background-color: #000000";
  }

  homePanel() {
    let homescreenPanel = document.createElement("div");
    homescreenPanel.setAttribute("id", "homescreen_panel");
    document.body.appendChild(homescreenPanel);
  }

  homePanelBtn(id) {
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

class Ingame {
  displayScene() {
    let sceneClass = document.getElementById("playscreen_obj");
    let newScene = sceneClass.content.cloneNode(true);
    document.body.appendChild(newScene);
  }
  
  constructor() {
    this.displayScene();
  }
}

// misc functions

function prepareBaseScene() {
 let start = new PreGame();
}

function home() {
  window.location.assign("https://shanmuga1980.github.io/abunchofrandomstuff/");
}

function openInfo() {
  Create.secondaryPanel("statsPanel");
}

function play() {
  var playing = true;
}
