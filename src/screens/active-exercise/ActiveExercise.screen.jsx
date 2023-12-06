import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useContext } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { FitnessContext } from '../../contexts/fitness.context';

import DoneButton from '../../components/done-button/DoneButton.component';
import PreviousButton from '../../components/previous-button/PreviousButton.component';
import SkipButton from '../../components/skip-button/SkipButton.component';

import {
    ButtonContainer,
    ExerciseImage,
    ExerciseName,
    ExerciseSets,
} from './ActiveExercise.styles';

const ActiveExerciseScreen = () => {
    const route = useRoute();
    const exercise = route.params.exercises;
    const navigation = useNavigation();
    const [index, setIndex] = useState(0);
    const currentExercise = exercise[index];
    const { image, name, sets } = currentExercise;

    const {
        completed,
        setCompleted,
        workout,
        setWorkout,
        minutes,
        setMinutes,
        calories,
        setCalories,
    } = useContext(FitnessContext);

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
        setCompleted([...completed, name]);
        setWorkout(workout + 1);
        setMinutes(minutes + 2.5);
        setCalories(calories + 6.3);
        setTimeout(() => {
            setIndex(index + 1);
        }, 2000);
    };

    return (
        <SafeAreaView>
            <ExerciseImage source={{ uri: image }} />
            <ExerciseName>{name}</ExerciseName>
            <ExerciseSets>x{sets}</ExerciseSets>

            {index + 1 >= exercise.length ? (
                <DoneButton onPress={onPressNavigateHome} />
            ) : (
                <DoneButton onPress={onPressHandler} />
            )}

            <ButtonContainer>
                <PreviousButton onPress={onPrevHandler} index={index} />

                {index + 1 >= exercise.length ? (
                    <SkipButton onPress={onNavigateHome} />
                ) : (
                    <SkipButton onPress={onSkipHandler} />
                )}
            </ButtonContainer>
        </SafeAreaView>
    );
};

export default ActiveExerciseScreen;
