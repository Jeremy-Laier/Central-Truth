import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import InfoScreen from '../screens/InfoScreen';
import LocationScreen from '../screens/LocationScreen';
import AdminScreen from '../screens/AdminScreen';
import SettingScreen from '../screens/SettingScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Info';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({
    headerTitle: getHeaderTitle(route),
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 18,
    },
    headerTintColor: '#fff',
  });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Info"
        component={InfoScreen}
        options={{
          title: 'Info',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-information-circle" />
        }
        }
      />
      <BottomTab.Screen
        name="Location"
        component={LocationScreen}
        options={{
          title: 'Location',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-navigate" />,
        }}
      />
      <BottomTab.Screen
        name="Administration"
        component={AdminScreen}
        options={{
          title: 'Admin',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-add-circle" />,
        }}
      />
      <BottomTab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          title: 'Setting',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-settings" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Info':
      return 'Information';
    case 'Location':
      return 'Location';
    case 'Setting':
      return 'Setting';
    case 'Administration':
      return 'Patient and Equipment';
  }
}
