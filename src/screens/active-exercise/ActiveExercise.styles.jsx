import styled from 'styled-components/native';

export const ButtonContainer = styled.Pressable`
    flex-direction: row;
    align-items: 'center';
    margin-left: 'auto';
    margin-right: 'auto';
    margin-top: 50px;
    justify-content: space-between;
`;

export const ExerciseImage = styled.Image`
    width: 100%;
    height: 370px;
`;

export const ExerciseName = styled.Text`
    margin-left: auto;
    margin-right: auto;
    font-size: 30px;
    font-weight: bold;
`;

export const ExerciseSets = styled.Text`
    margin-left: auto;
    margin-right: auto;
    font-size: 38px;
    font-weight: bold;
    margin-top: 20px;
    color: gray;
`;
