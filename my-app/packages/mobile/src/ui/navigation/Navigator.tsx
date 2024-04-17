import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/Home/HomeScreen';
import {FormScreen} from '../screens/Form/FormScreen';
import {routes} from '@shared/utils/routes';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={routes.form.mobile}>
      <Stack.Screen name={routes.home.mobile} component={HomeScreen} />
      <Stack.Screen name={routes.form.mobile} component={FormScreen} />
    </Stack.Navigator>
  );
};
