window.subscribe = function(name ,cb) {
	var event = new CustomEvent("subscribe", 
		{
			detail: {
				roomId: name
			},
			bubbles: true,
			cancelable: true	
		});

	event.initEvent('subscribe');
	document.addEventListener(name, function(result) {
		cb(result);
	});	
	document.dispatchEvent(event);
};