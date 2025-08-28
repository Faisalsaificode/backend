import { UserEvents } from "./userEvents.js";

const userEvent = new UserEvents();

function saveToDatabase(content) {
    console.log('Saving post to database:', content);
}

function sendNotifications(content) {
    console.log('Sending Notification for:', content);
}

function updateTimeLine(content) {
    console.log('Updating timeline with:', content);
}

userEvent.addListener('postCreated', saveToDatabase);
userEvent.addListener('postCreated', sendNotifications);
userEvent.addListener('postCreated', updateTimeLine);

userEvent.createPost('This is my first post');
