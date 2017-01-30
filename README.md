# Live Feed Test
An assessment of utilizing HTML, Javascript, and CSS files to create an application that can receive update from the web without including the data already inside the code. 

## Main Components
The main components I will be analyzing are `JSON` and `AJAX` 

* What is JSON?  
JSON is a data format which stands for *J*ava *S*cript *O*bject *N*otation.  
* What is AJAX?  
AJAX is a method of receiving data through Http Requests while performing quietly in the background of a browser or client.  
The acronym stands for *A*synchronous *J*avascript *A*nd *X*ML  

## Where is XML?
XML is mentioned in the named and used in the `main.js` file as `XMLHttpRequest()` but is not really used at all. I will be focusing on JSON for parsing data. AJAX was formed around the time when XML was primarily used for modern web development and the name just stuck with it.   

## Cheat Sheet  
| Command | Action | Argument |
| ------- | ------ | -------- |
| `XMLHttpRequest()` | makes a request from the Http client for XML/JSON data e.g. *Get*, *Post*, *Delete* | none |
| `.onload` | determines the next course of action for the data | none |
| `JSON.parse()` | analyzes the string as JSON data i.e. doesn't return a char or string | JSON response text |
| `.ResponseText()` | the response text from the JSON file requested | none | 
