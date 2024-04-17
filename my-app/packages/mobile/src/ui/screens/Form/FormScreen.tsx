import {useNavigation} from '@react-navigation/native';
import Form from '@shared/ui/components/molecules/Form';
import {routes} from '@shared/utils/routes';
import {Pressable, Text, TouchableOpacity, View} from 'react-native';

export const FormScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>ESTAS EN FORM</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate(routes.home.mobile as never)}>
        <Text>IR A HOME</Text>
      </TouchableOpacity>


<Form></Form>
      
    </View>
  );
};
