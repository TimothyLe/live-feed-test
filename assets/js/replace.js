// Replace() clears window session history which keeps the original page out of the loop
window.location.replace("https://oauth2server.com/auth?response_type=code&client_id=CLIENT_ID&redirect_uri=REDIRECT_URI&scope=photos&state=1234zyx");

// Href is similar but latches onto the original page the user was on
// window.location.href = "...";