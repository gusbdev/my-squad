import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import Player from '../pages/player';
import Team from '../pages/team';
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
                iconName = 'home';
                break;
              case 'Team':
                iconName = 'list';
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
          showLabel: false,
        }}>
        <Tab.Screen name="Player" component={Player} />
        <Tab.Screen name="Team" component={Team} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
