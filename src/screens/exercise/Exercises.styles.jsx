import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

export const HeaderImage = styled.Image`
    width: 100%;
    height: 170px;
`;

export const GoBackIcon = styled(Ionicons)`
    position: absolute;
    top: 30px;
    left: 10px;
`;

export const ExerciseCard = styled.Pressable`
    margin: 10px;
    flex-direction: row;
    align-items: center;
`;

export const ExerciseImage = styled.Image`
    width: 90px;
    height: 90px;
`;

export const ExerciseDetail = styled.View`
    margin-left: 10px;
`;

export const ExerciseName = styled.Text`
    font-size: 17px;
    font-weight: bold;
    width: 240px;
`;

export const ExerciseSets = styled.Text`
    margin-top: 5px;
    font-size: 16px;
    color: gray;
`;

export const StartButton = styled.Pressable`
    background-color: blue;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
    padding: 14px;
    width: 120px;
    border-radius: 15px;
`;

export const StartText = styled.Text`
    text-align: center;
    color: white;
    font-size: 15px;
    font-weight: 600;
`;
