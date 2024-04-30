var messageText = "Hello Bob!";
var messageCreatedAt = new Date();
console.log(messageCreatedAt);
function stringifyMessage(text, createdAt) {
    return "".concat(text, ", the ").concat(createdAt.toLocaleDateString());
}
console.log(stringifyMessage(messageText, messageCreatedAt));
var message1 = { from: "Bob", message: "Hello Alice!", isRead: true };
var message2 = { from: "Alice", message: "Hi Bob!" };
var notification1 = { at: 1694011133, state: "unread" };
var notification2 = { at: 1694011532, state: "read" };
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
