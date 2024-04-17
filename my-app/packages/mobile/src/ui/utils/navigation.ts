import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(name: any, params?: any) {
  navigationRef.current?.navigate(name, params);
}

export function reset(options?: any) {
  navigationRef.current?.reset(options);
}
