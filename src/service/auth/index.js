import clientHttp from "../../utils/ApiConfig";
import { API_BASE_URL, API_ENDPOINTS } from "../../utils/EndPoints";

export const login = (data) => {
  return clientHttp(API_BASE_URL)
    .post(API_ENDPOINTS.Login, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err.response.data;
    });
};
