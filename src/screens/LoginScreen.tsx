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
    const [username, onUsernameChange] = useState<string>('');
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
