import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse'

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SettingsScreen from './screens/SettingsScreen';
import DetailsScreen from './screens/DetailsScreen';
import { RootStackParamList, RootTabsParamList, ScreenNames } from "./models/navigation";
import { useContext } from "react";
import IAuthContext from "./models/IAuthContext";
import { AuthContext } from "./contexts/AuthContext";
import { faCog } from "@fortawesome/free-solid-svg-icons";


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
            options={({ route }) => ({ title: route.params.title || 'Details'})}
        />
    </Stack.Navigator>
);

export default function Root() {
    const { user } = useContext<IAuthContext>(AuthContext);

    if (!user) {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={ScreenNames.Login} component={LoginScreen} />
            </Stack.Navigator>
        );
    }

    return (
        <Tab.Navigator>
            <Tab.Screen 
                name={ScreenNames.HomeNavigator}
                component={HomeNavigator}
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: () => (<FontAwesomeIcon icon={faHouse} />)
                }}
            />
            <Tab.Screen
                name={ScreenNames.Settings}
                component={SettingsScreen}
                options={{
                    title: "Settings",
                    tabBarIcon: () => (<FontAwesomeIcon icon={faCog} />)
                }}
            />
        </Tab.Navigator>
    );
}
