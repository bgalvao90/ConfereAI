
chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed or updated');
});

chrome.action.onClicked.addListener((tab) => {
    console.log('Extension icon clicked', tab);
    chrome.tabs.create({ url: 'https://www.example.com' });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('Message received:', message);
    if (message.type === 'example') {
        sendResponse({ success: true, data: 'Response from background script' });
    }
});

chrome.alarms.create('exampleAlarm', { delayInMinutes: 1 });
chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'exampleAlarm') {
        console.log('Example alarm triggered');
    }
});