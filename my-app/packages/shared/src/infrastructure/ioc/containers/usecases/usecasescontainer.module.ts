import CreatePostmanUseCase from "@shared/domain/use-cases/postman/createPostman.use.case";
import { ContainerModule, interfaces } from "inversify";
import { USECASES_TYPES } from "./usecases.types";

export const usecasesModule = new ContainerModule((bind: interfaces.Bind) => {

    bind<CreatePostmanUseCase>(USECASES_TYPES._CreatePostmanUseCase).to(
        CreatePostmanUseCase
      );
});
