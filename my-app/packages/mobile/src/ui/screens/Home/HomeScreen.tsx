import {useNavigation} from '@react-navigation/native';
import {routes} from '@shared/utils/routes';
import {Pressable, Text, View} from 'react-native';

export const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>ESTAS EN HOME</Text>

      <Pressable
        onPress={() => navigation.navigate(routes.form.mobile as never)}>
        <Text>IR A FORM</Text>
      </Pressable>
    </View>
  );
};
