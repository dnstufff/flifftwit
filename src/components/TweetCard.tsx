import React, { useState, useContext, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Pressable,
} from 'react-native';
import { Palette } from '../constants/Palette';
import ITweetsContext from '../models/ITweetsContext';
import { TweetsContext } from '../contexts/TweetsContext';
import ITweet from '../models/ITweet';
import IAuthContext from '../models/IAuthContext';
import { AuthContext } from '../contexts/AuthContext';

interface IProps {
    data: ITweet;
}

const CARD_CONTENT_HEIGHT = 40;

const TweetCard: React.FC<IProps> = ({ data }) => {
    const { text } = data;

    return (
        <View style={[styles.container, styles.shadowStyle]}>
            <View>
                <Text style={styles.content}>{text}</Text>
            </View>
            <Pressable onPress={() => console.log('pressed')}>
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
    limitHeight: {
        maxHeight: CARD_CONTENT_HEIGHT,
        overflow: 'hidden'
    },
    date: {
        color: Palette.primaryDark,
    },
    content: {
        color: Palette.secondaryDark,
    },
    viewMore: {
        fontWeight: '600',
        color: Palette.primaryDark,
    },
    TweetHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default TweetCard;
