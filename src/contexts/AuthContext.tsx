import React, { createContext, useState, useEffect, ReactNode } from 'react';
import fakeTwitter from '../lib/fake-twitter';
import IAuthContext from '../models/IAuthContext';
import IUser from '../models/IUser';

interface ProviderProps {
    children: ReactNode;
}

const initialContextState: IAuthContext = {
    user: null,
    signOut: undefined,
    login: undefined,
};

const AuthContext = createContext<IAuthContext>(initialContextState);

const { Provider } = AuthContext;

const AuthProvider: React.FC<ProviderProps> = ({ children }) => {
    const [user, setUser] = useState<IUser | null>(null);

    useEffect(() => {
        const subscriber = fakeTwitter().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    const onAuthStateChanged = (user: any) => {
        setUser(user);
    };

    const login = async (username: string) => {
        return fakeTwitter().signInWithUsername(username)
    };

    const signOut = () => {
        return fakeTwitter().signOut();
    };

    return (
        <Provider value={{ user, login, signOut }}>
            {children}
        </Provider>
    );
};

export { AuthContext, AuthProvider };
