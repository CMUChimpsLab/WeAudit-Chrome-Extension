console.log('This is the background page.');
console.log('Put the background scripts here.');
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('received', request);
  if (request.type === 'take_screenshot') {
    const onCaptured = (imageUri) => {
      console.log(imageUri);
      sendResponse(imageUri);
    };

    const onError = (error) => {
      console.log(`Error: ${error}`);
      sendResponse(error);
    };
    let capturing = chrome.tabs.captureVisibleTab();
    capturing.then(onCaptured, onError);
    return true;
  }
});
