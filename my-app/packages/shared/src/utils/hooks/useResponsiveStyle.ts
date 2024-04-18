import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { ViewStyle } from 'react-native';

interface ResponsiveStyleProps {
  base: ViewStyle;
  sm?: ViewStyle;
  md?: ViewStyle;
  lg?: ViewStyle;
  xl?: ViewStyle;
}

const useResponsiveStyle = (styles: ResponsiveStyleProps): ViewStyle => {
  const [responsiveStyle, setResponsiveStyle] = useState<ViewStyle>(styles.base);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = Dimensions.get('window').width;
      if (windowWidth >= 1200 && styles.xl) {
        setResponsiveStyle({ ...styles.base, ...styles.xl });
      } else if (windowWidth >= 992 && styles.lg) {
        setResponsiveStyle({ ...styles.base, ...styles.lg });
      } else if (windowWidth >= 768 && styles.md) {
        setResponsiveStyle({ ...styles.base, ...styles.md });
      } else if (windowWidth >= 576 && styles.sm) {
        setResponsiveStyle({ ...styles.base, ...styles.sm });
      } else {
        setResponsiveStyle(styles.base);
      }
    };

    handleResize(); // Establecer estilo inicial al cargar
    const subscription = Dimensions.addEventListener('change', handleResize);

    return () => {
      // Correctamente remover el event listener en desmontaje
      subscription?.remove();
    };
  }, [styles]);

  return responsiveStyle;
};

export default useResponsiveStyle;
