import React, { useState, createContext } from 'react';

export const FitnessContext = createContext();

export const FitnessProvider = ({ children }) => {
    const [completed, setCompleted] = useState([]);
    const [workout, setWorkout] = useState(0);
    const [calories, setCalories] = useState(0);
    const [minutes, setMinutes] = useState(0);

    const value = {
        completed,
        setCompleted,
        workout,
        setWorkout,
        calories,
        setCalories,
        minutes,
        setMinutes,
    };

    return <FitnessContext.Provider value={value}>{children}</FitnessContext.Provider>;
};
