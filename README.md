# Chatapp with React & Pusher Chatkit
Using the Chatkit Api, this chat application allows you to connect to your very own chat instance, giving you access to features such as private rooms, chat history and users subscribed in.

# Usage

## Variable Setup
When creating your own chatkit instance on the pusher chatkit website, get the following information:-

1. Instance Locator
2. Secret Key
3. Room ID [Acquired after creating the room]

On line 52 in ChatScreen.js, assign your Room ID to roomID.

On line 40 & 12 of ChatScreen.js and server.js, assign your Instance Locator value to instanceLocator.

Finally, on line 13 of server.js, assign the Secret Key to key.

## Commands
1. npm install
2. npm start

Enjoy and do provide feedback if any!