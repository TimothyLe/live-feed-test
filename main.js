/*$.ajax({
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

// CORS
// Access-Control-Allow-Origin
// Access-Control-Allow-Method
// Access-Control-Allow-Header
// next()

var containerRefresh = document.getElementById("feed-info");
var btn = document.getElementById("btn"); //runs when button pressed
	btn.addEventListener('click', function(){
	var aReq = new XMLHttpRequest(); //runs when webpage opens
	aReq.open('GET', 'https://github.com/TimothyLe/live-feed-test/blob/master/json/feed-1.json');
	aReq.onload = function() {
	var aData = JSON.parse(aReq.ResponseText());
	renderHTML(aData);
}
aReq.send();
});

function renderHTML(data){
	containerRefresh.insertAdjacentHTML('beforeend', 'testing123');
}



