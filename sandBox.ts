const messageText: string = "Hello Bob!"
const messageCreatedAt: Date = new Date()

console.log(messageCreatedAt)

function stringifyMessage(text: string, createdAt: Date): string {
  return `${text}, the ${createdAt.toLocaleDateString()}`
}

console.log(stringifyMessage(messageText, messageCreatedAt))

//Interface option : can be redefined
// interface Message {
//   from: string
//   message: string
//   isRead?: boolean
// }

// interface Message {
//   sendAt?: Date
// }

//Type like example can not be redefined
type Message = {
  from: string
  message: string
  isRead?: boolean
}

const message1: Message = { from: "Bob", message: "Hello Alice!", isRead: true }
const message2: Message = { from: "Alice", message: "Hi Bob!" }

type Notif = {
  at: number
  state: string
}

const notification1: Notif = { at: 1694011133, state: "unread" }
const notification2: Notif = { at: 1694011532, state: "read" }

function readNotificationOrMessage(
  notificationOrMessage: Message | Notif
): void {
  if ("state" in notificationOrMessage) {
    notificationOrMessage.state = "read"
  } else {
    notificationOrMessage.isRead = true
  }
}

readNotificationOrMessage(message2)
readNotificationOrMessage(notification1)

console.log(message2)
console.log(notification1)
