import { EventEmitter } from 'events';

export class UserEvents extends EventEmitter {
    createPost(content) {
        console.log('Post is created');
        this.emit("postCreated", content);
    }
}
