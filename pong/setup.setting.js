var playing = !1;

function getCookie(e) {
    let t = e + "=",
        n = decodeURIComponent(document.cookie).split(";");
    for (let e = 0; e < n.length; e++) {
        let o = n[e];
        for (; " " == o.charAt(0); ) o = o.substring(1);
        if (0 == o.indexOf(t)) return o.substring(t.length, o.length);
    }
    return "";
}

function setGenCookies() {
    let e = screen.availHeight;
    document.cookie += "avhpx=" + e + ";";
    let t = screen.availWidth;
    document.cookie += "avwpx=" + t + ";";
}
class PreGame {
  
    backdrop() {
        document.body.style = "background-color: #000000";
    }
  
    homePanel() {
        let e = document.createElement("div");
        e.setAttribute("id", "homescreen_panel"), document.body.appendChild(e);
    }
  
    homePanelBtn(e) {
        let t = document.createElement("button");
        switch ((t.setAttribute("id", e), e)) {
            case "home":
                (t.innerHTML = '<i class="fas fa-home"></i>'), t.setAttribute("onclick", "home();");
                break;
            case "play":
                (t.innerHTML = '<i class="fas fa-play"></i>Play'), t.setAttribute("onclick", "play();");
                break;
            case "info":
                (t.innerHTML = '<i class="fas fa-question"></i>'), t.setAttribute("onclick", "openInfo();");
                break;
            case "stats":
                (t.innerHTML = '<i class="fas fa-list-ol"></i>'), t.setAttribute("onclick", "openStats();");
        }
        document.getElementById("homescreen_panel").appendChild(t);
    }
  
    static secondaryPanel(e) {
        let t = document.createElement("div");
        t.setAttribute("id", "secondary_panel");
        let n = document.getElementById(e).content.cloneNode(!0);
        t.appendChild(n);
    }
  
    constructor() {
        this.backdrop(), this.homePanel(), this.homePanelBtn("home"), this.homePanelBtn("play"), this.homePanelBtn("stats"), this.homePanelBtn("info");
    }
}
class Ingame {
    
    displayScene() {
        let e = document.getElementById("playscreen_obj").content.cloneNode(!0);
        document.body.appendChild(e);
    }
    
    constructor() {
        this.displayScene();
    }
}

function prepareBaseScene() {
    new PreGame();
    setGenCookies();
    document.body.width = getCookie(avwpx);
    document.body.height = getCookie(avhpx);
}

function home() {
    window.location.assign("https://shanmuga1980.github.io/abunchofrandomstuff/");
}

function openInfo() {
    Create.secondaryPanel("statsPanel");
}
