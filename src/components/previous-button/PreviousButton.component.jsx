import React from 'react';
import { PreviousButtonContainer, PreviousButtonText } from './PreviousButton.styles';

const PreviousButton = ({ onPress, index }) => {
    return (
        <PreviousButtonContainer disabled={index === 0} onPress={onPress}>
            <PreviousButtonText>Prev</PreviousButtonText>
        </PreviousButtonContainer>
    );
};

export default PreviousButton;
