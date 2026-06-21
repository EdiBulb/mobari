import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function ChangeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">변화</ThemedText>
      <ThemedText>변화 기록과 캐릭터 성장 정보를 확인하세요.</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
});
