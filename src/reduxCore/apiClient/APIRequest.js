export const defaultRequestOptions = {
  storeResponse: true,
  storeResponseOnError: false,
};

export const defaultHeaders = {
  'Content-type': 'application/json',
  Accept: 'application/json',
  'Accept-Language': 'en-us',
};
export default class APIRequest {
  url;
  method;
  id;
  queryString;
  data;
  header = { ...defaultHeaders };
  options = { ...defaultRequestOptions };
  constructor(url, method, id, data) {
    this.url = url;
    this.method = method;
    this.id = id;
    this.data = data;
  }
}

export const RequestMethods = {
  Get: 'GET',
  Post: 'POST',
  Put: 'PUT',
  Patch: 'PATCH',
  Delete: 'DELETE',
};
