import { store } from "../store";

export type UserActionTypes = "LOG_IN" | "LOG_OUT";

export type UserActions = {
  type: UserActionTypes
}

export function loginAction() {
  store.dispatch({ type: "LOG_IN" });
}

export function logoutAction() {
  store.dispatch({ type: "LOG_OUT" });
}
