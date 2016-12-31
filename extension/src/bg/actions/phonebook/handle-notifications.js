var myNotificationID = null;

  
function receiver(message) {
		chrome.notifications.create(
				'name-for-notification',{   
				type: 'basic', 
				iconUrl: 'phonebook.jpg', 
				title: "This is a notification", 
				message: message.text,
				 buttons: [{
					title: "Yes, get me there",
					iconUrl: 'missed_call.jpg'
				}, {
					title: "Get out of my way",
					iconUrl: 'missed_call.jpg'					
				}]
				},function(id) { myNotificationID  =  id;}
				);
		}
		
		/* Respond to the user's clicking one of the buttons */
chrome.notifications.onButtonClicked.addListener(function(notifId, btnIdx) {
    if (notifId === myNotificationID) {
        if (btnIdx === 0) {
            window.open("...");
        } else if (btnIdx === 1) {
            alert("Error");
        }
    }
});
 