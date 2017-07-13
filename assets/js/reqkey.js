/* Request Key jQuery */
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
});
