function cookies() {
	navigator.cookieEnabled;
	return this;
}

let const cookies = cookies();

if (cookies !== true) {
	window.alert("Cookies are not enabled for this website. Please enable cookies so you can enjoy a better experience");
}

function online() {
	navigator.onLine;
	return this;
}

var offline = setInterval(online, 2500);

function setcookies() {
	document.cookie="online=" + offline;
}
