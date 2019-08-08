import React from "react";
import { StyleSheet } from "react-native";
import { logger } from "../shared/logger";
import { Button } from "react-native-elements";

type Props = {
  title: string;
  onPress: () => void;
};

export const BaseButton = ({ title, onPress }: Props) => (
  <Button
    style={styles.button}
    title={title}
    onPress={() => {
      logger.info("button:pressed", { title });
      onPress();
    }}
  />
);

const styles = StyleSheet.create({
  button: {
    margin: 10
  }
});
