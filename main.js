var aReq = new XMLHttpRequest();
aReq.open('GET', 'https://github.com/TimothyLe/live-feed-test/blob/master/json/feed-1.json');
aReq.onload = function() {
	var aData = JSON.parse(aReq.ResponseText());
	console.log(aData[0]);
}

aReq.send();
