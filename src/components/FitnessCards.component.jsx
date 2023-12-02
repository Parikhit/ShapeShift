import React from 'react';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import fitness from '../data/fitness.data';
import { useNavigation } from '@react-navigation/native';

const FitnessCards = () => {
    const fitnessData = fitness;
    return (
        <View>
            {fitnessData.map((item, id) => {
                const navigation = useNavigation();
                return (
                    <Pressable
                        onPress={() =>
                            navigation.navigate('Workout', {
                                id: item.id,
                                image: item.image,
                                exercises: item.excersises,
                            })
                        }
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: 10,
                        }}
                        key={id}
                    >
                        <Image
                            source={{ uri: item.image }}
                            style={{ width: '95%', height: 140, borderRadius: 7 }}
                        />
                        <Text
                            style={{
                                position: 'absolute',
                                color: 'white',
                                fontSize: 16,
                                fontWeight: 'bold',
                                left: 20,
                                top: 20,
                            }}
                        >
                            {item.name}
                        </Text>
                        <MaterialCommunityIcons
                            style={{ position: 'absolute', color: 'white', bottom: 15, left: 20 }}
                            name='lightning-bolt'
                            size={24}
                            color='black'
                        />
                    </Pressable>
                );
            })}
        </View>
    );
};

export default FitnessCards;

const styles = StyleSheet.create({});
