import { injectable, inject } from "inversify";
import { NETWORK_TYPES } from "../ioc/containers/network/network.types";
import { isAxiosError, type AxiosInstance } from "axios";
import { IPostmanRepository } from "@shared/domain/repositories/postman.repository";
import { handleAxiosError } from "@shared/utils/helpers";

@injectable()
export default class PostmanRepositoryImplement implements IPostmanRepository {
  private axiosInstance: AxiosInstance;

  constructor(
    @inject(NETWORK_TYPES._AxiosInstancePostman) axiosInstance: AxiosInstance
  ) {
    this.axiosInstance = axiosInstance;
  }
  async create(data: any): Promise<any> {
    try {
      const config = {
        /*headers: {
          Authorization: "Bearer " + accessToken,
        },*/
      };
      let url = `/post`;

      const resp = await this.axiosInstance.post(url, data, config);

      if (resp) {
        return resp.data;
      } else {
        return false;
      }
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error);
        handleAxiosError(error, "postman ");
      } else {
        throw error;
      }
    }
  }
}
