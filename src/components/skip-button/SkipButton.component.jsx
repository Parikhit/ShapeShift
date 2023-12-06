import React from 'react';
import { SkipButtonContainer, SkipButtonText } from './SkipButton.styles';

const SkipButton = ({ onPress }) => {
    return (
        <SkipButtonContainer onPress={onPress}>
            <SkipButtonText>Skip</SkipButtonText>
        </SkipButtonContainer>
    );
};

export default SkipButton;
