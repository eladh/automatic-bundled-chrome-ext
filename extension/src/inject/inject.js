function injectScript(file, node) {
    var th = document.getElementsByTagName('html')[0];
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', file);
    th.appendChild(s);
}

injectScript( chrome.extension.getURL('/src/inject/load2page.js'), 'body');

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	var evt = document.createEvent("CustomEvent");
	evt.initCustomEvent(request.room, true, true, request);
	document.dispatchEvent(evt);
});

document.addEventListener("subscribe", function(data) {
	chrome.runtime.sendMessage( {type: "subscribe" , roomId :data.detail.roomId } );
});