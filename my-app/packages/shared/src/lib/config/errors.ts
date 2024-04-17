export class NotFoundError extends Error {
  statusCode: number;

  constructor(message = "Recurso no encontrado") {
    super(message);
    this.name = "NotFoundError";
    this.statusCode = 404;
  }
}

export class UnauthorizedError extends Error {
  statusCode: number;

  constructor(message = "No tienes autorización") {
    super(message);
    this.name = "UnauthorizedError";
    this.statusCode = 401;
  }
}

export class BadRequestError extends Error {
  statusCode: number;

  constructor(message = "Mala petición", path="default") {
    super(message);
    this.name = "BadRequestError";
    this.message = message
    this.statusCode = 400;
  }
}

export class ServerError extends Error {
  statusCode: number;

  constructor(message = "Error interno del servidor") {
    super(message);
    this.name = "ServerError";
    this.statusCode = 500;
  }
}

export class ForbiddenError extends Error {
  statusCode: number;

  constructor(message = "Acceso prohibido") {
    super(message);
    this.name = "ForbiddenError";
    this.statusCode = 403;
  }
}

export class ConflictError extends Error {
  statusCode: number;

  constructor(message = "Conflicto en la petición") {
    super(message);
    this.name = "ConflictError";
    this.statusCode = 409;
  }
}

export class ValidationError extends Error {
  statusCode: number;

  constructor(message = "Error de validación") {
    super(message);
    this.name = "ValidationError";
    this.statusCode = 422;
  }
}
