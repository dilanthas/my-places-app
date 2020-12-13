import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { PlacesNavigator } from './PlacesNavigator';


const AppNavigator = (props) => {

    return (
        <NavigationContainer>
            <PlacesNavigator />
        </NavigationContainer>
    )
}

export default AppNavigator;