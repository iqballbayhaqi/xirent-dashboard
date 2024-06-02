export const API_BASE_URL = process.env.REACT_APP_API_URL;

export const API_ENDPOINTS = {
  Login: "/xirentapiAdmin//login",
  VerifikasiKtp: (id) => `/xirentapiAdmin/verification-ktp-user/${id}`,
  GetAllUsers: (id) => `/xirentapiAdmin/get-all-user/${id}`,
  GetWithdrawal: (id) => `/xirentapiAdmin/get-all-user/${id}`,
  PutWithdrawal: (id) => `/xirentapiAdmin/withdrawal-assesment/${id}`,
  GetAllOrder: (id) => `/xirentapiAdmin/get-all-orders/${id}`,
  GetInsight: (id) => `/xirentapiAdmin/insight/${id}`,
  CancelDeposit: (id, orderCode) =>
    `/xirentapiAdmin/cancel-deposit/${id}/${orderCode}`,
  TransferDeposit: (id, orderCode) =>
    `/xirentapiAdmin/transfer-deposit/${id}/${orderCode}`,
};
