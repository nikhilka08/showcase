import APIRequest from "../reduxCore/apiClient/APIRequest";
import { apiPromise } from "../reduxCore/apiClient/apiPromise";

export const fetchUniversityData = async (query) => {
  const request = new APIRequest(
    `http://universities.hipolabs.com/search?name=${query}`,
    "GET",
    "University"
  );
  request.options.storeResponse = false;
  const data = await apiPromise(request);

  return data;
};
