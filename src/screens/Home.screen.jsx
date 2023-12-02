import { StyleSheet, Text, View, StatusBar, ScrollView, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FitnessCards from '../components/FitnessCards.component';

const HomeScreen = () => {
    return (
        <SafeAreaView style={{ paddingBottom: 15 }}>
            <ScrollView>
                <View>
                    <View
                        style={{
                            backgroundColor: '#070A37',
                            padding: 10,
                            width: '100%',
                            height: 200,
                        }}
                    >
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>
                            HOME WORKOUT
                        </Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginTop: 20,
                                padding: 15,
                            }}
                        >
                            <View>
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        color: 'white',
                                        fontSize: 18,
                                    }}
                                >
                                    0
                                </Text>
                                <Text
                                    style={{
                                        color: '#D0D0D0',
                                        fontSize: 17,
                                        marginTop: 4,
                                    }}
                                >
                                    WORKOUTS
                                </Text>
                            </View>
                            <View>
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        color: 'white',
                                        fontSize: 18,
                                    }}
                                >
                                    0
                                </Text>
                                <Text
                                    style={{
                                        color: '#D0D0D0',
                                        fontSize: 17,
                                        marginTop: 4,
                                    }}
                                >
                                    KCAL
                                </Text>
                            </View>
                            <View>
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        color: 'white',
                                        fontSize: 18,
                                    }}
                                >
                                    0
                                </Text>
                                <Text
                                    style={{
                                        color: '#D0D0D0',
                                        fontSize: 17,
                                        marginTop: 4,
                                    }}
                                >
                                    MINS
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            style={{
                                width: '90%',
                                height: 120,
                                marginTop: -70,
                                borderRadius: 7,
                            }}
                            source={{
                                uri: 'https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png',
                            }}
                        />
                    </View>
                    <FitnessCards />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default HomeScreen;
