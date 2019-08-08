import { Logger } from "kersplunk";
import { SECRETS } from "./_secrets";
import { Platform } from "react-native";
import { version as appVersion } from "../package.json";
import { AppStore } from "../store";

export const logger = Logger.singleton({
  enabled: process.env.NODE_ENV !== "test",
  splunkUrl: "https://your-splunk-server",
  authToken: SECRETS.splunkToken,
  splunkMeta: {
    index: "my_index"
  }
});

export const logEnhancer = (store: AppStore) => (log: undefined | object) => {
  const state = store.getState();
  return {
    app: "LoggerDemo",
    environment: "dev",
    ...log,
    meta: {
      username: state.username,
      os: Platform.OS,
      osVersion: Platform.Version,
      appVersion
    }
  };
};

