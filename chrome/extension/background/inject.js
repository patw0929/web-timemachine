function isInjected(tabId) {
  return chrome.tabs.executeScriptAsync(tabId, {
    code: `var injected = window.webTimeMachineInjected;
      window.webTimeMachineInjected = true;
      injected;`,
    runAt: 'document_start'
  });
}

function loadScript(name, tabId, cb) {
  if (process.env.NODE_ENV === 'production') {
    chrome.tabs.executeScript(tabId, {
      file: `/js/${name}.bundle.js`,
      runAt: 'document_end'
    }, cb);
  } else {
    // dev: async fetch bundle
    fetch(`http://localhost:3000/js/${name}.bundle.js`)
    .then(res => res.text())
    .then(fetchRes => {
      // Load redux-devtools-extension inject bundle,
      // because inject script and page is in a different context
      const request = new XMLHttpRequest();
      request.open('GET', 'chrome-extension://lmhkpmbekcpmknklioeibfkpmmfibljd/js/inject.bundle.js');  // sync
      request.send();
      request.onload = () => {
        if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
          chrome.tabs.executeScript(tabId, {
            code: request.responseText,
            runAt: 'document_start'
          });
        }
      };

      chrome.tabs.executeScript(tabId, {
        code: fetchRes,
        runAt: 'document_end'
      }, cb);
    });
  }
}

const disabledURLs = [
  '^chrome',
  '^file://',
  '^https://web\\.archive\\.org',
  '^http://webcache\\.googleusercontent\\.com'
];

chrome.browserAction.onClicked.addListener(async (tab) => { //Fired when User Clicks ICON
  if (tab.url.match(disabledURLs.join('|'))) {
    return;
  }

  const result = await isInjected(tab.id);
  if (chrome.runtime.lastError || result[0]) return;

  loadScript('inject', tab.id, () =>
    console.log('load inject bundle success!'));
});
