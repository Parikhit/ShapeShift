import { View, ScrollView, Image } from 'react-native';
import React, { useContext } from 'react';
import FitnessCards from '../../components/FitnessCards.component';
import { FitnessContext } from '../../contexts/fitness.context';

import {
    HomeScreenContainer,
    WorkoutContainer,
    HeaderText,
    InfoContainer,
    InfoData,
    InfoName,
    ExerciseCardContainer,
    CardImage,
} from './Home.styles';

const HomeScreen = () => {
    const { workout, minutes, calories } = useContext(FitnessContext);

    return (
        <HomeScreenContainer>
            <ScrollView>
                <WorkoutContainer>
                    <HeaderText>HOME WORKOUT</HeaderText>
                    <InfoContainer>
                        <View>
                            <InfoData>{workout}</InfoData>
                            <InfoName>WORKOUTS</InfoName>
                        </View>
                        <View>
                            <InfoData>{calories}</InfoData>
                            <InfoName>KCAL</InfoName>
                        </View>
                        <View>
                            <InfoData>{minutes}</InfoData>
                            <InfoName>MINS</InfoName>
                        </View>
                    </InfoContainer>
                </WorkoutContainer>

                <ExerciseCardContainer>
                    <CardImage
                        source={{
                            uri: 'https://www.joe.co.uk/uploads/2018/08/20122326/Screen-Shot-2018-08-20-at-12.22.43.png?height=426&width=816',
                        }}
                    />
                </ExerciseCardContainer>
                <FitnessCards />
            </ScrollView>
        </HomeScreenContainer>
    );
};

export default HomeScreen;
