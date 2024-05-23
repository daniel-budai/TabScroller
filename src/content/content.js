function switchTab(direction) {
  chrome.runtime.sendMessage({ action: "switchTab", direction });
}

window.addEventListener("wheel", (event) => {
  if (event.shiftKey) {
    switchTab(event.deltaY < 0 ? "left" : "right");
  }
});
