import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function PhotosScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">사진</ThemedText>
      <ThemedText>주간 사진을 기록하고 확인할 수 있어요.</ThemedText>
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
