import { Text, View } from "react-native";

const Loading = () => {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Text style={{ fontSize: 20 }}>
                Loading...
            </Text>
        </View>
    );
}

export default Loading;
