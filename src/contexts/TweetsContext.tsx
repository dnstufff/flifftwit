import React, { createContext, useState, ReactNode } from 'react';
import ITweetsContext from '../models/ITweetsContext';
import Tweet from '../models/ITweet';
import fakeTwitter from '../lib/fake-twitter';

interface ProviderProps {
    children: ReactNode;
}

const initialContextState: ITweetsContext = {
    tweets: null,
    getTweetsForUser: undefined,
};

const TweetsContext = createContext<ITweetsContext>(initialContextState);

const { Provider } = TweetsContext;

const TweetsProvider: React.FC<ProviderProps> = ({ children }) => {
    const [tweets, setTweets] = useState<Tweet[] | null>(null);

    const getTweetsForUser = (userId: string, start: number, limit: number) => {
        return fakeTwitter()
            .getTweetsForUser(userId, start, limit)
            .then((tweets: Array<Tweet>) => {
                setTweets(tweets);
            });
    };

    return (
        <Provider
            value={{
                tweets,
                getTweetsForUser,
            }}>
            {children}
        </Provider>
    );
};

export { TweetsContext, TweetsProvider };
