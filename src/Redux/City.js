import React, {Component} from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from "react-native";
import ListItem from './components/ListItem';
import {connect} from 'react-redux';
import {addCity} from './action';


class City extends Componet{
    state = {
        cityName: '',
        cities: [],
    };

    placeSubmitHandler = () => {
        if(this.state.cities.trim() === ''){
            return;
        }
        this.props.add(this.state.cityName);
    };

    placeNameChangeHandler = value => {
        this.setState({

        });
    }
}