import { UserActions } from "../actions/user";

export type UserState = {
  loggedIn: boolean;
};

export const initialState: UserState = {
  loggedIn: false
};

export function user(state: UserState = initialState, action: UserActions) {
  switch (action.type) {
    case "LOG_IN":
      return { ...state, loggedIn: true };
    case "LOG_OUT":
      return { ...state, loggedIn: false };
    default:
      return initialState;
  }
}
