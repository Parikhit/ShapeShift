import { StyleSheet, Image, Text, Pressable, View, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';

const WorkoutScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { id, image, exercises } = route.params;
    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image style={{ width: '100%', height: 170 }} source={{ uri: image }} />

                <Ionicons
                    onPress={() => navigation.goBack()}
                    style={{ position: 'absolute', top: 30, left: 10 }}
                    name='arrow-back-outline'
                    size={28}
                    color='white'
                />

                {exercises.map((exercise, index) => (
                    <Pressable
                        style={{ margin: 10, flexDirection: 'row', alignItems: 'center' }}
                        key={index}
                    >
                        <Image
                            style={{ width: 90, height: 90, borderRadius: 5 }}
                            source={{ uri: exercise.image }}
                        />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>
                                {exercise.name}
                            </Text>
                            <Text style={{ marginTop: 5, fontSize: 16, color: 'gray' }}>
                                {exercise.sets}
                            </Text>
                        </View>
                    </Pressable>
                ))}

                <Pressable
                    onPress={() => navigation.navigate('Fit', { exercises })}
                    style={{
                        backgroundColor: 'blue',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginVertical: 20,
                        padding: 10,
                        width: 120,
                        borderRadius: 6,
                    }}
                >
                    <Text
                        style={{
                            textAlign: 'center',
                            color: 'white',
                            fontSize: 15,
                            fontWeight: 600,
                            marginBottom: 4,
                        }}
                    >
                        Start
                    </Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    );
};

export default WorkoutScreen;

const styles = StyleSheet.create({});
