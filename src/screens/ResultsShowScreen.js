import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');
    
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <>
            <Text style={styles.textStyle}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    console.log(item);
                    return <Image style={styles.image} source={{uri: item}} />
                }}
            />
        </>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    image: {
        height: 300,
        width: 300,
        margin: 20,
        borderRadius: 4
    }
});

export default ResultsShowScreen;