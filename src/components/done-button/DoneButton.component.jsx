import React from 'react';
import { DoneButtonContainer, DoneButtonText } from './DoneButton.styles';

const DoneButton = ({ onPress }) => {
    return (
        <DoneButtonContainer onPress={onPress}>
            <DoneButtonText>Done</DoneButtonText>
        </DoneButtonContainer>
    );
};

export default DoneButton;
