import React, { useState, useContext, useEffect } from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    Button,
    Text,
} from 'react-native';
import { AuthContext } from '../contexts/AuthContext';
import IAuthContext from '../models/IAuthContext';
import Loading from '../components/Loading';
import { useLoading } from '../contexts/LoadingContext';

const LoginScreen: React.FC = ({ navigation }: any) => {
    const [username, setUsername] = useState<string>('');
    const [error, setError] = useState<Error | null>(null);
    const { login, user } = useContext<IAuthContext>(AuthContext);
    const { showLoading, hideLoading, isLoading } = useLoading();

    useEffect(() => {
        if (user && !error) {
            navigation.navigate('Home');
        }
    }, [user, error]);

    const handleLogin = async (username: string) => {
        setError(null);
        showLoading();
        if (login) {
            await login(username).catch((e: Error) => {
                setError(e);
            });
            hideLoading();
        }
    };

    const isUsernameValid = (username: string) => {
        // Rule 1: Usernames containing the words X or Admin cannot be claimed
        if (/(^|\s)(X|Admin)(\s|$)/i.test(username)) {
          return false;
        }
      
        // Rule 2: Usernames cannot be longer than 15 characters
        if (username.length > 15) {
          return false;
        }
      
        // Rule 3: Usernames can only contain alphanumeric characters and underscores
        if (!/^[a-zA-Z0-9_]+$/.test(username)) {
          return false;
        }
      
        // Username is valid
        return true;
      }

    const onUsernameChange = (text: string) => {
        if (text && !isUsernameValid(text)) {
            setError(new Error('Username is invalid'));
        } else {
            setError(null);
        }
        setUsername(text);
    }

    return (
        <View style={styles.container}>
            {isLoading && <Loading />}
            {error && <Text>{error.message}</Text>}
            <TextInput
                style={styles.input}
                onChangeText={onUsernameChange}
                value={username}
                placeholder="Enter your username..."
            />
            <Text>Available mock users: johndoe, janesmith</Text>
            <Button title="Log in" onPress={() => handleLogin(username)} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        gap: 24,
        padding: 48,
    },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
    },
});

export default LoginScreen;
