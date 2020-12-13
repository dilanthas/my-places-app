import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import MapView, { Marker } from "react-native-maps";

const MapScreen = props => {
    let initialLocation;
    let readOnly;
    if (props.route.params) {
        initialLocation = props.route.params.initialLocation;
        readOnly = props.route.params.readOnly;
    }


    const [selectedLocation, setSelectedLocation] = useState(initialLocation);

    const mapRegion = {
        latitude: initialLocation ? initialLocation.lat : 37.7,
        longitude: initialLocation ? initialLocation.lng : -122.43,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    }

    const savePickedLocationHandler = useCallback(() => {
        if (!selectedLocation) {
            return;
        }
        props.navigation.navigate('NewPlace', { pickedLocation: selectedLocation });
    }, [selectedLocation]);

    useEffect(() => {
        if (readOnly) {
            return;
        }
        props.navigation.setOptions({
            headerRight: () => {
                return (<TouchableOpacity style={styles.headerButton} onPress={savePickedLocationHandler}>
                    <Text style={styles.headerButtonText}>Save</Text>
                </TouchableOpacity>
                )
            }
        })
    }, [savePickedLocationHandler]);

    let markerCoordinate;
    if (selectedLocation) {
        markerCoordinate = {
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng
        }
    }

    const selectLocationHandler = event => {
        if (readOnly) {
            return;
        }
        setSelectedLocation({
            lat: event.nativeEvent.coordinate.latitude,
            lng: event.nativeEvent.coordinate.longitude
        });

    }
    return (
        <MapView style={styles.map} region={mapRegion} onPress={selectLocationHandler} >

            {selectedLocation && <Marker title='Picked Location' coordinate={markerCoordinate}></Marker>}
        </MapView>
    )
}


const styles = StyleSheet.create({
    map: {
        flex: 1
    },
    headerButton: {
        marginHorizontal: 20
    },
    headerButtonText: {
        fontSize: 16,
        color: 'white'
    }
});
export default MapScreen;
