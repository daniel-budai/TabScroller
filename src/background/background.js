chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "switchTab") {
    chrome.tabs.query({ currentWindow: true }, (tabs) => {
      const activeTab = tabs.find((tab) => tab.active);
      if (activeTab) {
        let nextTabIndex =
          request.direction === "left"
            ? activeTab.index - 1
            : activeTab.index + 1;
        if (nextTabIndex < 0) nextTabIndex = 0;
        if (nextTabIndex >= tabs.length) nextTabIndex = tabs.length - 1;
        chrome.tabs.update(tabs[nextTabIndex].id, { active: true });
      }
    });
  }
});
