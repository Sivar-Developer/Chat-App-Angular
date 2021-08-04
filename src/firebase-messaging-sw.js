// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    // REPLACE BY YOUR FIREBASE CONFIG HERE
    apiKey: "AIzaSyC6UG-hPvhBuYAl4qdF4yjE8njRaqtChr8",
    authDomain: "chat-app-c3418.firebaseapp.com",
    projectId: "chat-app-c3418",
    storageBucket: "chat-app-c3418.appspot.com",
    messagingSenderId: "876591012165",
    appId: "1:876591012165:web:d4c1cf6853e7b01e5bc62c",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();