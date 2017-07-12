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

/*!< Simple Request */
var url = 'https://github.com/TimothyLe/live-feed-test/tree/master';
var xhr = createCORSRequest('GET', url);
xhr.send();

/*!< HTTP Request */
// GET /cors HTTP/1.1
// Origin: https://github.com/TimothyLe/live-feed-test/tree/master
// Host: github.com
// Accept-Language: en-US
// Connection: keep-alive
// User-Agent: Chrome/59.0.3071.115

/*!< Preflight Request */
var url = 'https://github.com/TimothyLe/live-feed-test/tree/master';
var xhr = createCORSRequest('PUT', url);
xhr.setRequestHeader(
    'X-Custom-Header', 'value');
xhr.send();

/*!< Preflight HTTP Request */
// OPTIONS /cors HTTP/1.1
// Origin: https://github.com/TimothyLe/live-feed-test/tree/master
// Access-Control-Request-Method: PUT
// Access-Control-Request-Headers: X-Custom-Header
// Host: github.com
// Accept-Language: en-US
// Connection: keep-alive
// User-Agent: Chrome/59.0.3071.115


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

/*!< Venmo Authentication prototype */
function venmoRedirect(client_id, scope, response_type, redirect_uri, state){
  window.location.replace("https://api.venmo.com/v1/oauth/authorize?client_id=<client_id>&scope=<scopes>");
}

/*
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {

    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);

  } else if (typeof XDomainRequest != "undefined") {

    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);

  } else {

    // Otherwise, CORS is not supported by the browser.
    xhr = null;

  }
  return xhr;
}

var xhr = createCORSRequest('GET', url);
if (!xhr) {
  throw new Error('CORS not supported');
}
*/

/*!< React Native - Hello World Example*/
/*
import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <Text>Hello world!</Text>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
*/