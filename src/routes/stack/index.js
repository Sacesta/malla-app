import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { AddressList, CartScreen, CheckOutScreen, EditAddress, EditProfile, FoodDetailScreen, ForgotScreen, HelpScreen, HowToUseScreen, LanguageSetScreen, LoginScreen, NotificationsScreen, OnboardingScreen, OrderDetails, OrderSuccessful, OtpVerifyScreen, PaymentCard, RegisterScreen, RestaurentDetails, SearchScreen, SplashScreen } from '../../screens';
import RouteNames from '../Routes';
import BottomTab from '../bottomTab';
import { SCREEN } from '../../page/enums/AppEnums';
import * as ui from '../../page/screens';
import BottomTabNavigater from '../../page/navigations/BottomTab';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={RouteNames.Splash} component={SplashScreen} />
                <Stack.Screen name={RouteNames.onBoarding} component={OnboardingScreen} />
                <Stack.Screen name={RouteNames.Login} component={LoginScreen} />
                <Stack.Screen name={RouteNames.Register} component={RegisterScreen} />
                <Stack.Screen name={RouteNames.Forgot} component={ForgotScreen} />
                <Stack.Screen name={RouteNames.OtpVerify} component={OtpVerifyScreen} />
                <Stack.Screen name={RouteNames.LanguageSet} component={LanguageSetScreen} />
                <Stack.Screen name={RouteNames.BottomTab} component={BottomTab} />
                <Stack.Screen name={RouteNames.Search} component={SearchScreen} />
                <Stack.Screen name={RouteNames.RestaurentDetails} component={RestaurentDetails} />
                <Stack.Screen name={RouteNames.FoodDetail} component={FoodDetailScreen} />
                <Stack.Screen name={RouteNames.Cart} component={CartScreen} />
                <Stack.Screen name={RouteNames.CheckOut} component={CheckOutScreen} />
                <Stack.Screen name={RouteNames.OrderDetails} component={OrderDetails} />
                <Stack.Screen name={RouteNames.Notifications} component={NotificationsScreen} />
                <Stack.Screen name={RouteNames.HowToUse} component={HowToUseScreen} />
                <Stack.Screen name={RouteNames.HelpScreen} component={HelpScreen} />
                <Stack.Screen name={RouteNames.EditProfile} component={EditProfile} />
                <Stack.Screen name={RouteNames.AddressList} component={AddressList} />
                <Stack.Screen name={RouteNames.EditAddress} component={EditAddress} />
                <Stack.Screen name={RouteNames.OrderSuccessful} component={OrderSuccessful} />
                <Stack.Screen name={RouteNames.PaymentCard} component={PaymentCard} />

                {/* page 2 */}
                <Stack.Screen name={SCREEN.BOTTOMTAB} component={BottomTabNavigater} />
                <Stack.Screen name={SCREEN.NEABYSHOPS} component={ui.NearYouShops} />
                <Stack.Screen name={SCREEN.STORESCREEN} component={ui.StoreScreen} />
                <Stack.Screen name={SCREEN.CHOOSELOCATION} component={ui.ChooseLocation} />
                <Stack.Screen name={SCREEN.MAPSCREEN} component={ui.MapScreen} />
                <Stack.Screen name={SCREEN.ORDERSTATUS} component={ui.OrderStatus} />
                <Stack.Screen name={SCREEN.SUMMARY} component={ui.OrderSummary} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigator;
