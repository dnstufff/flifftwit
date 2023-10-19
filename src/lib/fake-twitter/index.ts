interface IUser {
    id: number;
    username: string;
    displayName: string;
    email: string;
}

let instance: any = null;

const createInstance = () => {
    return ({
        users: {
            johndoe: {
                id: 'user1',
                username: 'johndoe',
                displayName: 'John Doe',
                email: 'johndoe@example.com',
            },
            janesmith: {
                id: 'user2',
                username: 'janesmith',
                displayName: 'Jane Smith',
                email: 'janesmith@example.com',
            },
        },
        userTweets: {
            user1: [
                { id: '1', text: 'My first tweet!' },
                { id: '2', text: 'Hello, Twitter!' },
            ],
            user2: [
                { id: '3', text: 'Tweeting from user2' },
                { id: '4', text: 'Twitter is fun!' },
            ],
        },
        currentUser: null as IUser | null,

        callback: null as Function | null,

        async signInWithUsername(username: string) {
            const promise = new Promise<void>((resolve, reject) => {
                setTimeout(() => {
                    if (this.users[username]) {
                        console.log(this.callback)
                        this.currentUser = this.users[username];
                        this.callback && this.callback(this.currentUser);
                        resolve();
                    } else {
                        this.callback && this.callback(null);
                        reject(new Error('User not found'));
                    }
                }, 1000);
            })

            return promise;
        },

        async signOut() {
            this.currentUser = null;
            this.callback && this.callback(null);
        },

        onUnsubscribe() {
            this.callback = null;
        },

        onAuthStateChanged(callback: Function) {
            this.callback = callback;
            return this.onUnsubscribe;
        },
    });
}

const auth = () => {
    if (!instance) {
        instance = createInstance();
    }
    return instance;
}

export default auth;