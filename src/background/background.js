chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "switchTab") {
    chrome.tabs.query({ currentWindow: true }, (tabs) => {
      for (let i = 0; i < tabs.length; i++) {
        if (tabs[i].active) {
          let nextTabIndex = request.direction === "left" ? i - 1 : i + 1;
          if (nextTabIndex < 0) nextTabIndex = 0;
          if (nextTabIndex >= tabs.length) nextTabIndex = tabs.length - 1;
          chrome.tabs.update(tabs[nextTabIndex].id, { active: true });
          break;
        }
      }
    });
  }
});
