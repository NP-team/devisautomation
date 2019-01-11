// Called when the user clicks on the browser action.
chrome.tabs.onActivated.addListener(function() {
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        var url = tabs[0].url;

        console.log('Turning' , url , 'vert pete sa mere!' , 'youpi');
        var urlhubspot = /^https:\/\/app\.hubspot\.com\/contacts\/.*\/company\/.*/
        var voiture = url.match(urlhubspot)
        console.log(voiture)
        if (url.match(urlhubspot)) {

            chrome.browserAction.setIcon({path:"dollar-black-icon-png-1.png"})     
        }
    })

    
  });



//https://app.hubspot.com/contacts/1844698/company/