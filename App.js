import { StyleSheet } from 'react-native';
import StackNavigator from './StackNavigator';

import { FitnessProvider } from './src/contexts/fitness.context';

export default function App() {
    return (
        <FitnessProvider>
            <StackNavigator />
        </FitnessProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
