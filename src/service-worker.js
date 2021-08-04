importScripts('./ngsw-worker.js');

var url = 'https://chat-app-c3418.web.app/#/chat';

self.addEventListener('push', function(event) {
  if(event.data) {
    var data = event.data.json();
    var title = data.title;
    var body = data.body;
    var icon = data.image;
    url = data.data?.url;
  } else {
    var title = 'Chat App';
    var body = 'You recieved a notification.';
    var icon = 'assets/icons/favicon.png';
  }
  event.waitUntil(
    self.registration.showNotification(title, {
      body: body,
      icon: icon
    })
  );
});

self.addEventListener("notificationclick", event => {
  event.waitUntil(clients.openWindow(url));
});