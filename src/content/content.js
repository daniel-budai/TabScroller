window.addEventListener("wheel", (event) => {
  if (event.shiftKey) {
    if (event.deltaY < 0) {
      chrome.runtime.sendMessage({ action: "switchTab", direction: "left" });
    } else {
      chrome.runtime.sendMessage({ action: "switchTab", direction: "right" });
    }
  }
});
