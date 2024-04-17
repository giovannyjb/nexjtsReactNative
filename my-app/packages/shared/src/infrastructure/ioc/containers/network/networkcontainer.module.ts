import { ContainerModule, interfaces } from "inversify";
import { NETWORK_TYPES } from "./network.types";
import { AxiosInstance } from "axios";
import AxiosInstancePostman from "@shared/infrastructure/network/instances/axios-instance";


export const networkModule = new ContainerModule((bind: interfaces.Bind) => {

    bind<AxiosInstance>(NETWORK_TYPES._AxiosInstancePostman).toConstantValue(
        AxiosInstancePostman
      );
});
