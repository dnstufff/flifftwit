import React from 'react';
import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";

// import { TweetsProvider } from './src/contexts/TweetsContext';
// import { AuthProvider } from './src/contexts/AuthContext';
import RootNavigator from "./src/RootNavigator";

const App: React.FC = () => {
  const navigationRef = useNavigationContainerRef();

  return (
    // <AuthProvider>
      // <TweetsProvider>
        <NavigationContainer ref={navigationRef}>
          <RootNavigator />
        </NavigationContainer>
      // </TweetsProvider>
    // </AuthProvider>
  );
};

export default App;
