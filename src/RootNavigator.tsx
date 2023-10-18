import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SettingsScreen from './screens/SettingsScreen';
import DetailsScreen from './screens/DetailsScreen';
import { RootStackParamList, RootTabsParamList, ScreenNames } from "./screens/types";


const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabsParamList>();

const HomeNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen
            name={ScreenNames.Home}
            component={HomeScreen}
            options={{ title: "Home" }}
        />
        <Stack.Screen
            name={ScreenNames.Details}
            component={DetailsScreen}
            options={{ title: "Details" }}
        />
    </Stack.Navigator>
);

export default function Root() {
    const isLoggedIn = false;

    if (!isLoggedIn) {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={ScreenNames.Login} component={LoginScreen} />
            </Stack.Navigator>
        );
    }

    return (
        <Tab.Navigator>
            <Tab.Screen name={ScreenNames.HomeNavigator} component={HomeNavigator} options={{ title: "Home", headerShown: false }} />
            <Tab.Screen name={ScreenNames.Settings} component={SettingsScreen} options={{ title: "Settings" }} />
        </Tab.Navigator>
    );
}
