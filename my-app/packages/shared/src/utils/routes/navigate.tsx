// Navigate.js o Navigate.tsx si estás usando TypeScript
import React from "react";
import { Platform, Pressable } from "react-native";

// Importaciones condicionales según la plataforma
let Link: any, useNavigation: any;
if (Platform.OS === "web") {
  Link = require("next/Link").default;
} else {
  useNavigation = require("@react-navigation/native").useNavigation;
}

interface NavigationProps {
  to: string;
}

const Navigate: React.FC<NavigationProps> = ({ to }) => {
  const nativeNavigation = useNavigation ? useNavigation() : undefined;

  const navigate = () => {
    if (Platform.OS !== "web" && nativeNavigation) {
      nativeNavigation.navigate(to);
    }
  };

  if (Platform.OS === "web") {
    return <Link href={to}>Navigate to {to}</Link>;
  }

  return <Pressable onPress={navigate}>Navigate to {to}</Pressable>;
};

export default Navigate;
