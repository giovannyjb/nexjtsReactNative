import { Platform, Alert } from 'react-native';

export const saludo = () => {
    if (Platform.OS === 'web') {
        // Muestra una alerta en la web
        alert('Estás en la web');
      } else {
        // Muestra una alerta en móvil
        Alert.alert('Información', 'Estás en un dispositivo móvil');
      }
}