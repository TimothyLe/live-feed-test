/*!< Venmo Authentication prototype */
function venmoRedirect(client_id, scope, response_type, redirect_uri, state){
  window.location.replace("https://api.venmo.com/v1/oauth/authorize?client_id=<client_id>&scope=<scopes>");
}