import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:3001/",
});
// let isLoading = true;
// Api.defaults.headers.common["Authorization"] = localStorage.getItem("token");

// 요청 인터셉터 추가
Api.interceptors.request.use(
  function (config) {
    // 요청을 보내기 전에 수행할 일
    return config;
  },
  function (error) {
    // 오류 요청을 보내기전 수행할 일
    // ...
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가
Api.interceptors.response.use(
  function (response) {
    // 응답 데이터를 가공
    return response;
  },
  function (error) {
    // 오류 응답을 처리
    return Promise.reject(error);
  }
);

export default Api;
