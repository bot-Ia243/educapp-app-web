importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyDhVXZkZkZkZkZkZkZkZkZkZkZkZkZkZk",
  authDomain: "educapp-3dce1.firebaseapp.com",
  projectId: "educapp-3dce1",
  storageBucket: "educapp-3dce1.appspot.com",
  messagingSenderId: "725896643246",
  appId: "1:725896643246:web:426c8d0d826f927994633f"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || '/favicon.ico'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
