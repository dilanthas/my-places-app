import React from 'react';
import { Platform } from 'react-native';

import { createStackNavigator } from "@react-navigation/stack";

import PlaceDetailScreen, { screenOptions as placeDetailScreenOptions } from "../screens/PlaceDetailScreen";
import PlacesListScreen, { screenOptions as placesListScreenOptions } from "../screens/PlacesListScreen";
import NewPlaceScreen, { screenOptions as newPlaceScreenOptions } from "../screens/NewPlaceScreen";
import MapScreen from "../screens/MapScreen";
import Colors from '../constants/Colors';

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    /*headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitle: {
        fontFamily: 'open-sans'
    },*/
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};

const PlacesStackNavigator = createStackNavigator();

export const PlacesNavigator = () => {
    return (
        <PlacesStackNavigator.Navigator screenOptions={defaultNavOptions}>
            <PlacesStackNavigator.Screen
                name="Places"
                component={PlacesListScreen}
                options={placesListScreenOptions}
            />
            <PlacesStackNavigator.Screen
                name="PlaceDetail"
                component={PlaceDetailScreen}
                options={placeDetailScreenOptions}
            />
            <PlacesStackNavigator.Screen
                name="NewPlace"
                component={NewPlaceScreen}
                options={newPlaceScreenOptions}
            />
            <PlacesStackNavigator.Screen
                name="Map"
                component={MapScreen}
            />
        </PlacesStackNavigator.Navigator>
    )
}