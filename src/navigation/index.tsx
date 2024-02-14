import React from "react";
import { TouchableOpacity } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "screens/Home";
import Location from "screens/Location";
import NewLocation from "screens/NewLocation";

import DrawerContent from "components/DrawerContent";
import Icon from "components/Icon";
import CtaMenu from "components/CtaMenu";
import icons from "constants/icons";

import theme from "theme";

type RootStackParamList = {
  Main: undefined;
  LocationStack: undefined;
  Location: undefined;
  AddLocation: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

const drawerScreenOptions = () => {
  return {
    drawerActiveBackgroundColor: theme.colors.light,
    drawerActiveTintColor: theme.colors.primary,
    drawerStyle: { flex: 1, backgroundColor: theme.colors.background, },
    drawerLabelStyle: { marginLeft: -25, fontSize: theme.sizes[4] },
  }
}

const headerLeft = (navigation: () => void) => {
  return (
    <TouchableOpacity
      style={{
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center'
      }}
      onPress={navigation}
    >
      <Icon
        icon={icons.arrowLeft}
        size={theme.sizes[4]}
        color={theme.colors.black}
      />
    </TouchableOpacity>
  )
}

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={DrawerNavigation} />
    </Stack.Navigator>
  );
};

const LocationStack = () => {
  const navigation: any = useNavigation();

  return (
    <Stack.Navigator
      initialRouteName="Location"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Location"
        component={Location}
        options={{
          headerShown: true,
          headerLeft: () => headerLeft(() => navigation.goBack()),
          headerRight: () => <CtaMenu />
        }}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Add Location",
          headerLeft: () => headerLeft(() => navigation.navigate('Location')),
        }}
        name="AddLocation"
        component={NewLocation}
      />
    </Stack.Navigator>
  );
}

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={drawerScreenOptions}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ color }) => <Icon size={theme.sizes[3]} icon={icons.home} color={color} />,
        }}
      />
      <Drawer.Screen
        name="LocationStack"
        options={{
          title: 'Manage Location',
          headerShown: false,
          drawerIcon: ({ color }) => <Icon size={theme.sizes[3]} icon={icons.mapMarkerAlt} color={color} />,
        }}
        component={LocationStack}
      />
    </Drawer.Navigator>
  )
}

export default Navigation;
