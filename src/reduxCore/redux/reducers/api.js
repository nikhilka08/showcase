import types from "../types";

export default function api(state = {}, action) {
  const { response, error, loading } = action;
  let payload;
  if (error) {
    const error = { error: { ...response }, loading };
    payload = error;
  } else {
    const data = { data: { ...response }, loading };
    payload = data;
  }
  switch (action.type) {
    case types.api.store:
      return {
        ...state,
        [action.id]: payload,
      };
    case types.api.update:
      return { ...state, [action.id]: { ...action.payload } };
    case types.localStore:
      return { ...state, [action.id]: action.data };
    default:
      return state;
  }
}
