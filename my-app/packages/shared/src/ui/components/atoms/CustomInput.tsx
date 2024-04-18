
import "./customInput.css";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";

const CustomInput: any = (
  {
    placeholder = "",
    name = "",
    onChange,
    value,
    className,
    disabled,
    onSubmit,
    onBlur = () => {},
    ...rest
  },
  ref
) => {
  return (
    <View style={twApp`input-wrapper mt-8 w-full ${className}`}>
      <TextInput
        style={twApp`input-text-color`}
        placeholder=" "
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        {...rest}
      />
      <span className={twApp`input-text-color ml-3`}>{placeholder}</span>
    </View>
  );
};

export default forwardRef(CustomInput);
