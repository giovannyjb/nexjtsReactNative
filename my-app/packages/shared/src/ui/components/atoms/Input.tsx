import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import twApp from "../../../lib/tailwindMobile";
import { ErrorMessage, FormikProps, useFormikContext } from "formik";
import { MasterItemProject } from "utils/types";

interface InputProps extends TextInputProps {
  name: string;
  placeholder?: string;
  disable?: boolean;
  total?: string | MasterItemProject | null;
  type?: string;
  reference?: React.Ref<HTMLInputElement>;
  form?: FormikProps<any>;
  focusError?: (...arg0: any) => void;
}

const TextInputExample = ({
  name,
  placeholder,
  disable = false,
  total,
  type = "text",
  reference,
  form,
  focusError = () => {},
}: InputProps) => {
  const [text, onChangeText] = React.useState("");
  const formik = useFormikContext();
  const { value } = formik.getFieldProps(name);
  const hasError = form?.touched[name] && form?.errors[name];

  return (
    <>
      <View style={twApp`flex justify-center`}>
        <TextInput
          style={twApp`w-full px-3.5 py-2 border border-[#bdbdbd] rounded focus:border-[#2584FF] focus:outline-none focus:ring-1 focus:ring-[#2584FF]${
            hasError ? "border-principal-500" : ""
          }`}
          onChangeText={onChangeText}
          value={text}
          placeholder={placeholder}
        />
      </View>
      <ErrorMessage
        name={name}
        render={(msg) => <Text style={twApp`text-principal-500"`}>{msg}</Text>}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextInputExample;
