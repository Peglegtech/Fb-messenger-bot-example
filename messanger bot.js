const express = require('express')
const https = require('https')
const http = require('http')
const app = express()
bodyParser = require('body-parser');
const app = express()
app = express().use(bodyParser.json());
https.createServer(options, app).listen(443)
//httpsopt { key: ${key};}

app.post('/webhook', (req, res) => {  
 
  let body = req.body;

  // Checks this is an event from a page subscription
  if (body.object === 'page') {

    // Iterates over each entry - there may be multiple if batched
    body.entry.forEach(function(entry) {

      // Gets the message. entry.messaging is an array, but 
      // will only ever contain one message, so we get index 0
      let webhook_event = entry.messaging[0];
      console.log(webhook_event);
    });

    // Returns a '200 OK' response to all requests
    res.status(200).send('EVENT_RECEIVED');
  } else {
    // Returns a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }

});

app.get('/webhook', (req, res) => {

  // Your verify token. Should be a random string.
  let VERIFY_TOKEN = "<YOUR_VERIFY_TOKEN>"
    
  // Parse the query params
  let mode = req.query['hub.mode'];
  let token = req.query['hub.verify_token'];
  let challenge = req.query['hub.challenge'];
    
  // Checks if a token and mode is in the query string of the request
  if (mode && token) {
  
    // Checks the mode and token sent is correct
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      
      // Responds with the challenge token from the request
      console.log('WEBHOOK_VERIFIED');
      res.status(200).send(challenge);
    
    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);      
    }
  }
});

app.post('/webhook', (req, res) => {  

  // Parse the request body from the POST
  let body = req.body;

  // Check the webhook event is from a Page subscription
  if (body.object === 'page') {

    // Iterate over each entry - there may be multiple if batched
    body.entry.forEach(function(entry) {

      // Get the webhook event. entry.messaging is an array, but 
      // will only ever contain one event, so we get index 0
      let webhook_event = entry.messaging[0];
      console.log(webhook_event);
      
    });

    // Return a '200 OK' response to all events
    res.status(200).send('EVENT_RECEIVED');

  } else {
    // Return a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }

});
body.entry.forEach(function(entry) {

  // Gets the body of the webhook event
  let webhook_event = entry.messaging[0];
  console.log(webhook_event);


  // Get the sender PSID
  let sender_psid = webhook_event.sender.id;
  console.log('Sender PSID: ' + sender_psid);

  // Check if the event is a message or postback and
  // pass the event to the appropriate handler function
  if (webhook_event.message) {
    handleMessage(sender_psid, webhook_event.message);        
  } else if (webhook_event.postback) {
    handlePostback(sender_psid, webhook_event.postback);
  }
  
});

function handleMessage(sender_psid, received_message) {

  let response;

  // Check if the message contains text
  if (received_message.text = "/{/h/H/i/}" || "/{/h/H/ello/}" || "/{/f/Fuck you/}/" || "/{/b/B/itch}/" || "/{//g/G//W\3/E/e\t/ fucked/}/" || "/{//Ccunt/}/" || "/{/a/Asshole/}/" ) {    

    // Create the payload for a basic text message
    response = {
      "text": `hey; be nice to my bot!  what do yoou like to do?`
    }}
if (received_message.text ="/\W/O/o/\kay";
	{

    // Create the payload for a basic text message
    response = {
      "text": `are a girl? do you like to skate?` `
    }}
if (received_message.text ="\/wI\i/am/'m\ a girl";
	{

    // Create the payload for a basic text message
    response = {
      "text": cool!
	} `
if (received_message.text ="\/wI\i/am/'m\ not a girl";
	{

    // Create the payload for a basic text message
    response = {
      "text": cool dude! like my shit!!
	} `
  }  
  
  // Sends the response message
  callSendAPI(sender_psid, response);    
}