import React, { useContext } from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';
import IAuthContext from '../models/IAuthContext';
import { AuthContext } from '../contexts/AuthContext';

const HomeScreen: React.FC = ({ navigation }: any) => {
    const { user, signOut } = useContext<IAuthContext>(AuthContext);
    const handleSignOut = async () => {
        if (signOut) {
          await signOut();
        }
      };

    return (
        <View>
            <Text>{user && user.displayName}</Text>
            <Button title="Sign Out" onPress={() => handleSignOut()} />
        </View>
    );
};

export default HomeScreen;
