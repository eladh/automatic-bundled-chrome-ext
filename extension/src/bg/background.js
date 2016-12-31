var fayeClient = new Faye.Client('https://faye-server/faye');

// listen to messages from inject.js
chrome.runtime.onMessage.addListener(function (event, sender) {
	if (event.type === "subscribe") {
		fayeClient.subscribe(event.roomId, function(text) {
			chrome.tabs.sendMessage(sender.tab.id, {room : event.roomId , message : text} );
		});
	}
	
	if (event.type === "publish") {
		fayeClient.publish(event.roomId , {message: event.data});
	
	}
});
 
  


 
 
 
 
 
 
 
 