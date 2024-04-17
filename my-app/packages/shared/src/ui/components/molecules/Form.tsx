import React from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import { Formik } from "formik";
import validationSchema from "../../../utils/validations/validation.form";
import MyButton from "../atoms/ButtonRNW";
import twApp from "../../../lib/tailwindMobile";
import TextInputExample from "../atoms/Input";
import Navigate from "../../../utils/routes/navigate";
import { routes } from "../../../utils/routes";
import { Platform } from "react-native";

const Form = () => {
  return (
    <View style={twApp``}>
      <Formik
        initialValues={{ id: "", name: "", lastname: "", age: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={twApp`pl-4`}>
            <View style={twApp``}>
              <View style={twApp``}>
                <Text style={twApp`text-xl font-bold my-4`}>
                  Información Personal
                </Text>
              </View>
              <View style={twApp`mb-3`}>
                <TextInputExample
                  name="a"
                  onChangeText={handleChange("id")}
                  onBlur={handleBlur("id")}
                  value={values.id}
                  placeholder="Identificación"
                  inputMode="numeric"
                />
                {touched.id && errors.id && (
                  <Text style={styles.errorText}>{errors.id}</Text>
                )}
              </View>
            </View>

            <TextInput
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
              placeholder="Nombre"
              style={styles.input}
            />
            {touched.name && errors.name && (
              <Text style={styles.errorText}>{errors.name}</Text>
            )}

            <TextInput
              onChangeText={handleChange("lastname")}
              onBlur={handleBlur("lastname")}
              value={values.lastname}
              placeholder="Apellido"
              style={styles.input}
            />
            {touched.lastname && errors.lastname && (
              <Text style={styles.errorText}>{errors.lastname}</Text>
            )}

            <TextInput
              onChangeText={handleChange("age")}
              onBlur={handleBlur("age")}
              value={values.age}
              placeholder="Edad"
              inputMode="numeric"
              style={styles.input}
            />
            {touched.age && errors.age && (
              <Text style={styles.errorText}>{errors.age}</Text>
            )}

            <MyButton primary onPress={handleSubmit} title="Enviar" />
            <Navigate
              to={Platform.OS === "web" ? routes.home.web : routes.home.mobile}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});

export default Form;
