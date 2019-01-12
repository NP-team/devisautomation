// Called when the user clicks on the browser action.
chrome.tabs.onActivated.addListener(function() {
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        var url = tabs[0].url;
        var urlhubspot = /^https:\/\/app\.hubspot\.com\/contacts\/.*\/company\/.*/
        var isHubspotEnterprise = url.match(urlhubspot)
        
        //we are in a hubspot enterprise so we can change to the activ icon
        if (isHubspotEnterprise) 
        {
            chrome.browserAction.setIcon({path:"activ-icon-enterprise.png"})     
        }
        //we are not in a hubspot enterprise so we change to the non-activ icon
        else
        {
            chrome.browserAction.setIcon({path:"non-activ-icon-enterprise.png"}) 
        }
    })

    
  });



//https://app.hubspot.com/contacts/1844698/company/