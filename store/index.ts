import {createStore} from 'redux';

export type AppStore = ReturnType<typeof createAppStore>;

export type action<TType extends string, TPayload> = {
  type: TType;
  payload: TPayload;
};

export type UserState = {
  username?: string;
}

const userReducer = (_state: UserState = {}, _action: object) => ({username: 'my demo user'});

export const createAppStore = () => createStore(userReducer);
