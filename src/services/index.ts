import apiRequest from "@/utils/request";
import api from "./api";

const handleApiFun = (url: string) => {
  return function(method = "GET", data: object, loadingCopy = "加载中") {
    return apiRequest({
      url,
      method,
      data,
      loadingCopy
    });
  };
};

const ApiFun: any = {};
for (const key in api) {
  ApiFun[key] = handleApiFun(api[key]);
}
export default ApiFun;
