import React from 'react';
import { Platform } from 'react-native';
import { useNavigation as useNativeNavigation } from '@react-navigation/native';
import { useRouter } from 'next/router';

const Navigate = ({ to }) => {
  const webRouter = useRouter ? useRouter() : null;
  const nativeNavigation = useNativeNavigation ? useNativeNavigation() : null;

  const navigate = () => {
    if (Platform.OS === 'web') {
      webRouter && webRouter.push(to);
    } else {
      nativeNavigation && nativeNavigation.navigate(to);
    }
  };

  return (
    <button onClick={navigate}>Navigate</button>
  );
};
