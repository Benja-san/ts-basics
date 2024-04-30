"use strict";
const messageText = "Hello Bob!";
const messageCreatedAt = new Date();
console.log(messageCreatedAt);
function stringifyMessage(text, createdAt) {
    return `${text}, the ${createdAt.toLocaleDateString()}`;
}
console.log(stringifyMessage(messageText, messageCreatedAt));
const message1 = { from: "Bob", message: "Hello Alice!", isRead: true };
const message2 = { from: "Alice", message: "Hi Bob!" };
const notification1 = { at: 1694011133, state: "unread" };
const notification2 = { at: 1694011532, state: "read" };
function readNotificationOrMessage(notificationOrMessage) {
    if ("state" in notificationOrMessage) {
        notificationOrMessage.state = "read";
    }
    else {
        notificationOrMessage.isRead = true;
    }
}
readNotificationOrMessage(message2);
readNotificationOrMessage(notification1);
console.log(message2);
console.log(notification1);
