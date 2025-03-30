const targetElement = document.querySelector('#target');

const browserInfo = document.createElement('p');
const browserName = navigator.appCodeName;
const browserVersion = navigator.appVersion;
browserInfo.innerHTML = `Browser: ${browserName}<br>Browser version: ${browserVersion}`;
targetElement.appendChild(browserInfo);

const browserOS = document.createElement('p');
const operatingSystem = navigator.platform;
browserOS.innerHTML = `Operating system: ${operatingSystem}`;
targetElement.appendChild(browserOS);

const ScreenSizeInfo = document.createElement('p');
const width = window.screen.width;
const height = window.screen.height;
ScreenSizeInfo.innerHTML = `Screen size: ${width} x ${height}`;
targetElement.appendChild(ScreenSizeInfo);

const ScreenSizeAvailInfo = document.createElement('p');
const widthAvail = window.screen.availWidth;
const heightAvail = window.screen.availHeight;
ScreenSizeAvailInfo.innerHTML = `Available screen size: ${widthAvail} x ${heightAvail}`;
targetElement.appendChild(ScreenSizeAvailInfo);

const timeInfo = document.createElement('p');
const timeNow = new Date();
const date = timeNow.toLocaleDateString('fi-FI', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});
const time = timeNow.toLocaleTimeString('fi-FI', {
  hour: '2-digit',
  minute: '2-digit',
});
const dateTime = `${date} ${time}`;
timeInfo.innerHTML = `Current date and time: ${dateTime}`;
targetElement.appendChild(timeInfo);
