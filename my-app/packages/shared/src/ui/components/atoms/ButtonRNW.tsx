//import { twApp } from "../../../../tailwindMobile";
import tw from "twrnc";
import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import twApp from "@shared/lib/tailwindMobile";
interface PropsButtonRNW {
  title: string;
  onPress: (...arg0: any) => void;
  primary?: boolean;
  label?: string;
  primaryClass?: string;
  secondaryClass?: string;
  className?: string;
  onClick?: (...arg0: any) => void;
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
}

const MyButton = ({
  title,
  onPress,
  primary = false,
  label = "Sección",
  primaryClass = "bg-principal-700 text-principal-150",
  secondaryClass = "border-[1px] border-principal-700 text-principal-700",
  className = "",
  onClick = () => {},
  type = "button",
  isLoading = false,
}: PropsButtonRNW) => {
  return (
    <Pressable
      onPress={onPress}
      style={twApp`font-outfit font-bold text-[1rem] leading-[1rem] rounded-full flex items-center justify-center ${
        isLoading ? "" : " active:scale-[99%]"
      } w-[180px] h-[50px]  ${
        primary ? `${primaryClass}` : `${secondaryClass}`
      } ${className}`}
    >
      {isLoading ? (
        <Text style={twApp`text-[1rem] font-bold text-principal-150`}>
          {"Cargando"}
        </Text>
      ) : (
        <Text style={twApp`text-[1rem] font-bold text-principal-150`}>
          {title}
        </Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});

export default MyButton;
