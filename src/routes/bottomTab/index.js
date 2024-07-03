import { StyleSheet, Image, View, } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useColors } from '../../hooks'
import { Images } from '../../theme'
import { HomeScreen, OrdersScreen, ProfileScreen } from '../../screens'
import RouteNames from '../Routes'
import BottomTabNavigater from '../../page/navigations/BottomTab'

const BottomTab = () => {

    const Colors = useColors()
    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator
            initialRouteName='HomeScreen'
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 52,
                    backgroundColor: Colors.white,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20
                },
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
            }}
        >
            <Tab.Screen name={RouteNames.Home} component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            <Image source={Images.home}
                                style={{ ...styles.imgStyle, tintColor: focused ? Colors.black : Colors.placeholder }} />
                            <View style={{ ...styles.line, backgroundColor: focused ? Colors.black : 'transparent' }} />
                        </>
                    )
                }}
            />
            <Tab.Screen name={RouteNames.Orders} component={OrdersScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            <Image source={Images.orders}
                                style={{ ...styles.imgStyle, tintColor: focused ? Colors.black : Colors.placeholder }} />
                            <View style={{ ...styles.line, backgroundColor: focused ? Colors.black : 'transparent' }} />
                        </>
                    )
                }}
            />
            <Tab.Screen name='AnnouncementScreen' component={BottomTabNavigater}
                options={{
                    tabBarStyle: { display: "none" },
                    tabBarIcon: ({ focused }) => (
                        <>
                            <Image source={Images.announcement}
                                style={{ ...styles.imgStyle, tintColor: focused ? Colors.black : Colors.placeholder }} />
                            <View style={{ ...styles.line, backgroundColor: focused ? Colors.black : 'transparent' }} />
                        </>
                    )
                }}
            />
            <Tab.Screen name={RouteNames.Profile} component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            <Image source={Images.user}
                                style={{ ...styles.imgStyle, tintColor: focused ? Colors.black : Colors.placeholder }} />
                            <View style={{ ...styles.line, backgroundColor: focused ? Colors.black : 'transparent' }} />
                        </>
                    )
                }}
            />


        </Tab.Navigator>
    )
}

export default BottomTab

const styles = StyleSheet.create({
    imgStyle: {
        width: 20,
        height: 20,
        marginTop: 10,
        resizeMode: 'contain'
    },
    line: {
        width: 24,
        height: 4,
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2,
        marginTop: 12,
    }
})


