enum ScreenNames {
    Home = "Home",
    Login = "Login",
    Settings = "Settings",
    Details = "Details",
    HomeNavigator = "HomeNavigator",
}

type RootStackParamList = {
    [ScreenNames.Home]: undefined;
    [ScreenNames.Details]: undefined;
    [ScreenNames.Login]: undefined;
};

type RootTabsParamList = {
    [ScreenNames.HomeNavigator]: undefined;
    [ScreenNames.Settings]: undefined;
};

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
        interface RootParamList extends RootTabsParamList { }
    }
}

export { ScreenNames };
export type { RootStackParamList, RootTabsParamList };

