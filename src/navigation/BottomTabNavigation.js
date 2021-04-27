import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import{HomeScreen,TablesScreen, HighlightsScreen, SettingsScreen} from '../screens/index'
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../../AppColors/Colors';


const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    return (
        <NavigationContainer>
        <Tab.Navigator 
            initialRouteName="Home" 
            tabBarOptions={{
                activeTintColor: 'white',
                inactiveTintColor: 'grey',
                style: {
                    backgroundColor: Colors.tabBarColor,
                    paddingTop: 5,
                }
                
            }}>
            <Tab.Screen 
                name="Home" 
                component={HomeScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <Ionicons name="ios-home" color={color}  size={25}/>
                    )
                }}
            />
            <Tab.Screen 
                name="Tables" 
                component={TablesScreen}
                options = {{
                    tabBarIcon: ({color}) => (
                        <Ionicons name="ios-football" color={color}  size={25}/>
                    )
                }}
            />
            <Tab.Screen 
                name="Highlights" 
                component={HighlightsScreen}
                options = {{
                    tabBarIcon: ({color}) => (
                        <Ionicons name="ios-videocam" color={color}  size={25}/>
                    )
                }}
            />
            <Tab.Screen 
                name="Settings" 
                component={SettingsScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <Ionicons name="ios-settings" color={color}  size={25}/>
                    )
                }}
            />
        </Tab.Navigator>
        </NavigationContainer>
    )
}

export default BottomTabNavigation
