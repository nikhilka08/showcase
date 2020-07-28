import types from "../types";

export function callAPI(request, resolve, reject) {
  return { type: types.api.call, request, resolve, reject };
}

export function storeData(data) {
  return { type: types.local, data };
}

export function updateAPIResponse(id, payload) {
  return { type: types.api.update, id, payload };
}

export function fieldUpdateAPIResponse(id, existingData, newData, updateField) {
  return {
    type: types.api.fieldUpdate,
    id,
    existingData,
    newData,
    updateField,
  };
}

export function removeAPIResponse(id) {
  return { type: types.api.remove, id };
}

export function logout(flag) {
  return { type: types.api.logout, payload: flag };
}
