import React from 'react';
import {
    View,
    Text,
} from 'react-native';

const DetailsScreen: React.FC = ({ route, navigation }: any) => {
    const { data } = route.params;

    return (
        <View>
            <Text style={{ padding: 24}}>{data?.text}</Text>
        </View>
    );
};

export default DetailsScreen;
