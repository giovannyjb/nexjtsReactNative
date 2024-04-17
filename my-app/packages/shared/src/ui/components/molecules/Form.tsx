import React from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import { Formik } from "formik";
import validationSchema from "../../../utils/validations/validation.form";
import MyButton from "../atoms/ButtonRNW";
import twApp from "../../../lib/tailwindMobile";
import CreatePostmanUseCase from "@shared/domain/use-cases/postman/createPostman.use.case";
import { USECASES_TYPES } from "@shared/infrastructure/ioc/containers/usecases/usecases.types";
import { appContainer } from "@shared/infrastructure/ioc/containers/inversify.config";

const Form = () => {
  //CONTAINERS
  const CreatePostmanUseCase = appContainer.get<CreatePostmanUseCase>(
    USECASES_TYPES._CreatePostmanUseCase
  );
  
  console.log("CREATEPOSTMANUSECASE", CreatePostmanUseCase);
  return (
    <View style={twApp` bg-principal-80`}>
      <Formik
        initialValues={{ id: "", name: "", lastname: "", age: "" }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          if (values) {
            const result = await CreatePostmanUseCase.execute({
              data: { values },
            });

            console.log("GOOD!",result);

          } else {
            console.log("Vacio!");
          }
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={twApp`pl-4 mt-8`}>
            <TextInput
              onChangeText={handleChange("id")}
              onBlur={handleBlur("id")}
              value={values.id}
              placeholder="Identificación"
              style={styles.input}
            />
            {touched.id && errors.id && (
              <Text style={styles.errorText}>{errors.id}</Text>
            )}

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
            {/*<Navigate
              to={Platform.OS === "web" ? routes.home.web : routes.home.mobile}
          />*/}
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
