interface IUser {
    id: string;
    username: string;
    nickname: string;
    email: string;
}

let instance: any = null;

const createInstance = () => {
    return ({
        users: {
            johndoe: {
                id: 'user1',
                username: 'johndoe',
                nickname: 'John Doe',
                email: 'johndoe@example.com',
            },
            janesmith: {
                id: 'user2',
                username: 'janesmith',
                nickname: 'Jane Smith',
                email: 'janesmith@example.com',
            },
        },
        currentUser: null as IUser | null,

        callback: null as Function | null,

        async signInWithUsername(userId: string) {
            const promise = new Promise<void>((resolve, reject) => {
                setTimeout(() => {
                    if (this.users[userId]) {
                        this.currentUser = this.users[userId];
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

        async getTweetsForUser(userId: string, start: number = 1, limit: number = 20) {
            const promise = new Promise<any>((resolve, reject) => {
                setTimeout(() => {
                    const tweets = [];
                    for (let i = 1; i < start + limit; i++) {
                        tweets.push({ id: i, text: `Tweet ${i} from ${userId}` });
                    }
                    resolve(tweets);
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

const fakeTwitter = () => {
    if (!instance) {
        instance = createInstance();
    }
    return instance;
}

export default fakeTwitter;