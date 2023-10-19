import React from 'react';
import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";

// import { TweetsProvider } from './src/contexts/TweetsContext';
import { AuthProvider } from './src/contexts/AuthContext';
import RootNavigator from "./src/RootNavigator";
import { LoadingProvider } from './src/contexts/LoadingContext';
import { TweetsProvider } from './src/contexts/TweetsContext';

const App: React.FC = () => {
    const navigationRef = useNavigationContainerRef();

    return (
        <AuthProvider>
            <TweetsProvider>
                <NavigationContainer ref={navigationRef}>
                    <LoadingProvider>
                        <RootNavigator />
                    </LoadingProvider>
                </NavigationContainer>
            </TweetsProvider>
        </AuthProvider>
    );
};

export default App;
