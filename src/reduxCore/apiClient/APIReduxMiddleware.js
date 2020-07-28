import Axios from "axios";

import types from "../redux/types";

import APIResponse from "./APIResponse";

const apiClient = (api) => (next) => (action) => {
  if (action.type === types.api.call) {
    const request = action.request;

    const id = action.request.id;
    const { header } = request;

    const requestConfig = {
      url: request.url,
      method: request.method,
      data: request.data,
      headers: header,
    };

    api.dispatch({
      type: types.api.store,
      response: {},
      id,
      loading: true,
    });

    Axios.request(requestConfig)
      .then((x) => successRequest(x, api, action, request, id))
      .catch((x) => failedRequest(x, api, action, request, id));
  }
  if (action.type === types.local) {
    api.dispatch({
      type: types.localStore,
      data: action.data,
      id: action.data.id,
      loading: false,
    });
  }
  return next(action);
};

function successRequest(response, api, action, request, id) {
  const apiResponse = createApiResponse(request, response);

  if (request.options.storeResponse) {
    dispatch(api, apiResponse, id, false);
  } else {
    dispatch(api, {}, id, false);
  }
  if (action.resolve) {
    action.resolve(apiResponse);
  }
}

function failedRequest(error, api, action, request, id) {
  const apiResponse = createApiResponse(request, error.response, error);
  dispatch(api, apiResponse, id, true);

  if (action.reject) {
    action.reject(apiResponse);
  }
}

function createApiResponse(request, response, error) {
  let apiResponse;
  if (response && response.status === 200) {
    apiResponse = new APIResponse(
      response.status,
      response.statusText,
      response.data,
      request
    );
  } else if (response && response.status !== 200) {
    apiResponse = new APIResponse(
      response.status,
      response.statusText,
      response.data,
      request,
      error
    );
  } else {
    apiResponse = new APIResponse(0, "", null, request);
  }

  if (error) {
    apiResponse.error = error.message;
  }
  return apiResponse;
}

function dispatch(api, response, id, error) {
  api.dispatch({
    type: types.api.store,
    response: response.response,
    id,
    loading: false,
    error,
  });
}

export default apiClient;
