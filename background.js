chrome.tabs.onUpdated.addListener(function(tabId, info, tab) {
  if (info.status === 'complete' && tab.url.indexOf("https://www.chatwork.com/") !== -1) {
    chrome.tabs.executeScript(null, { file: './content.js' }, () => {});
  }
});
