export default class APIResponse {
  status;
  statusText;
  response;
  request;
  error;

  constructor(status, statusText, response, request, error) {
    this.status = status;
    this.statusText = statusText;
    this.response = response;
    this.request = request;
    this.error = error;
  }
}
