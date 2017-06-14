/* Request Key jQuery
$.ajax({
    type: 'GET',
    dataType: 'jsonp',
    url: 'https://github.com/TimothyLe/live-feed-test/blob/master/json/feed-1.json',
    crossDomain : true,
    xhrFields: {
        withCredentials: true
    },
	success: function(aData) {
		console.log("It worked!", aData);
	}
});*/

// Replace() clears window session history which keeps the original page out of the loop
window.location.replace("https://oauth2server.com/auth?response_type=code&client_id=CLIENT_ID&redirect_uri=REDIRECT_URI&scope=photos&state=1234zyx");

// Href is similar but latches onto the original page the user was on
// window.location.href = "...";

var dataSet = 1;
var containerRefresh = document.getElementById("feed-info");
var btn = document.getElementById("btn"); //runs when button pressed
	btn.addEventListener('click', function(){
	var aReq = new XMLHttpRequest(); //runs when webpage opens
	aReq.open('GET', 'https://github.com/TimothyLe/live-feed-test/blob/master/json/feed-' + dataSet + '.json');
	aReq.onload = function() {
	var aData = JSON.parse(aReq.open());
	renderHTML(aData);
}
aReq.send();
dataSet++;
}, false);

function renderHTML(aData){
	var htmlStr = "";
	for(i = 0; i <aData.length; i++){
		htmlStr += "<p>" + aData[i].message + " sent by " + aData[i].sender + " " + aData[i].date + " ago." + "</p>";
	}
	containerRefresh.insertAdjacentHTML('beforeend', htmlStr);
}


