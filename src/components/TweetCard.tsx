import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Pressable,
} from 'react-native';
import { Palette } from '../constants/Palette';
import ITweet from '../models/ITweet';
import { useNavigation } from '@react-navigation/native';
import { ScreenNames } from '../models/navigation';

interface IProps {
    data: ITweet;
}

const TweetCard: React.FC<IProps> = ({ data }) => {
    const { text } = data;
    const navigation = useNavigation();

    return (
        <View style={[styles.container, styles.shadowStyle]}>
            <View>
                <Text style={styles.content}>{text}</Text>
            </View>
            <Pressable onPress={() => { navigation.navigate(ScreenNames.Details, { data, title: `Tweet #${data.id}` })}}>
                <Text style={styles.viewMore}>View Tweet...</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 24,
        gap: 24,
        borderRadius: 8,
        backgroundColor: Palette.white,
    },
    shadowStyle: {
        shadowColor: Palette.grey,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        borderRadius: 8,
    },
    content: {
        color: Palette.secondaryDark,
    },
    viewMore: {
        fontWeight: '600',
        color: Palette.primaryDark,
    },
});

export default TweetCard;
