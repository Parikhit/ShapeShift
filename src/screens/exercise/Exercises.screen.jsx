import { ScrollView } from 'react-native';
import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FitnessContext } from '../../contexts/fitness.context';
import { AntDesign } from '@expo/vector-icons';

import {
    HeaderImage,
    GoBackIcon,
    ExerciseCard,
    ExerciseImage,
    ExerciseDetail,
    ExerciseName,
    ExerciseSets,
    StartButton,
    StartText,
} from './Exercises.styles';

const Exercises = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { id, image, exercises } = route.params;

    const { completed, setCompleted } = useContext(FitnessContext);

    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <HeaderImage source={{ uri: image }} />

                <GoBackIcon
                    onPress={() => navigation.goBack()}
                    name='arrow-back-outline'
                    size={28}
                    color='white'
                />

                {exercises.map((exercise, index) => (
                    <ExerciseCard key={index}>
                        <ExerciseImage source={{ uri: exercise.image }} />
                        <ExerciseDetail>
                            <ExerciseName>{exercise.name}</ExerciseName>
                            <ExerciseSets>x{exercise.sets}</ExerciseSets>
                        </ExerciseDetail>
                        {completed.includes(exercise.name) && (
                            <AntDesign name='checkcircle' size={24} color='green' />
                        )}
                    </ExerciseCard>
                ))}

                <StartButton
                    onPress={() => {
                        navigation.navigate('ActiveExercise', { exercises });
                        setCompleted([]);
                    }}
                >
                    <StartText>Start</StartText>
                </StartButton>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Exercises;
