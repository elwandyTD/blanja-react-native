import PushNotification from 'react-native-push-notification';

const showNotification = (title, message) => {
  PushNotification.localNotification({
    title: title,
    message: message,
  });
};

const notificationSchedule = (title, message) => {
  PushNotification.localNotificationSchedule({
    title: title,
    message: message,
    date: new Date(Date.now() + 15 * 1000),
  });
};

export {showNotification, notificationSchedule};
