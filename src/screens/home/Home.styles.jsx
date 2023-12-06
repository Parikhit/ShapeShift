import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const HomeScreenContainer = styled(SafeAreaView)`
    padding-bottom: 15px;
`;

export const WorkoutContainer = styled.View`
    background-color: #070a37;
    padding: 10px;
    width: 100%;
    height: 200px;
`;
export const HeaderText = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 18px;
`;

export const InfoContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    padding: 15px;
`;

export const InfoData = styled.Text`
    text-align: center;
    font-weight: bold;
    color: white;
    font-size: 18px;
`;

export const InfoName = styled.Text`
    color: #d0d0d0;
    font-size: 17px;
    margin-top: 4px;
`;

export const ExerciseCardContainer = styled.View`
    justify-content: center;
    align-items: center;
`;

export const CardImage = styled.Image`
    width: 90%;
    height: 120px;
    margin-top: -60px;
    border-radius: 7px;
`;
