
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

/*!< Creating CORS request from JS codebase->Browser */
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

/*!< Helper method to parse title tag from response */
function getTitle(text){
  return text.match('<title>(.*)?</title>')[1];
}

/*!< Makes CORS request from Browser->Server side */
function makeCorseRequest(){
  // Server supporting CORS
  var url = renderHTML(input); // Form input entry
  url.addEventListener('click', function(){/*TODO*/});
  
  // Creats XHR object
  var xhr = createCORSRequest('GET', url);
  if(!xhr){
    alert('URL does not support CORS');
    return;
  }
  
  // Response handlers
  xhr.onload = function(){
    var text = xhr.responseText;
    var title = getTitle(text);
    alert('Server response to ' + url + ': ' + title);
  };

  // Error handling
  xhr.onerror = function(){
    alert('Sorry, an error occurred with the request.');
  };

  xhr.send();
}
