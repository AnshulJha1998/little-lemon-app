import { NavigationProp } from "@react-navigation/native";

export type RootStackParamList = {
  Welcome: undefined;
  Subscribe: undefined;
};
export type NAVIGATION_PROP_TYPES = {
  navigation: NavigationProp<RootStackParamList, "Welcome", undefined>;
};
