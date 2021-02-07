import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import Player from '../pages/player';
import Team from '../pages/team';
import Tatics from '../pages/tatics';
import Calendar from '../pages/calendar';
import Setting from '../pages/options';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let iconName;
            switch (route.name) {
              case 'Player':
                iconName = 'user';
                break;
              case 'Team':
                iconName = 'list';
                break;
              case 'Tatics':
                iconName = 'clipboard';
                break;
              case 'Calendar':
                iconName = 'calendar';
                break;
              case 'Setting':
                iconName = 'settings';
                break;
              default:
                iconName = 'circle';
                break;
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#9C27B0',
          inactiveTintColor: '#777',
          showLabel: true,
        }}>
        <Tab.Screen name="Team" component={Team} />
        <Tab.Screen name="Player" component={Player} />
        <Tab.Screen name="Tatics" component={Tatics} />
        <Tab.Screen name="Calendar" component={Calendar} />
        {/* <Tab.Screen name="Setting" component={Setting} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
