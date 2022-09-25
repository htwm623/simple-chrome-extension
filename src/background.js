chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url === undefined) {
    return false
  }
  if (tab.url && tab.url.includes('iconfont.cn')) {
    if (tab.status === 'loading') {
      chrome.tabs.sendMessage(tabId, {type: 'tabUpdate'})
    }
  }
})