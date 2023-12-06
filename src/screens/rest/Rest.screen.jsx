import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { RestImage, RestHeader, TimeContainer } from './Rest.styles';

const RestScreen = () => {
    const navigation = useNavigation();
    let timer = 0;
    const [timeLeft, setTimeLeft] = useState(3);

    const startTime = () => {
        setTimeout(() => {
            if (timeLeft <= 0) {
                navigation.goBack();
                clearTimeout(timer);
            }
            setTimeLeft(timeLeft - 1);
        }, 1000);
    };
    useEffect(() => {
        startTime();
        //clean up
        return () => clearTimeout(timer);
    });
    return (
        <SafeAreaView>
            <RestImage
                source={{
                    uri: 'https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_500:300,c_fit/dpr_2/image/carefit/bundle/CF01032_magazine_2.png',
                }}
            />

            <RestHeader>TAKE A BREAK!</RestHeader>
            <TimeContainer>{timeLeft}</TimeContainer>
        </SafeAreaView>
    );
};

export default RestScreen;
