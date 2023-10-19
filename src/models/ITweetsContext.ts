import ITweet from './ITweet';

export default interface ITweetsContext {
    tweets: ITweet[] | null;
    getTweetsForUser: ((uid: string, start: number, limit: number) => Promise<void>) | undefined;
}
