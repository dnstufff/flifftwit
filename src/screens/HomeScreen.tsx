import React, { useContext, useEffect } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
} from 'react-native';
import IAuthContext from '../models/IAuthContext';
import { AuthContext } from '../contexts/AuthContext';
import ITweetsContext from '../models/ITweetsContext';
import { TweetsContext } from '../contexts/TweetsContext';
import TweetCard from '../components/TweetCard';
import Loading from '../components/Loading';
import { useLoading } from '../contexts/LoadingContext';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen: React.FC = ({ navigation }: any) => {
    const { user, signOut } = useContext<IAuthContext>(AuthContext);
    const { showLoading, hideLoading, isLoading } = useLoading();
    const { getTweetsForUser, tweets } =
        useContext<ITweetsContext>(TweetsContext);

    useEffect(() => {
        loadTweets();
    }, []);

    const loadTweets = async (start: number = 1, limit: number = 20) => {
        if (user && getTweetsForUser) {
            showLoading();
            await getTweetsForUser(user.id, start, limit);
            hideLoading();
        }
    }

    const handleSignOut = async () => {
        if (signOut) {
            await signOut();
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={tweets}
                renderItem={({ item }) => <View style={styles.tweetsContainer}><TweetCard data={item} key={item.id} /></View>}
                keyExtractor={item => item.id}
                onEndReached={() => tweets && loadTweets(1, tweets.length + 20)}
            />
            {isLoading && <Loading />}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        minHeight: '100%',
    },
    tweetsContainer: {
        paddingHorizontal: 24,
        marginVertical: 8
    },
});

export default HomeScreen;
