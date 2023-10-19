import React, { useContext } from 'react';
import {
    View,
    Button,
    StyleSheet,
    Text,
} from 'react-native';
import IAuthContext from '../models/IAuthContext';
import { AuthContext } from '../contexts/AuthContext';

const SettingsScreen: React.FC = ({ navigation }: any) => {
    const { user, signOut } = useContext<IAuthContext>(AuthContext);

    const handleSignOut = async () => {
        if (signOut) {
            await signOut();
        }
    };

    return (
        <View style={styles.container}>
            <Text style={{ padding: 20}}>{user?.nickname}</Text>
            <Button title="Sign Out" onPress={() => handleSignOut()} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 48,
    },
});

export default SettingsScreen;
