import { StyleSheet, Image, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';

const FitScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const exercise = route.params.exercises;
    const [index, setIndex] = useState(0);
    const currentExercise = exercise[index];
    const { image, name, sets } = currentExercise;

    const onPrevHandler = () => {
        setIndex(index - 1);
    };

    const onSkipHandler = () => {
        setIndex(index + 1);
    };

    const onNavigateHome = () => {
        navigation.navigate('Home');
    };

    const onPressNavigateHome = () => {
        navigation.navigate('Home');

        setTimeout(() => {
            setIndex(index + 1);
        }, 2000);
    };
    const onPressHandler = () => {
        navigation.navigate('Rest');

        setTimeout(() => {
            setIndex(index + 1);
        }, 2000);
    };

    return (
        <SafeAreaView>
            <Image style={{ width: '100%', height: 370 }} source={{ uri: image }} />
            <Text
                style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    fontSize: 30,
                    fontWeight: 'bold',
                }}
            >
                {name}
            </Text>
            <Text
                style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    fontSize: 38,
                    fontWeight: 'bold',
                    marginTop: 20,
                    color: 'gray',
                }}
            >
                x{sets}
            </Text>

            {/* Done Button */}

            {index + 1 >= exercise.length ? (
                <Pressable
                    onPress={onPressNavigateHome}
                    style={{
                        backgroundColor: 'blue',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: 30,
                        borderRadius: 20,
                        padding: 10,
                        width: 190,
                    }}
                >
                    <Text
                        style={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            fontSize: 22,
                            color: 'white',
                        }}
                    >
                        Done
                    </Text>
                </Pressable>
            ) : (
                <Pressable
                    onPress={onPressHandler}
                    style={{
                        backgroundColor: 'blue',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: 30,
                        borderRadius: 20,
                        padding: 10,
                        width: 190,
                    }}
                >
                    <Text
                        style={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            fontSize: 22,
                            color: 'white',
                        }}
                    >
                        Done
                    </Text>
                </Pressable>
            )}

            <Pressable
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: 50,
                }}
            >
                {/* Previous Button */}

                <Pressable
                    disabled={index === 0}
                    onPress={onPrevHandler}
                    style={{
                        backgroundColor: 'green',
                        padding: 10,
                        borderRadius: 12,
                        marginHorizontal: 22,
                        width: 100,
                    }}
                >
                    <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>
                        Prev
                    </Text>
                </Pressable>

                {/* Skip Button */}

                {index + 1 >= exercise.length ? (
                    <Pressable
                        onPress={onNavigateHome}
                        style={{
                            backgroundColor: 'green',
                            padding: 10,
                            borderRadius: 12,
                            marginHorizontal: 22,
                            width: 100,
                        }}
                    >
                        <Text
                            style={{
                                color: 'white',
                                fontWeight: 'bold',
                                textAlign: 'center',
                            }}
                        >
                            Skip
                        </Text>
                    </Pressable>
                ) : (
                    <Pressable
                        onPress={onSkipHandler}
                        style={{
                            backgroundColor: 'green',
                            padding: 10,
                            borderRadius: 12,
                            marginHorizontal: 22,
                            width: 100,
                        }}
                    >
                        <Text
                            style={{
                                color: 'white',
                                fontWeight: 'bold',
                                textAlign: 'center',
                            }}
                        >
                            Skip
                        </Text>
                    </Pressable>
                )}
            </Pressable>
        </SafeAreaView>
    );
};

export default FitScreen;

const styles = StyleSheet.create({});
