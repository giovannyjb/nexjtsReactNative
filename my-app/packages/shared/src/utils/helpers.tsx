import { BadRequestError, ForbiddenError, NotFoundError, ServerError, UnauthorizedError } from '@shared/lib/config';
import { AxiosError } from 'axios';
import { Platform, Alert } from 'react-native';

export const saludo = () => {
    if (Platform.OS === 'web') {
        // Muestra una alerta en la web
        alert('Estás en la web');
      } else {
        // Muestra una alerta en móvil
        Alert.alert('Información', 'Estás en un dispositivo móvil');
      }
}


export function handleAxiosError(error: AxiosError, message?: string, url?:string): never {
  if (error.response) {
    switch (error.response.status) {
      case 400:
        throw new BadRequestError(
          `Petición incorrecta  ${message ?? ""}`
        );
      case 401:
        throw new UnauthorizedError(
          `No autorizado ${message ?? ""} `
        );
      case 403:
        throw new ForbiddenError(
          `Prohibido   ${message ?? ""}`
        );
      case 404:
        throw new NotFoundError(
          `Recurso no encontrado   ${message ?? ""} ${
            error.response.config.url
          }`
        );
      case 500:
        throw new ServerError(
          `Error interno del servidor   ${message ?? ""} ${
            error.response.config.url
          }`
        );
      // ... otros casos de error
      default:
        throw new Error(
          `Error desconocido del servidor   ${message ?? ""} ${
            error.response.config.url
          }`
        );
    }
  } else if (error.request) {
    throw new Error(`No se recibió respuesta del servidor  ${message ?? ""}`);
  } else {
    throw new Error(`Error al configurar la petición ${message ?? ""}  `);
  }
}
