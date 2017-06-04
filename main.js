<<<<<<< HEAD
/* Request Key jQuery
=======
/******************************************
	Traditional AJAX Approach	
*******************************************
>>>>>>> 9c07bf29d24447c5c162fae28980117c6ab35acd
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
<<<<<<< HEAD
});*/
=======
});
*/

/*****************************
Control Access Remote Origin
******************************/
// CORS
// Access-Control-Allow-Origin
// Access-Control-Allow-Method
// Access-Control-Allow-Header
// next()
>>>>>>> 9c07bf29d24447c5c162fae28980117c6ab35acd

// Replace() clears window session history which keeps the original page out of the loop
window.location.replace("https://oauth2server.com/auth?response_type=code&client_id=CLIENT_ID&redirect_uri=REDIRECT_URI&scope=photos&state=1234zyx");

// Href is similar but latches onto the original page the user was on
// window.location.href = "...";

<<<<<<< HEAD
var dataSet = 1;
=======
/*********************************
 Current AJAX JSON-Parse Approach
 @param req	requests for JSON data
 @param res	resets memory for new data
 @param next	moves onto the next set
 @return	an HTML string made from JSON data sets
**********************************/
var page = 1;
>>>>>>> 9c07bf29d24447c5c162fae28980117c6ab35acd
var containerRefresh = document.getElementById("feed-info");
var btn = document.getElementById("btn"); 
btn.use(function(req, res, next){
	// Creates header for access control
	res.header('Access-Control-Allow-Origin', "*");
	next();
})
// runs when button pressed
	btn.addEventListener('click', function(){
<<<<<<< HEAD
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
=======
		// Collects data on click of the button
	var aReq = new XMLHttpRequest(); 
	// runs when webpage opens
	aReq.open('GET', 'https://github.com/TimothyLe/live-feed-test/blob/master/json/feed-'+page+'.json');
	aReq.onload = function() {
	var data = JSON.parse(aReq.ResponseText());
	renderHTML(data);
}
aReq.send();
page++;
});

function renderHTML(data){
	// Prints out data from JSON files
	var htmlStr = "";
	for(i = 0; i < data.length; i++){
	htmlStr += "<p>" + "\"" + data[i].message + "\"" + " sent by " + data[i].sender + " " + data[i].date + " ago.</p>";
>>>>>>> 9c07bf29d24447c5c162fae28980117c6ab35acd
}
	containerRefresh.insertAdjacentHTML('beforeend', htmlStr);
}






