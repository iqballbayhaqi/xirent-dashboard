import clientHttp from "../../utils/ApiConfig";
import { API_BASE_URL, API_ENDPOINTS } from "../../utils/EndPoints";

export const verifKtp = (data) => {
  return clientHttp(API_BASE_URL)
    .post(API_ENDPOINTS.VerifikasiKtp(data.id), data.payload)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err.response.data;
    });
};

export const getAllUsers = (id) => {
  return clientHttp(API_BASE_URL)
    .get(API_ENDPOINTS.GetAllUsers(id))
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err.response.data;
    });
};

export const getOrders = (id) => {
  return clientHttp(API_BASE_URL)
    .get(API_ENDPOINTS.GetAllOrder(id))
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err.response.data;
    });
};

export const getInsight = (id) => {
  return clientHttp(API_BASE_URL)
    .get(API_ENDPOINTS.GetInsight(id))
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err.response.data;
    });
};

export const getWithdrawal = (data) => {
  return clientHttp(API_BASE_URL)
    .get(API_ENDPOINTS.GetWithdrawal(data.id), {
      params: data,
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err.response.data;
    });
};

export const transferDeposit = (data) => {
  return clientHttp(API_BASE_URL)
    .post(API_ENDPOINTS.TransferDeposit(data.id, data.oderCode), data.payload)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err.response.data;
    });
};

export const updateWhithdrawal = (data) => {
  return clientHttp(API_BASE_URL)
    .put(API_ENDPOINTS.PutWithdrawal(data.id), data.payload)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err.response.data;
    });
};

export const cancelDeposit = (data) => {
  return clientHttp(API_BASE_URL)
    .post(API_ENDPOINTS.CancelDeposit(data.id, data.orderCode))
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err.response.data;
    });
};
