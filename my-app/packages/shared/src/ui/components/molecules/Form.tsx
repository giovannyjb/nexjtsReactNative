import React, { useEffect, useState } from "react";
import { View, TextInput, Button, Text, StyleSheet, Dimensions } from "react-native";
import { Formik } from "formik";
import validationSchema from "../../../utils/validations/validation.form";
import MyButton from "../atoms/ButtonRNW";
import CreatePostmanUseCase from "@shared/domain/use-cases/postman/createPostman.use.case";
import { USECASES_TYPES } from "@shared/infrastructure/ioc/containers/usecases/usecases.types";
import { appContainer } from "@shared/infrastructure/ioc/containers/inversify.config";
import useResponsiveStyle from "@shared/utils/hooks/useResponsiveStyle";
import twApp from "@shared/lib/tailwindMobile";

const Form = () => {
  //CONTAINERS
  const CreatePostmanUseCase = appContainer.get<CreatePostmanUseCase>(
    USECASES_TYPES._CreatePostmanUseCase
  );

  const responsiveStyles = {
    base: twApp`p-2 mt-2 bg-principal-150`,
    sm: twApp`bg-principal-700`,
    md: twApp`bg-principal-500`,
    lg: twApp`bg-principal-150`,
    xl: twApp`bg-principal-200`
  };
  const dynamicStyles = useResponsiveStyle(responsiveStyles);



  
  return (
    <View style={twApp` mt-2`}>
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
          <View style={dynamicStyles}>
            <TextInput
              onChangeText={handleChange("id")}
              onBlur={handleBlur("id")}
              value={values.id}
              placeholder="Identificación"
              style={twApp`input-wrapper mt-8 w-full input-text-color`}
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
