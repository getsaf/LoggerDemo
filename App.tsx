import React, { useEffect } from "react";
import { StyleSheet, SafeAreaView, Alert } from "react-native";
import { BaseButton } from "./components/BaseButton";
import { createAppStore } from "./store";
import { Provider } from "react-redux";
import { logger, logEnhancer } from "./shared/logger";

const store = createAppStore();

export default function App() {
  useEffect(() => {
    logger.interceptor = logEnhancer(store);
  }, []);
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <BaseButton
          title="Foo"
          onPress={() => Alert.alert("You pressed Foo")}
        />
        <BaseButton
          title="Bar"
          onPress={() => Alert.alert("You pressed Bar")}
        />
        <BaseButton
          title="Baz"
          onPress={() => Alert.alert("You pressed Baz")}
        />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
