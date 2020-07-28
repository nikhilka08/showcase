import { store } from "../redux/store";
import { callAPI, storeData } from "../redux/actions/api";

function apiPromise(request) {
  return new Promise((resolve, reject) => {
    store.dispatch(callAPI(request, resolve, reject));
  });
}
function storeLocalData(data) {
  store.dispatch(storeData(data));
}

export { storeLocalData, apiPromise };
